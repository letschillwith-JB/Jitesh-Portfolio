import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Calendar, BarChart2, Globe, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Calendar,
    title: "Business Booking Platforms",
    description:
      "Reservation systems with real-time inventory, conflict checking, payment processing, and admin dashboards. Built for coworking spaces, service providers, and hospitality businesses.",
    tags: ["PayU Integration", "Multi-role Access", "SMS/Email Alerts"],
    accent: "hsl(var(--primary))",
  },
  {
    icon: BarChart2,
    title: "Analytics & Trading Dashboards",
    description:
      "Data-rich interfaces that turn raw numbers into actionable insight. Trade journals, P&L breakdowns, performance tracking, and portfolio visualizations.",
    tags: ["Chart.js / Recharts", "Real-time Data", "CSV Export"],
    accent: "#14B8A6",
  },
  {
    icon: Globe,
    title: "Business Websites & Landing Pages",
    description:
      "High-conversion business websites with modern design, clear messaging, lead capture forms, and performance optimization for Indian audiences.",
    tags: ["Lead Generation", "Mobile-first", "SEO Ready"],
    accent: "hsl(var(--primary))",
  },
  {
    icon: Zap,
    title: "Automation & Workflow Tools",
    description:
      "Custom tools that replace manual work. Service reminder systems, notification engines, CRM-light tools, and recurring workflow automators.",
    tags: ["Node.js Cron Jobs", "WhatsApp API", "Email Automation"],
    accent: "#14B8A6",
  },
];

export function WhatIBuild() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>WHAT I BUILD</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
              From Idea to Production System
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs leading-relaxed font-sans md:text-right shrink-0">
            Every project I take on has a real business problem at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative bg-card border border-border rounded-[20px] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                style={{
                  boxShadow: "none",
                  transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px hsl(var(--primary)), 0 8px 32px rgba(99,102,241,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    background: `${item.accent}14`,
                    border: `1px solid ${item.accent}22`,
                    color: item.accent,
                  }}
                >
                  <Icon strokeWidth={1.5} size={20} />
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs px-3 py-1.5 rounded-full transition-colors duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "hsl(var(--muted-foreground))",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${item.accent}08 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
