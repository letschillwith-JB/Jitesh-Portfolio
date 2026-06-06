import { motion } from "framer-motion";
import { Link } from "wouter";

// ─── Space-Booker card ────────────────────────────────────────────────────
function SpaceBookerCard() {
  const spaces = [true, true, false, true, false, false, true, false, true, true, false, true];
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">Space-Booker</span>
        </div>
        <span className="text-[10px] font-mono text-white/25">Admin</span>
      </div>

      <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-2">Space availability</p>
      <div className="grid grid-cols-6 gap-1 mb-2">
        {spaces.map((available, i) => (
          <div
            key={i}
            className="h-2 rounded-sm"
            style={{ background: available ? "rgba(52,211,153,0.7)" : "rgba(99,102,241,0.4)" }}
          />
        ))}
      </div>
      <div className="flex gap-3 mb-3">
        <span className="text-[9px] font-mono" style={{ color: "#34D399" }}>● Available</span>
        <span className="text-[9px] font-mono" style={{ color: "#818CF8" }}>● Booked</span>
      </div>

      <div className="h-px mb-3" style={{ background: "rgba(255,255,255,0.06)" }} />

      <div className="flex items-end justify-between">
        <div>
          <p className="text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Bookings today</p>
          <p className="text-2xl font-bold font-mono text-white leading-none">12</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Revenue</p>
          <p className="text-lg font-bold font-mono text-white leading-none">₹14,280</p>
        </div>
      </div>

      <div
        className="mt-3 flex items-center gap-2 rounded-lg px-3 py-2"
        style={{
          border: "1px solid rgba(52,211,153,0.2)",
          background: "rgba(52,211,153,0.07)",
        }}
      >
        <div
          className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full"
          style={{ background: "#10B981" }}
        >
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <polyline points="1,3 3,5 7,1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-[10px] font-mono" style={{ color: "#34D399" }}>
          Payment confirmed · ₹800
        </span>
      </div>
    </div>
  );
}

