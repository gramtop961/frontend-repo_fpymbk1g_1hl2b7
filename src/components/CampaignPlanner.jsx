import React, { useMemo, useState } from 'react';
import { Rocket, Calendar, DollarSign } from 'lucide-react';

const PLATFORMS = ['Facebook', 'Instagram', 'TikTok', 'Google', 'WhatsApp'];

export default function CampaignPlanner() {
  const [name, setName] = useState('Spring Launch');
  const [objective, setObjective] = useState('Conversions');
  const [budget, setBudget] = useState(5000);
  const [start, setStart] = useState(() => new Date().toISOString().slice(0, 10));
  const [end, setEnd] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().slice(0, 10);
  });
  const [activePlatforms, setActivePlatforms] = useState(new Set(PLATFORMS));

  const selectedPlatforms = useMemo(() => Array.from(activePlatforms), [activePlatforms]);

  const togglePlatform = (p) => {
    setActivePlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      objective,
      budget: Number(budget),
      start,
      end,
      platforms: selectedPlatforms,
    };
    // In a full app, this would call the backend. For now we just log.
    // eslint-disable-next-line no-console
    console.log('Campaign draft', payload);
    alert('Campaign draft created! (UI demo)');
  };

  return (
    <section id="planner" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200/10 bg-slate-900/50 p-6 text-white shadow-xl shadow-slate-950/20">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Plan your unified campaign</h2>
            <p className="mt-1 text-sm text-white/70">One setup, multiple channels. The AI will tailor settings per platform.</p>
          </div>
          <div className="hidden sm:block text-xs text-white/60">AI will optimize spend in real time</div>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left column */}
          <div className="md:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm text-white/80">Campaign name</span>
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-white/20"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Spring Drop 2025"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm text-white/80">Objective</span>
              <select
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-white/20"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              >
                {['Awareness', 'Traffic', 'Leads', 'Sales', 'Conversions'].map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 flex items-center gap-2 text-sm text-white/80"><DollarSign className="h-4 w-4" /> Shared budget (USD)</span>
              <input
                type="number"
                min={100}
                step={50}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-white/20"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 flex items-center gap-2 text-sm text-white/80"><Calendar className="h-4 w-4" /> Start date</span>
                <input
                  type="date"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-white/20"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="mb-1 flex items-center gap-2 text-sm text-white/80"><Calendar className="h-4 w-4" /> End date</span>
                <input
                  type="date"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-white/20"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-1">
            <span className="mb-2 block text-sm text-white/80">Channels</span>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => {
                const active = activePlatforms.has(p);
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => togglePlatform(p)}
                    className={
                      'rounded-full border px-3 py-1.5 text-sm transition ' +
                      (active
                        ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/20'
                        : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10')
                    }
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <p>
                AI will allocate your shared budget across selected channels to maximize your <span className="font-medium text-white">{objective.toLowerCase()}</span> objective.
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-95"
            >
              <Rocket className="h-5 w-5" /> Launch draft
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
