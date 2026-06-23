import React, { useState, useEffect, useCallback } from 'react';
import { base44 } from '@/api/base44Client';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import { Users, Eye, Clock, TrendingUp } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const fetchData = useCallback(async (propertyId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await base44.functions.invoke('getAnalyticsData', propertyId ? { propertyId } : {});
      if (res.data.error) {
        setError(res.data.error);
      } else {
        setData(res.data);
        setSelectedProperty(res.data.selectedProperty);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load analytics data. Make sure your Google Analytics account is connected.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePropertyChange = (e) => {
    fetchData(e.target.value);
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  const formatNumber = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--webik-cream)' }}>
      <StickyNav />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--webik-muted)' }}>
              Last 30 Days · Live Data
            </p>
            <h1 className="font-grotesk text-4xl lg:text-5xl font-light" style={{ color: 'var(--webik-dark)' }}>
              Analytics Dashboard
            </h1>
          </div>
          {data?.properties?.length > 1 && (
            <select
              value={selectedProperty || ''}
              onChange={handlePropertyChange}
              className="bg-white border rounded-lg px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--webik-cream-2)', color: 'var(--webik-dark)' }}
            >
              {data.properties.map(p => (
                <option key={p.id} value={p.id}>{p.displayName}</option>
              ))}
            </select>
          )}
        </div>

        {loading && (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--webik-cream-2)', borderTopColor: 'var(--webik-dark)' }}></div>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl p-8 text-center" style={{ background: 'rgba(200,240,72,0.08)' }}>
            <p className="font-inter text-sm" style={{ color: 'var(--webik-dark)' }}>{error}</p>
          </div>
        )}

        {data && !loading && !error && (
          <>
            {/* Blog manager link */}
            <div className="flex justify-end mb-6">
              <a href="/blog-dashboard" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-inter text-sm font-medium border transition-colors hover:bg-white" style={{ borderColor: 'var(--webik-cream-2)', color: 'var(--webik-dark)' }}>
                Manage Blog Posts →
              </a>
            </div>
            {/* Overview metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Total Users', value: formatNumber(data.overview.totalUsers), icon: Users },
                { label: 'Sessions', value: formatNumber(data.overview.sessions), icon: TrendingUp },
                { label: 'Page Views', value: formatNumber(data.overview.screenPageViews), icon: Eye },
                { label: 'Avg Session', value: formatDuration(data.overview.averageSessionDuration), icon: Clock },
              ].map((metric, i) => (
                <div key={i} className="rounded-2xl p-6 border" style={{ background: 'white', borderColor: 'var(--webik-cream-2)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon size={20} style={{ color: 'var(--webik-muted)' }} />
                  </div>
                  <p className="font-grotesk text-3xl font-light" style={{ color: 'var(--webik-dark)' }}>
                    {metric.value}
                  </p>
                  <p className="font-inter text-xs mt-1" style={{ color: 'var(--webik-muted)' }}>{metric.label}</p>
                </div>
              ))}
            </div>

            {/* Daily trend */}
            <div className="rounded-2xl p-6 lg:p-8 border mb-8" style={{ background: 'white', borderColor: 'var(--webik-cream-2)' }}>
              <h2 className="font-grotesk text-xl font-medium mb-6" style={{ color: 'var(--webik-dark)' }}>Daily Traffic (Last 30 Days)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data.dailyTrend}>
                  <defs>
                    <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C8F048" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#C8F048" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e2d6" />
                  <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6B7560' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#6B7560' }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #d4cfc0', fontSize: '13px' }} />
                  <Area type="monotone" dataKey="sessions" stroke="#0E1A0A" strokeWidth={2} fill="url(#colorSessions)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Two columns: Top pages + Traffic sources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top pages */}
              <div className="rounded-2xl p-6 lg:p-8 border" style={{ background: 'white', borderColor: 'var(--webik-cream-2)' }}>
                <h2 className="font-grotesk text-xl font-medium mb-6" style={{ color: 'var(--webik-dark)' }}>Top Pages by Traffic</h2>
                {data.topPages.length === 0 ? (
                  <p className="font-inter text-sm" style={{ color: 'var(--webik-muted)' }}>No page data for this period.</p>
                ) : (
                  <div className="space-y-4">
                    {data.topPages.map((page, i) => {
                      const maxViews = data.topPages[0]?.pageViews || 1;
                      return (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-mono text-sm truncate mr-3" style={{ color: 'var(--webik-dark)' }}>
                              {page.path}
                            </span>
                            <span className="font-mono text-sm font-medium whitespace-nowrap" style={{ color: 'var(--webik-dark)' }}>{formatNumber(page.pageViews)} views</span>
                          </div>
                          <div className="w-full rounded-full overflow-hidden" style={{ background: 'var(--webik-cream-2)', height: '6px' }}>
                            <div style={{ width: `${(page.pageViews / maxViews) * 100}%`, background: 'var(--webik-lime)', height: '100%' }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Traffic sources */}
              <div className="rounded-2xl p-6 lg:p-8 border" style={{ background: 'white', borderColor: 'var(--webik-cream-2)' }}>
                <h2 className="font-grotesk text-xl font-medium mb-6" style={{ color: 'var(--webik-dark)' }}>How Clients Find You</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data.trafficChannels} layout="vertical" margin={{ left: 10 }}>
                    <XAxis type="number" tick={{ fontSize: 11, fill: '#6B7560' }} />
                    <YAxis type="category" dataKey="channel" tick={{ fontSize: 11, fill: '#6B7560' }} width={100} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #d4cfc0', fontSize: '13px' }} />
                    <Bar dataKey="sessions" fill="#0E1A0A" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--webik-cream-2)' }}>
                  <p className="font-inter text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--webik-muted)' }}>Top Sources</p>
                  <div className="space-y-2">
                    {data.trafficSources.slice(0, 5).map((src, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="font-inter text-sm capitalize" style={{ color: 'var(--webik-dark)' }}>{src.source}</span>
                        <span className="font-mono text-sm" style={{ color: 'var(--webik-muted)' }}>{src.sessions} sessions</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}