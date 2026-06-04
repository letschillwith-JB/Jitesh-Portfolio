import { motion } from "framer-motion";
import { Link } from "wouter";

export function Hero() {
  const headlineWords = "Software That Moves Your Business Forward.".split(" ");

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background z-0" />
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366F1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-mono text-sm text-primary mb-6 tracking-wide"
            >
              Full Stack Developer · Bhopal, India
            </motion.div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-8">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                  className="inline-block mr-3 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-sans"
            >
              I build booking platforms, business dashboards, analytics systems, and workflow automation tools that solve real operational problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link
                href="/projects"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-medium transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-border hover:border-primary/50 bg-white/5 hover:bg-white/10 text-foreground px-8 py-4 rounded-md font-medium transition-all"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-mono"
            >
              <span>4 Production Systems Built</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>2 Live Mobile Apps</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>₹20L+ Platform Value Delivered</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Full Stack · End to End</span>
            </motion.div>
          </div>

          {/* Right Column - Animated Dashboard Widget */}
          <div className="lg:col-span-5 hidden md:block relative h-[500px] perspective-1000">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Main Card */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 w-80 p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-mono text-sm text-muted-foreground">Bookings Today</h3>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-sm" />
                  </div>
                </div>
                
                <div className="flex items-end gap-4 mb-6">
                  <span className="font-display text-5xl font-bold text-foreground">12</span>
                  <span className="text-secondary font-mono text-sm mb-1">+3 from yesterday</span>
                </div>

                {/* Sparkline SVG */}
                <div className="h-16 w-full mt-4">
                  <svg viewBox="0 0 200 40" className="w-full h-full overflow-visible">
                    <path
                      d="M0,30 C20,30 30,10 50,15 C70,20 80,5 100,10 C120,15 130,25 150,20 C170,15 180,0 200,5"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0,30 C20,30 30,10 50,15 C70,20 80,5 100,10 C120,15 130,25 150,20 C170,15 180,0 200,5 L200,40 L0,40 Z"
                      fill="url(#sparkline-gradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>

              {/* Secondary Card */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-10 w-64 p-5 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl -right-4 bottom-20"
              >
                <h3 className="font-mono text-xs text-muted-foreground mb-2">Revenue</h3>
                <div className="font-display text-2xl font-bold text-foreground">₹14,280</div>
                <div className="mt-3 h-1 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[70%]" />
                </div>
              </motion.div>

              {/* Floating Chip */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute z-30 px-4 py-2 rounded-full backdrop-blur-md bg-[#14B8A6]/10 border border-[#14B8A6]/20 shadow-lg -left-8 top-32 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-mono text-xs text-secondary">Payment Confirmed ✓</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}