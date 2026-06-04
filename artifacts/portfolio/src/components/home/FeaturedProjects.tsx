import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { ArrowRight, Smartphone, BarChart2, Wrench } from "lucide-react";

function SpaceBookerPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(20,184,166,0.08) 50%, rgba(99,102,241,0.06) 100%)",
        }}
      />
      {/* Mini app UI sketch */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        {/* Phone outline */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            width: 120,
            height: 220,
            border: "1.5px solid rgba(99,102,241,0.3)",
            background: "rgba(10,10,15,0.7)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Status bar */}
          <div
            className="flex items-center justify-between px-3 py-1.5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="w-4 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="w-6 h-1 rounded-full" style={{ background: "rgba(99,102,241,0.6)" }} />
            <div className="flex gap-1">
              <div className="w-3 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
          </div>
          {/* Content */}
          <div className="p-3 space-y-2">
            <div className="w-full h-5 rounded-md" style={{ background: "rgba(99,102,241,0.15)" }} />
            <div className="grid grid-cols-2 gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-md"
                  style={{
                    height: 36,
                    background: i === 1 ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
              ))}
            </div>
            <div className="w-full h-4 rounded" style={{ background: "rgba(255,255,255,0.04)" }} />
            <div className="w-3/4 h-4 rounded" style={{ background: "rgba(255,255,255,0.04)" }} />
            <div
              className="w-full h-7 rounded-lg mt-1"
              style={{ background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }}
            />
          </div>
        </div>

        {/* Admin panel hint */}
        <div
          className="absolute right-6 top-6 rounded-xl p-3 text-left"
          style={{
            width: 140,
            background: "rgba(10,10,15,0.75)",
            border: "1px solid rgba(99,102,241,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="font-mono mb-2" style={{ fontSize: "7px", color: "rgba(99,102,241,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Admin · Live
          </div>
          <div className="space-y-1.5">
            {["Bookings Today  12", "Revenue  ₹14.2K", "Spaces  3/5"].map((row, i) => (
              <div key={i} className="flex justify-between">
                <span className="font-mono" style={{ fontSize: "7px", color: "rgba(255,255,255,0.4)" }}>
                  {row.split("  ")[0]}
                </span>
                <span
                  className="font-mono font-bold"
                  style={{ fontSize: "7px", color: i === 1 ? "#14B8A6" : "rgba(99,102,241,0.9)" }}
                >
                  {row.split("  ")[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Replace label */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md px-3 py-1.5 whitespace-nowrap"
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(6px)",
          }}
        >
          <span className="font-mono" style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)" }}>
            [ Screenshot · Replace with real image ]
          </span>
        </div>
      </div>
    </div>
  );
}

const mediumCardIcons: Record<string, React.ElementType> = {
  tradelink: BarChart2,
  autominder: Wrench,
};

export function FeaturedProjects() {
  const spaceBooker = projects.find((p) => p.slug === "space-booker")!;
  const tradeLink = projects.find((p) => p.slug === "tradelink")!;
  const autoMinder = projects.find((p) => p.slug === "autominder")!;

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>WORK</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
              Systems I've Built
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs leading-relaxed font-sans md:text-right shrink-0">
            Each project started as a business problem. Here's how I solved them.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Large Feature Card — Space-Booker */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative bg-card border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: "none", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px hsl(var(--primary)), 0 12px 40px rgba(99,102,241,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[480px]">
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col relative">
                <div
                  className="absolute top-8 right-8 font-display font-bold select-none pointer-events-none"
                  style={{ fontSize: "80px", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}
                >
                  {spaceBooker.number}
                </div>

                <div className="font-mono text-[10px] text-primary mb-4 tracking-widest uppercase">
                  {spaceBooker.category}
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                  {spaceBooker.name}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-8 max-w-lg">
                  {spaceBooker.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {spaceBooker.chips.map((chip, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.18)",
                        color: "hsl(var(--primary))",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    href={`/projects/${spaceBooker.slug}`}
                    data-testid={`link-case-study-${spaceBooker.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all duration-200 text-[15px]"
                  >
                    View Case Study <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Visual placeholder */}
              <Link
                href={`/projects/${spaceBooker.slug}`}
                className="block h-64 lg:h-auto relative overflow-hidden"
                style={{ borderLeft: "1px solid rgba(255,255,255,0.05)" }}
              >
                <SpaceBookerPlaceholder />
              </Link>
            </div>
          </motion.div>

          {/* Medium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[tradeLink, autoMinder].map((project, index) => {
              const Icon = mediumCardIcons[project.slug] ?? Smartphone;
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative bg-card border border-border rounded-[20px] p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{ boxShadow: "none" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 0 1px hsl(var(--primary)), 0 12px 40px rgba(99,102,241,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Decorative number */}
                  <div
                    className="absolute bottom-0 right-0 font-display font-bold select-none pointer-events-none leading-none"
                    style={{ fontSize: "96px", color: "rgba(255,255,255,0.025)", lineHeight: 0.9 }}
                  >
                    {project.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "hsl(var(--primary))",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  <div className="font-mono text-[10px] text-primary mb-3 tracking-widest uppercase">
                    {project.category}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "hsl(var(--muted-foreground))",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      data-testid={`link-case-study-${project.slug}`}
                      className="inline-flex items-center gap-2 font-medium text-foreground group-hover:text-primary group-hover:gap-3 transition-all duration-200 text-[15px]"
                    >
                      View Case Study <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 text-center md:text-left">
            <Link
              href="/projects"
              data-testid="link-see-all-projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200 group"
            >
              See all projects{" "}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
