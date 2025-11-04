import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export default function PerformanceOverview() {
  const stats = [
    { label: 'ROAS', value: '4.2x' },
    { label: 'Spend', value: '$3,480' },
    { label: 'Revenue', value: '$14,616' },
    { label: 'CPA', value: '$12.40' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
        <BarChart3 className="h-4 w-4" />
        <span>Unified performance preview</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="md:col-span-3 rounded-2xl border border-slate-200/10 bg-slate-900/50 p-6 text-white">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Cross-channel trend</h3>
            <span className="text-xs text-white/60">Last 14 days</span>
          </div>

          {/* Faux bars chart */}
          <div className="mt-2 grid h-40 grid-cols-14 items-end gap-2">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="flex h-full items-end">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-indigo-500 to-fuchsia-500"
                  style={{ height: `${30 + Math.abs(Math.sin(i)) * 60}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white">
              <div className="text-xs text-white/60">{s.label}</div>
              <div className="mt-1 text-2xl font-semibold">{s.value}</div>
            </div>
          ))}
          <div className="col-span-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-200">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4" />
              <span>AI optimization impact</span>
            </div>
            <p className="mt-1 text-xs text-emerald-100/80">+18% ROAS vs. equal split budget</p>
          </div>
        </div>
      </div>
    </section>
  );
}
