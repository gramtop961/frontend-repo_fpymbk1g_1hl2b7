import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] md:min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-xs text-white/80">AI-assisted omnichannel advertising</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Launch one campaign. Let AI run it everywhere.
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            AdsHelper plans the strategy, generates on-brand creatives, configures each platform, and continuously optimizes your shared budget across Facebook, Instagram, TikTok, Google, and WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#planner"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-slate-900 transition hover:shadow-lg hover:shadow-white/10"
            >
              <Rocket className="h-5 w-5" />
              <span className="font-medium">Start a campaign</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white transition hover:bg-white/10"
            >
              Learn more
            </a>
          </div>

          {/* Platform badges */}
          <div className="mt-10 flex flex-wrap gap-2 text-xs text-white/70">
            {['Facebook','Instagram','TikTok','Google','WhatsApp'].map((p) => (
              <span key={p} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
