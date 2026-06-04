import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const spaceBooker = projects.find(p => p.slug === "space-booker")!;
  const tradeLink = projects.find(p => p.slug === "tradelink")!;
  const autoMinder = projects.find(p => p.slug === "autominder")!;

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16">
          <SectionLabel>WORK</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
            Systems I've Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-sans">
            Each project started as a business problem. Here's how I solved them.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Large Feature Card - Space Booker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative bg-card border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_hsl(var(--primary))]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[500px]">
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col h-full relative">
                <div className="absolute top-8 right-8 font-display text-8xl font-bold text-foreground/5 select-none pointer-events-none">
                  {spaceBooker.number}
                </div>
                
                <div className="font-mono text-xs text-primary mb-4 tracking-wide uppercase">
                  {spaceBooker.category}
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  {spaceBooker.name}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
                  {spaceBooker.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {spaceBooker.chips.map((chip, i) => (
                    <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground border border-border">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    href={`/projects/${spaceBooker.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Image Placeholder */}
              <Link href={`/projects/${spaceBooker.slug}`} className="block h-64 lg:h-full w-full bg-muted border-l border-border relative overflow-hidden group-hover:opacity-90 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-sm text-muted-foreground border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-md">
                    [ Screenshot · Replace with real image ]
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Medium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[tradeLink, autoMinder].map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-card border border-border rounded-[20px] p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_hsl(var(--primary))]"
              >
                <div className="absolute top-8 right-8 font-display text-6xl font-bold text-foreground/5 select-none pointer-events-none">
                  {project.number}
                </div>

                <div className="font-mono text-xs text-primary mb-4 tracking-wide uppercase">
                  {project.category}
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.chips.map((chip, i) => (
                    <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground border border-border">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-foreground group-hover:text-primary transition-colors"
                  >
                    View Case Study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:text-left">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              See all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}