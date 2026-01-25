
"use client";

import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProfessionalJourney from "../components/ProfessionalJourney";
import Architecture from "../components/Architecture";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import SectionSeparator from "../components/SectionSeparator";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <SectionSeparator variant="gradient" />
        <ProfessionalJourney />
        
        <SectionSeparator variant="dots" />
        <Architecture />
        
        <SectionSeparator variant="gradient" />
        <Skills />
        
        <SectionSeparator variant="dots" />
        <ContactForm />
      </div>
    </main>
  );
}
