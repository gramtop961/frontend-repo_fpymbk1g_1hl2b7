import React from 'react';
import { Bot, Image, Sliders, TrendingUp, Layers } from 'lucide-react';

const features = [
  {
    title: 'AI Strategy',
    desc: 'Define goals and audience, then let the AI architect your cross-platform plan.',
    icon: Bot,
  },
  {
    title: 'Auto Creatives',
    desc: 'Generate variations of copy and visuals tailored to each placement.',
    icon: Image,
  },
  {
    title: 'Smart Settings',
    desc: 'Automatically configures bids, budgets, and targeting per channel.',
    icon: Sliders,
  },
  {
    title: 'Unified Spend',
    desc: 'One shared budget optimized in real-time for the best outcomes.',
    icon: TrendingUp,
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
        <Layers className="h-4 w-4" />
        <span>How it works</span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="group rounded-2xl border border-slate-200/10 bg-white/5 p-6 text-white backdrop-blur transition hover:bg-white/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
