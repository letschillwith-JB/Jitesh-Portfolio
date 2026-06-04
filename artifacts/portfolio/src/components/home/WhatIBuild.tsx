import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Calendar, BarChart2, Globe, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Calendar,
    title: "Business Booking Platforms",
    description: "Reservation systems with real-time inventory, conflict checking, payment processing, and admin dashboards. Built for coworking spaces, service providers, and hospitality businesses.",
    tags: ["PayU Integration", "Multi-role Access", "SMS/Email Alerts"]
  },
  {
    icon: BarChart2,
    title: "Analytics & Trading Dashboards",
    description: "Data-rich interfaces that turn raw numbers into actionable insight. Trade journals, P&L breakdowns, performance tracking, and portfolio visualizations.",
    tags: ["Chart.js / Recharts", "Real-time Data", "CSV Export"]
  },
  {
    icon: Globe,
    title: "Business Websites & Landing Pages",
    description: "High-conversion business websites with modern design, clear messaging, lead capture forms, and performance optimization for Indian audiences.",
    tags: ["Lead Generation", "Mobile-first", "SEO Ready"]
  },
  {
    icon: Zap,
    title: "Automation & Workflow Tools",
    description: "Custom tools that replace manual work. Service reminder systems, notification engines, CRM-light tools, and recurring workflow automators.",
    tags: ["Node.js Cron Jobs", "WhatsApp API", "Email Automation"]
  }
];

export function WhatIBuild() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16">
          <SectionLabel>WHAT I BUILD</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            From Idea to Production System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-card border border-border rounded-[20px] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_hsl(var(--primary))] hover:bg-card/80"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Icon strokeWidth={1.5} size={24} />
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground border border-border group-hover:border-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}