import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { FileText, Palette, Loader2, Inbox } from 'lucide-react';
import GeneratedContentDialog from '@/components/brief/GeneratedContentDialog';

const STATUS_CONFIG = {
  submitted: { label: 'Submitted', className: 'bg-blue-100 text-blue-800 border-blue-200' },
  in_review: { label: 'In Review', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  generated: { label: 'Generated', className: 'bg-green-100 text-green-800 border-green-200' },
  archived: { label: 'Archived', className: 'bg-gray-100 text-gray-600 border-gray-200' },
  flagged_spam: { label: 'Flagged Spam', className: 'bg-red-100 text-red-800 border-red-200' },
};

const INDUSTRIES = [
  'Restaurant / Food & Beverage',
  'Law Firm / Legal',
  'E-commerce / Retail',
  'Healthcare / Medical',
  'Fitness / Wellness',
  'Real Estate',
  'Creative Agency / Studio',
  'Education',
  'SaaS / Tech',
  'Nonprofit',
  'Barbershop / Salon',
  'Other',
];

const STATUSES = ['submitted', 'in_review', 'generated', 'archived', 'flagged_spam'];

export default function BriefInbox() {
  const [briefs, setBriefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [dialog, setDialog] = useState({ open: false, title: '', loading: false, content: '', emptyMessage: '' });

  useEffect(() => {
    loadBriefs();
  }, []);

  const loadBriefs = async () => {
    setLoading(true);
    try {
      const data = await base44.entities.ClientBrief.list('-created_date', 200);
      setBriefs(data);
    } catch (err) {
      // let error bubble
    } finally {
      setLoading(false);
    }
  };

  const filteredBriefs = briefs.filter((b) => {
    if (statusFilter !== 'all' && b.status !== statusFilter) return false;
    if (industryFilter !== 'all' && b.industry !== industryFilter) return false;
    return true;
  });

  const handleView = async (brief, type) => {
    const entityName = type === 'website' ? 'WebsiteBrief' : 'StyleGuide';
    const label = type === 'website' ? 'Website Brief' : 'Style Guide';
    setDialog({
      open: true,
      title: `${label} — ${brief.business_name}`,
      loading: true,
      content: '',
      emptyMessage: '',
    });
    try {
      const records = await base44.entities[entityName].filter({ client_brief_id: brief.id });
      if (records.length === 0) {
        setDialog((prev) => ({
          ...prev,
          loading: false,
          content: '',
          emptyMessage: `No ${label.toLowerCase()} has been linked to this brief yet.`,
        }));
      } else {
        setDialog((prev) => ({
          ...prev,
          loading: false,
          content: records[0].generated_prompt || '',
          emptyMessage: records[0].generated_prompt ? '' : `The linked ${label.toLowerCase()} has no generated prompt yet.`,
        }));
      }
    } catch (err) {
      setDialog((prev) => ({
        ...prev,
        loading: false,
        content: '',
        emptyMessage: 'Failed to load content. Please try again.',
      }));
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-grotesk text-3xl font-medium text-slate-900">Brief Inbox</h1>
          <p className="text-sm text-slate-500 mt-1">All client website briefs submitted through the intake form.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Status:</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                {STATUSES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {STATUS_CONFIG[s].label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Industry:</span>
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="w-[220px] bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All industries</SelectItem>
                {INDUSTRIES.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="ml-auto text-sm text-slate-500">
            {filteredBriefs.length} {filteredBriefs.length === 1 ? 'brief' : 'briefs'}
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-slate-400" size={32} />
          </div>
        ) : filteredBriefs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Inbox size={48} className="text-slate-300 mb-4" />
            <p className="text-slate-500">No briefs found matching your filters.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Business Name</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBriefs.map((brief) => {
                  const statusCfg = STATUS_CONFIG[brief.status] || STATUS_CONFIG.submitted;
                  return (
                    <TableRow key={brief.id}>
                      <TableCell className="font-medium text-slate-900">{brief.business_name}</TableCell>
                      <TableCell className="text-slate-600 text-sm">{brief.industry || '—'}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusCfg.className}`}>
                          {statusCfg.label}
                        </span>
                      </TableCell>
                      <TableCell className="text-slate-600 text-sm">{formatDate(brief.created_date)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1.5"
                            onClick={() => handleView(brief, 'website')}
                          >
                            <FileText size={14} />
                            Website Brief
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1.5"
                            onClick={() => handleView(brief, 'style')}
                          >
                            <Palette size={14} />
                            Style Guide
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      <GeneratedContentDialog
        open={dialog.open}
        onClose={() => setDialog((prev) => ({ ...prev, open: false }))}
        title={dialog.title}
        loading={dialog.loading}
        content={dialog.content}
        emptyMessage={dialog.emptyMessage}
      />
    </div>
  );
}