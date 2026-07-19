import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { ChonkyMarquee } from '@/components/landing/ChonkyMarquee';
import { Manifesto } from '@/components/landing/Manifesto';
import { Cases } from '@/components/landing/Cases';
import { Services } from '@/components/landing/Services';
import { FinalCta } from '@/components/landing/FinalCta';
import { Footer } from '@/components/landing/Footer';

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect('/interview');

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0] bg-dot-pattern">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ChonkyMarquee />
        <Manifesto />
        <Cases />
        <Services />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

