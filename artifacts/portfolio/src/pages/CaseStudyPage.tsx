import { useParams, Link } from "wouter";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABand } from "@/components/home/CTABand";
import { projects } from "@/data/projects";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { FeatureRow } from "@/components/case-study/FeatureRow";
import { StackTable } from "@/components/case-study/StackTable";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, Play } from "lucide-react";
import NotFound from "./not-found";

export function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return <NotFound />;
  }

  const nextProjectIndex = (projects.findIndex(p => p.slug === project.slug) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="min-h-screen bg-background">
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
              <div className={`grid gap-6 ${project.gallery.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                {project.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-border bg-muted group cursor-zoom-in"
                    style={{ aspectRatio: project.gallery!.length === 1 ? "16/9" : undefined }}
                  >
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ display: "block", minHeight: 220 }}
                    />
                  </div>
                ))}
              </div>
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