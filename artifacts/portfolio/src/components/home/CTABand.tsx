import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="relative py-24 border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-card z-0" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] rounded-full z-0 opacity-[0.05] pointer-events-none blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I'm currently available for freelance and contract work. Let's talk about what you need built.
          </p>
          
          <Link
            href="/contact"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-medium transition-all inline-flex items-center gap-2"
          >
            Start a Conversation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          
          <p className="mt-6 font-mono text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
            Usually respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}