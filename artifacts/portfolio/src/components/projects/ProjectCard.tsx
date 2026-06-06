import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-card border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_hsl(var(--primary))]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[450px]">
        {/* Content */}
        <div className="p-8 md:p-12 flex flex-col h-full relative">
          <div className="absolute top-8 right-8 font-display text-8xl font-bold text-foreground/5 select-none pointer-events-none">
            {project.number}
          </div>
          
          <div className="font-mono text-xs text-primary mb-4 tracking-wide uppercase">
            {project.category}
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 pr-16">
            {project.name}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {project.chips.map((chip, i) => (
              <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground border border-border">
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <Link 
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Case Study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <Link href={`/projects/${project.slug}`} className="block h-64 lg:h-full w-full bg-muted border-l border-border relative overflow-hidden group-hover:opacity-90 transition-opacity">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-sm text-muted-foreground border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-md">
                  [ Screenshot · Replace with real image ]
                </span>
              </div>
            </>
          )}
        </Link>
      </div>
    </motion.div>
  );
}