import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SocialProofStrip } from "@/components/home/SocialProofStrip";
import { WhatIBuild } from "@/components/home/WhatIBuild";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Process } from "@/components/home/Process";
import { Skills } from "@/components/home/Skills";
import { CTABand } from "@/components/home/CTABand";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <SocialProofStrip />
        <WhatIBuild />
        <FeaturedProjects />
        <Process />
        <Skills />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}