/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Gallery } from './components/Gallery';
import { FloorPlan } from './components/FloorPlan';
import { Amenities } from './components/Amenities';
import { FinancingSimulator } from './components/FinancingSimulator';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Highlights />
        <Gallery />
        <FloorPlan />
        <Amenities />
        <FinancingSimulator />
        <LocationSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBottomBar />
    </div>
  );
}

