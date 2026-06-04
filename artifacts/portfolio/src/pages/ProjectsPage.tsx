import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CTABand } from "@/components/home/CTABand";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-3xl mb-16"
            >
              <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
                All Projects
              </h1>
              <p className="text-xl text-muted-foreground font-sans">
                Four production systems, each built to solve a specific business problem.
              </p>
            </motion.div>

            <div className="flex flex-col gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}