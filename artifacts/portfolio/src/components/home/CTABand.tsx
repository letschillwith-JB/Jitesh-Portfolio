import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="relative py-28 border-t border-border overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)" }}
      />
      {/* Strong central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-0 pointer-events-none blur-[80px]"
        style={{
          width: 600,
          height: 400,
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(20,184,166,0.06) 50%, transparent 70%)",
        }}
      />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div
            className="font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-2"
            style={{ color: "hsl(var(--primary))" }}
          >
            <span className="inline-block w-6 h-px" style={{ background: "hsl(var(--primary))" }} />
            Currently Available
            <span className="inline-block w-6 h-px" style={{ background: "hsl(var(--primary))" }} />
          </div>

          <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6 leading-[1.1]">
            Have a project in mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
            I'm available for freelance and contract work. Let's talk about what you need built.
          </p>

          <Link
            href="/contact"
            data-testid="button-cta-start-conversation"
            className="group inline-flex items-center gap-2.5 font-medium text-primary-foreground px-8 py-4 rounded-xl transition-all duration-200 text-[15px]"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 28px rgba(99,102,241,0.35), 0 0 60px rgba(99,102,241,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 40px rgba(99,102,241,0.55), 0 0 80px rgba(99,102,241,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 28px rgba(99,102,241,0.35), 0 0 60px rgba(99,102,241,0.1)";
            }}
          >
            Start a Conversation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="mt-6 font-mono text-sm text-muted-foreground flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ background: "#14B8A6" }}
            />
            Usually respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
