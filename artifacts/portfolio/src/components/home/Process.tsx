import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business, your users, and the exact problem we're solving. Before any code, alignment."
  },
  {
    number: "02",
    title: "Architecture",
    description: "Designing the data model, system flows, and technical stack. Decisions made here save weeks later."
  },
  {
    number: "03",
    title: "Development",
    description: "Iterative builds with regular check-ins. Working software at each stage — not a big-bang reveal."
  },
  {
    number: "04",
    title: "Deployment",
    description: "Live on Vercel, Railway, or your preferred host. Documented, tested, and handed over properly."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-card border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16 md:mb-24">
          <SectionLabel>PROCESS</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            How a Project Goes From Idea to Live
          </h2>
        </div>

        <div className="relative">
          {/* Dashed connector line - Desktop */}
          <div className="hidden md:block absolute top-6 left-[2%] right-[2%] h-[1px] border-t border-dashed border-border/60 z-0" />
          
          {/* Dashed connector line - Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-[1px] border-l border-dashed border-border/60 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="relative z-10 flex flex-row md:flex-col gap-6 md:gap-0"
              >
                <div className="shrink-0 md:mb-8">
                  <div className="w-12 h-12 rounded-full bg-background border border-primary text-primary flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    {step.number}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}