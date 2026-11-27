
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesMarquee from "@/components/CapabilitiesMarquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import ProjectCTA from "@/components/ProjectCTA";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* 01 - HERO */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
  <Hero />
</Suspense>
        
        {/* 02 - CAPABILITIES MARQUEE */}
         <CapabilitiesMarquee />

        {/* 02 - SELECTED WORK */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Work />
        </Suspense>

        {/* 03 - ABOUT */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
  <About />
</Suspense>

        {/* 04 - SERVICES */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
  <Services />
</Suspense>

        {/* 05 - BENEFITS */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
  <Trust />
</Suspense>

        {/* 06 - PROCESS */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
  <Process />
</Suspense>

        <ProjectCTA />

        {/* 07 - TESTIMONIALS / EXPERIENCE */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
  <Testimonials />
</Suspense>

        {/* 08 - FINAL CTA */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
