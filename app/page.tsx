import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import PropertyJournal from '@/components/sections/PropertyJournal';
import ClientStories from '@/components/sections/ClientStories';
import Process from '@/components/sections/Process';
import CoverageMapSection from '@/components/sections/CoverageMapSection';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Britteney Powers — Real Estate Professional | Swell Realty',
  description: 'NC Broker & VA Salesperson. Britteney Powers helps buyers and sellers in North Carolina and Virginia navigate every step of the real estate journey.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <PropertyJournal />
        <ClientStories />
        <Process />
        <CoverageMapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
