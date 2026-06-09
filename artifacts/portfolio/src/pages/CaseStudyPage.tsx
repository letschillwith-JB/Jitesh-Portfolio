import { useParams, Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABand } from "@/components/home/CTABand";
import { projects } from "@/data/projects";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { FeatureRow } from "@/components/case-study/FeatureRow";
import { StackTable } from "@/components/case-study/StackTable";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import NotFound from "./not-found";

function GalleryCarousel({ images, projectName }: { images: string[]; projectName: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, images.length - 1));
    setActiveIdx(clamped);
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ left: el.offsetWidth * clamped, behavior: "smooth" });
    }
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveIdx(idx);
  };

  return (
    <div className="relative group/gallery">
      {/* Scroll strip */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex overflow-x-auto rounded-2xl"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-full"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={src}
              alt={`${projectName} screenshot ${i + 1}`}
              className="w-full object-cover object-top rounded-2xl"
              style={{ maxHeight: 600, minHeight: 280, display: "block" }}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows — only show when >1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => scrollTo(activeIdx - 1)}
            disabled={activeIdx === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-0 opacity-0 group-hover/gallery:opacity-100"
            style={{
              background: "rgba(10,10,15,0.8)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              color: "#fff",
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollTo(activeIdx + 1)}
            disabled={activeIdx === images.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-0 opacity-0 group-hover/gallery:opacity-100"
            style={{
              background: "rgba(10,10,15,0.8)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              color: "#fff",
            }}
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === activeIdx ? 20 : 6,
                height: 6,
                background: i === activeIdx ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      )}

      {/* Counter badge */}
      {images.length > 1 && (
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full font-mono text-xs"
          style={{
            background: "rgba(10,10,15,0.75)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          {activeIdx + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return <NotFound />;
  }

  const nextProjectIndex = (projects.findIndex(p => p.slug === project.slug) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] transition-all duration-75"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #6366f1, #14b8a6)",
          boxShadow: "0 0 8px rgba(99,102,241,0.6)",
        }}
      />
      <Nav />
      <main>
        <CaseStudyHero project={project} />

        {/* Content Sections */}
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-24 space-y-32">
          
          {/* The Problem & Solution */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <SectionLabel>THE PROBLEM</SectionLabel>
              <h2 className="font-display font-bold text-3xl mb-6 text-foreground">Why This Needed to Exist</h2>
              <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
                <p>{project.problem}</p>
              </div>
            </div>
            <div>
              <SectionLabel>THE SOLUTION</SectionLabel>
              <h2 className="font-display font-bold text-3xl mb-6 text-foreground">What Was Built</h2>
              <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
                <p>{project.solution}</p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <SectionLabel>FEATURES</SectionLabel>
            <h2 className="font-display font-bold text-4xl mb-12 text-foreground">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <FeatureRow key={i} feature={feature} index={i} />
              ))}
            </div>
          </section>

          {/* System Architecture */}
          <section>
            <SectionLabel>ARCHITECTURE</SectionLabel>
            <h2 className="font-display font-bold text-4xl mb-6 text-foreground">System Design</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              A high-level view of how the components communicate and process data.
            </p>
            <ArchitectureDiagram />
          </section>

          {/* Technology Stack */}
          <section>
            <SectionLabel>TECHNOLOGY</SectionLabel>
            <h2 className="font-display font-bold text-4xl mb-12 text-foreground">The Stack</h2>
            <StackTable stack={project.stack} />
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <SectionLabel>GALLERY</SectionLabel>
              <h2 className="font-display font-bold text-4xl mb-12 text-foreground">Interface Details</h2>
              <GalleryCarousel images={project.gallery} projectName={project.name} />
            </section>
          )}

          {/* Demo Video */}
          <section>
            <SectionLabel>DEMO</SectionLabel>
            <h2 className="font-display font-bold text-4xl mb-12 text-foreground">See it in Action</h2>
            <div className="aspect-video bg-card border border-border rounded-xl flex flex-col items-center justify-center gap-6 group hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground pl-1">
                  <Play size={32} />
                </div>
              </div>
              <p className="font-mono text-sm text-muted-foreground">Demo video coming soon</p>
            </div>
          </section>

          {/* Results & Lessons */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-border pt-24">
            <div>
              <SectionLabel>OUTCOMES</SectionLabel>
              <h2 className="font-display font-bold text-3xl mb-8 text-foreground">Results & Impact</h2>
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>RETROSPECTIVE</SectionLabel>
              <h2 className="font-display font-bold text-3xl mb-6 text-foreground">Lessons Learned</h2>
              <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed">
                <p>{project.lessonsLearned}</p>
              </div>
            </div>
          </section>

          {/* Next Project */}
          <section className="border-t border-border pt-16 flex justify-between items-center">
            <div className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
              Up Next
            </div>
            <Link 
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-4 text-xl md:text-3xl font-display font-bold text-foreground hover:text-primary transition-colors text-right"
            >
              {nextProject.name}
              <div className="w-12 h-12 rounded-full border border-border group-hover:border-primary flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </section>
        </div>

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}