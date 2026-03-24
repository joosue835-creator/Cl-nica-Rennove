/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Differentials />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
