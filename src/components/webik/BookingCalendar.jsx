import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function toDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isSelectable(date, maxDays) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + maxDays);
  const day = date.getDay();
  return date >= today && date <= maxDate && day !== 0 && day !== 6;
}

export default function BookingCalendar({ selectedDate, onSelect, maxDays = 14 }) {
  const now = new Date();
  const [viewDate, setViewDate] = useState(new Date(now.getFullYear(), now.getMonth(), 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startWeekday; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));

  const maxDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  maxDate.setDate(maxDate.getDate() + maxDays);
  const canGoNext = new Date(year, month + 1, 1) <= maxDate;

  const monthName = viewDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const selectedStr = selectedDate ? toDateStr(selectedDate) : null;

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-grotesk text-lg font-medium" style={{ color: 'var(--webik-dark)' }}>
          {monthName}
        </h3>
        <div className="flex gap-1.5">
          <button
            disabled
            className="w-9 h-9 rounded-lg flex items-center justify-center opacity-30 cursor-not-allowed"
            style={{ border: '1px solid rgba(14,26,10,0.1)' }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setViewDate(new Date(year, month + 1, 1))}
            disabled={!canGoNext}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ border: '1px solid rgba(14,26,10,0.1)', color: 'var(--webik-dark)' }}
            onMouseEnter={e => { if (canGoNext) e.currentTarget.style.background = 'var(--webik-cream-2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-center font-mono text-[10px] uppercase tracking-wider py-1" style={{ color: 'var(--webik-muted)' }}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, i) => {
          if (!date) return <div key={i} />;
          const selectable = isSelectable(date, maxDays);
          const isSelected = selectedStr === toDateStr(date);
          return (
            <button
              key={i}
              disabled={!selectable}
              onClick={() => onSelect(date)}
              className="aspect-square rounded-lg font-inter text-sm transition-all"
              style={{
                color: isSelected ? 'var(--webik-cream)' : selectable ? 'var(--webik-dark)' : 'rgba(14,26,10,0.25)',
                background: isSelected ? 'var(--webik-dark)' : 'transparent',
                cursor: selectable ? 'pointer' : 'default',
                border: selectable && !isSelected ? '1px solid rgba(14,26,10,0.08)' : '1px solid transparent',
              }}
              onMouseEnter={e => {
                if (selectable && !isSelected) e.currentTarget.style.background = 'var(--webik-cream-2)';
              }}
              onMouseLeave={e => {
                if (selectable && !isSelected) e.currentTarget.style.background = 'transparent';
              }}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}