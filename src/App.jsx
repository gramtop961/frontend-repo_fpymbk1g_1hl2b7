import React from 'react';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import CampaignPlanner from './components/CampaignPlanner';
import PerformanceOverview from './components/PerformanceOverview';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <FeatureCards />
      <CampaignPlanner />
      <PerformanceOverview />

      <footer className="mx-auto max-w-7xl px-6 pb-12 text-center text-sm text-white/50">
        Built with care for modern marketers — AdsHelper
      </footer>
    </div>
  );
}

export default App;
