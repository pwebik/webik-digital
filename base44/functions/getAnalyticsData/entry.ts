import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("google_analytics");

    let body = {};
    try { body = await req.json(); } catch {}

    // List available GA4 properties
    const adminRes = await fetch('https://analyticsadmin.googleapis.com/v1beta/properties?showDeleted=false&pageSize=200', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    const adminData = await adminRes.json();

    if (!adminData.properties || adminData.properties.length === 0) {
      return Response.json({ error: 'No Google Analytics 4 properties found. Make sure your Google account has access to a GA4 property.' }, { status: 404 });
    }

    const properties = adminData.properties.map(p => ({
      id: p.name.replace('properties/', ''),
      displayName: p.displayName
    }));

    const selectedId = body.propertyId && properties.find(p => p.id === body.propertyId)
      ? body.propertyId
      : properties[0].id;

    const dataUrl = `https://analyticsdata.googleapis.com/v1beta/properties/${selectedId}:runReport`;
    const headers = { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' };
    const dateRange = { startDate: '30daysAgo', endDate: 'today' };

    // Run all reports in parallel
    const [overviewRes, pagesRes, channelsRes, sourcesRes, trendRes] = await Promise.all([
      fetch(dataUrl, { method: 'POST', headers, body: JSON.stringify({
        dateRanges: [dateRange],
        metrics: [{ name: 'totalUsers' }, { name: 'sessions' }, { name: 'screenPageViews' }, { name: 'averageSessionDuration' }]
      })}),
      fetch(dataUrl, { method: 'POST', headers, body: JSON.stringify({
        dateRanges: [dateRange],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10
      })}),
      fetch(dataUrl, { method: 'POST', headers, body: JSON.stringify({
        dateRanges: [dateRange],
        dimensions: [{ name: 'sessionDefaultChannelGrouping' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10
      })}),
      fetch(dataUrl, { method: 'POST', headers, body: JSON.stringify({
        dateRanges: [dateRange],
        dimensions: [{ name: 'sessionSource' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10
      })}),
      fetch(dataUrl, { method: 'POST', headers, body: JSON.stringify({
        dateRanges: [dateRange],
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }]
      })})
    ]);

    const [overviewData, pagesData, channelsData, sourcesData, trendData] = await Promise.all([
      overviewRes.json(), pagesRes.json(), channelsRes.json(), sourcesRes.json(), trendRes.json()
    ]);

    const ov = overviewData.rows?.[0]?.metricValues || [];
    const overview = {
      totalUsers: parseInt(ov[0]?.value || '0'),
      sessions: parseInt(ov[1]?.value || '0'),
      screenPageViews: parseInt(ov[2]?.value || '0'),
      averageSessionDuration: parseFloat(ov[3]?.value || '0')
    };

    const topPages = (pagesData.rows || []).map(row => ({
      path: row.dimensionValues[0].value,
      pageViews: parseInt(row.metricValues[0].value || '0'),
      sessions: parseInt(row.metricValues[1].value || '0'),
      users: parseInt(row.metricValues[2].value || '0')
    }));

    const trafficChannels = (channelsData.rows || []).map(row => ({
      channel: row.dimensionValues[0].value,
      sessions: parseInt(row.metricValues[0].value || '0'),
      users: parseInt(row.metricValues[1].value || '0')
    }));

    const trafficSources = (sourcesData.rows || []).map(row => ({
      source: row.dimensionValues[0].value,
      sessions: parseInt(row.metricValues[0].value || '0'),
      users: parseInt(row.metricValues[1].value || '0')
    }));

    const dailyTrend = (trendData.rows || []).map(row => {
      const d = row.dimensionValues[0].value;
      return {
        date: `${d.substring(4,6)}/${d.substring(6,8)}`,
        sessions: parseInt(row.metricValues[0].value || '0'),
        users: parseInt(row.metricValues[1].value || '0')
      };
    });

    return Response.json({
      properties,
      selectedProperty: selectedId,
      overview,
      topPages,
      trafficChannels,
      trafficSources,
      dailyTrend
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});