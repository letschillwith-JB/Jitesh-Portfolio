import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366F1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="font-mono text-sm text-primary mb-6 tracking-wide uppercase">
            {project.category}
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[80px] text-foreground mb-6 leading-tight">
            {project.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-3xl mx-auto mb-10">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 font-mono text-xs text-muted-foreground">
              <span className="text-foreground">Type:</span> {project.category.split("·")[0].trim()}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 font-mono text-xs text-muted-foreground">
              <span className="text-foreground">Stack:</span> {project.chips.slice(0,2).join(" · ")}
            </div>
            <div className="bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-full px-4 py-2 font-mono text-xs text-secondary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Status: {project.status}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-8 max-w-6xl"
      >
        <div className="w-full aspect-video md:aspect-[21/9] rounded-[20px] bg-muted border border-border relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-sm text-muted-foreground border border-border/50 bg-background/50 backdrop-blur-sm px-6 py-3 rounded-md">
              [ Screenshot · Replace with real image ]
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}