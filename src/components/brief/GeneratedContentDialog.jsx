import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, Check, Loader2 } from 'lucide-react';

export default function GeneratedContentDialog({ open, onClose, title, loading, content, emptyMessage }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-muted-foreground" size={28} />
          </div>
        ) : content ? (
          <div className="space-y-4">
            <Button onClick={handleCopy} variant="outline" size="sm" className="gap-2">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy to clipboard'}
            </Button>
            <pre
              className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm whitespace-pre-wrap break-words border"
              style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}
            >
              {content}
            </pre>
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-12">{emptyMessage || 'No content generated yet.'}</p>
        )}
      </DialogContent>
    </Dialog>
  );
}