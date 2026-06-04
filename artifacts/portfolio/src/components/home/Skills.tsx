import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo Router", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API Design", "Drizzle ORM", "JWT Auth", "Nodemailer"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "NeonDB", "SQL Schema Design", "Credit Ledger Systems", "Audit Trails"]
  },
  {
    title: "Infrastructure",
    skills: ["Vercel", "Railway", "GitHub", "PayU Integration", "Environment Config", "CI/CD"]
  }
];

export function Skills() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16">
          <SectionLabel>STACK</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            Tools I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1, ease: "easeOut" }}
            >
              <h3 className="font-mono text-sm text-foreground mb-6 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-col gap-3 items-start">
                {group.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-white/5 border border-white/10 text-muted-foreground text-sm px-4 py-2 rounded-full font-sans transition-colors hover:text-foreground hover:border-primary/30"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}