// ─── TradeLink card ───────────────────────────────────────────────────────
function TradeLinkCard() {
  const points = "0,28 20,22 40,26 60,14 80,18 100,8 120,12 140,4 160,6";
  const fill   = "0,36 0,28 20,22 40,26 60,14 80,18 100,8 120,12 140,4 160,6 160,36";
  return (
    <div className="p-4">
      <div className="flex items-center gap-1.5 mb-2">
        <span style={{ color: "#14B8A6" }}>▲</span>
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>TradeLink</span>
      </div>
      <p className="text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Today's P&L</p>
      <p className="text-xl font-bold font-mono leading-none mb-2" style={{ color: "#14B8A6" }}>+₹4,280</p>
      <svg viewBox="0 0 160 36" className="w-full mb-3" style={{ height: 36 }} aria-hidden="true">
        <defs>
          <linearGradient id="tlGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon fill="url(#tlGrad)" points={fill} />
        <polyline fill="none" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={points} opacity="0.8" />
      </svg>
      <div className="h-px mb-2" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Win rate</span>
        <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>68%</span>
      </div>
    </div>
  );
}

// ─── AutoMinder card ──────────────────────────────────────────────────────
function AutoMinderCard() {
  return (
    <div className="p-4">
      <div className="mb-3">
        <span
          className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md"
          style={{
            color: "rgba(252,211,77,0.8)",
            border: "1px solid rgba(245,158,11,0.2)",
            background: "rgba(245,158,11,0.08)",
          }}
        >
          AutoMinder
        </span>
      </div>
      <div className="flex items-start gap-2.5">
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "rgba(245,158,11,0.2)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="0.5" fill="#FCD34D" />
          </svg>
        </div>
        <div>
          <p className="text-[12px] font-medium leading-snug" style={{ color: "rgba(255,255,255,0.8)" }}>
            Service due in 12 days
          </p>
          <p className="text-[9px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Honda Activa · MH-09-AB-1234
          </p>
        </div>
      </div>
      <div className="h-px my-3" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Active customers</span>
        <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>47</span>
      </div>
    </div>
  );
}

// ─── 3-card hero visual ───────────────────────────────────────────────────
function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: "100%", minHeight: 420 }}>
      {/* Ambient glow behind the stack */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-60px -40px",
          zIndex: 0,
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(99,102,241,0.22) 0%, rgba(20,184,166,0.06) 55%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative" style={{ width: 300, height: 380, zIndex: 1 }}>

        {/* TradeLink — back top-right */}
        <motion.div
          className="absolute rounded-2xl"
          style={{
            width: 200,
            right: -20,
            top: 0,
            zIndex: 1,
            rotate: 4,
            transformOrigin: "top right",
            background: "#0E1A19",
            border: "1px solid rgba(20,184,166,0.2)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          }}
          initial={{ y: 20, rotate: 4 }}
          animate={{
            y: [0, -10, 0],
            rotate: 4,
            transition: {
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            },
          }}
        >
          <TradeLinkCard />
        </motion.div>

        {/* AutoMinder — back bottom-right */}
        <motion.div
          className="absolute rounded-2xl"
          style={{
            width: 190,
            right: -28,
            bottom: 0,
            zIndex: 1,
            rotate: -2,
            transformOrigin: "bottom right",
            background: "#1A1610",
            border: "1px solid rgba(245,158,11,0.2)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          }}
          initial={{ y: 20, rotate: -2 }}
          animate={{
            y: [0, -6, 0],
            rotate: -2,
            transition: {
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            },
          }}
        >
          <AutoMinderCard />
        </motion.div>

        {/* Space-Booker — front center */}
        <motion.div
          className="absolute rounded-2xl"
          style={{
            width: 264,
            left: 0,
            top: 48,
            zIndex: 3,
            background: "#12121C",
            border: "1px solid rgba(99,102,241,0.25)",
            boxShadow: "0 0 0 1px rgba(99,102,241,0.1), 0 24px 64px rgba(0,0,0,0.55), 0 0 80px rgba(99,102,241,0.08)",
          }}
          initial={{ y: 30 }}
          animate={{
            y: [0, -8, 0],
            transition: {
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            },
          }}
        >
          <SpaceBookerCard />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────
export function Hero() {
  const words = ["Software", "That", "Moves", "Your", "Business"];

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.22) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.45,
          maskImage: "radial-gradient(ellipse 110% 100% at 50% 40%, black 15%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 110% 100% at 50% 40%, black 15%, transparent 75%)",
        }}
      />
      {/* Right-side accent glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 75% 45%, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">

          {/* Left column */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-mono text-xs mb-7 tracking-widest uppercase flex items-center gap-2.5"
              style={{ color: "#818CF8" }}
            >
              <span className="inline-block h-px w-6" style={{ background: "#818CF8" }} />
              Full Stack Developer · Bhopal, India
            </motion.div>

            {/* Headline */}
            <h1
              className="font-display font-bold leading-[1.07] mb-8"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              {/* Words 1–5: white, staggered in */}
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                  transition={{ duration: 0.55, delay: i * 0.065, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block mr-[0.22em] mb-1"
                  style={{ color: "rgba(255,255,255,0.95)" }}
                >
                  {word}
                </motion.span>
              ))}

              {/* "Forward" — shimmer sweep */}
              <motion.span
                initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 0.55, delay: words.length * 0.065, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.04em] mb-1 text-shimmer"
              >
                Forward
              </motion.span>

              {/* "." — glowing teal period */}
              <motion.span
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: words.length * 0.065 + 0.18, ease: "backOut" }}
                className="inline-block mb-1 dot-pulse"
              >
                .
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-sans"
            >
              I build booking platforms, business dashboards, analytics systems, and
              workflow automation tools that solve real operational problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 mb-14"
            >
              <Link
                href="/projects"
                className="font-medium text-white px-7 py-3.5 rounded-xl text-sm"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 24px rgba(99,102,241,0.38)",
                  transition: "box-shadow 0.2s, opacity 0.2s",
                }}
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="font-medium text-foreground px-7 py-3.5 rounded-xl text-sm"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.04)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground font-mono"
            >
              {[
                "4 Production Systems Built",
                "2 Live Mobile Apps",
                "₹20L+ Platform Value Delivered",
                "Full Stack · End to End",
              ].map((stat, i) => (
                <span key={i} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
                  )}
                  {stat}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — 3-card visual */}
          <div className="hidden lg:flex items-center justify-center py-10">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
