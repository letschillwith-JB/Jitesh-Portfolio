import { motion } from "framer-motion";
import { Link } from "wouter";

function AdminDashboardMockup() {
  const bookings = [
    { name: "Rahul S.", space: "Meeting Room A", time: "10:00–11:00", amount: "₹800", isNew: true },
    { name: "Priya M.", space: "Hot Desk 3", time: "09:00–18:00", amount: "₹350", isNew: false },
    { name: "Aditya K.", space: "10-Seater Conf.", time: "14:00–16:00", amount: "₹1,200", isNew: false },
  ];

  return (
    <motion.div
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
      className="relative w-full"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-80px -60px",
          zIndex: -1,
          background:
            "radial-gradient(ellipse 70% 70% at 55% 50%, rgba(99,102,241,0.28) 0%, rgba(20,184,166,0.08) 55%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* Browser Frame */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.16)",
          background: "#12121E",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.1) inset",
        }}
      >
        {/* Browser Chrome */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{
            background: "#0A0A12",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex gap-1.5">
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.85 }} />
            ))}
          </div>
          <div className="flex-1 mx-2">
            <div
              className="rounded-md px-3 py-1.5 flex items-center gap-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "rgba(20,184,166,0.8)" }} />
              <span
                className="font-mono truncate"
                style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}
              >
                space-booker.app/admin
              </span>
            </div>
          </div>
          <div
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
            style={{
              background: "rgba(20,184,166,0.15)",
              border: "1px solid rgba(20,184,166,0.3)",
            }}
          >
            <span className="relative flex" style={{ width: 6, height: 6 }}>
              <span
                className="animate-ping absolute inline-flex rounded-full opacity-75"
                style={{ inset: 0, background: "#14B8A6" }}
              />
              <span
                className="relative inline-flex rounded-full"
                style={{ width: 6, height: 6, background: "#14B8A6" }}
              />
            </span>
            <span className="font-mono" style={{ fontSize: "9px", color: "#14B8A6", letterSpacing: "0.07em" }}>
              LIVE
            </span>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-4 space-y-3">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div>
              <div
                className="font-mono uppercase tracking-widest mb-0.5"
                style={{ fontSize: "8px", color: "#818CF8" }}
              >
                Space-Booker
              </div>
              <div
                className="font-display font-bold"
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.92)" }}
              >
                Admin Dashboard
              </div>
            </div>
            <div className="font-mono" style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>
              Today, Jun 04
            </div>
          </div>

          {/* Stats Row — visible immediately, no animation delay */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bookings", value: "12", sub: "+3 today", vc: "#818CF8" },
              { label: "Revenue", value: "₹14.2K", sub: "today", vc: "#14B8A6" },
              { label: "Spaces", value: "3 / 5", sub: "occupied", vc: "#818CF8" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl p-3"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.11)",
                }}
              >
                <div className="font-mono mb-1.5" style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </div>
                <div
                  className="font-display font-bold"
                  style={{ fontSize: "17px", color: stat.vc, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div className="font-mono mt-1" style={{ fontSize: "8px", color: "rgba(255,255,255,0.35)" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Sparkline Card */}
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono" style={{ fontSize: "8px", color: "rgba(255,255,255,0.45)" }}>
                Bookings this week
              </span>
              <span className="font-mono font-semibold" style={{ fontSize: "8px", color: "#14B8A6" }}>
                ↑ 24%
              </span>
            </div>
            <svg viewBox="0 0 200 34" className="w-full" style={{ height: 34 }}>
              <defs>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,30 C14,30 20,22 36,17 C52,12 60,8 76,10 C92,12 102,24 118,18 C134,12 142,4 158,6 C170,8 185,2 200,4"
                fill="none"
                stroke="#818CF8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M0,30 C14,30 20,22 36,17 C52,12 60,8 76,10 C92,12 102,24 118,18 C134,12 142,4 158,6 C170,8 185,2 200,4 L200,34 L0,34 Z"
                fill="url(#sparkGrad)"
              />
              {([[36,17],[76,10],[118,18],[158,6],[200,4]] as [number,number][]).map(([cx,cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" fill="#818CF8" />
              ))}
            </svg>
          </div>

          {/* Live Booking Feed */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.09)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div
              className="px-3 py-2 flex items-center justify-between"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                className="font-mono uppercase tracking-wider"
                style={{ fontSize: "8px", color: "rgba(255,255,255,0.45)" }}
              >
                Recent Bookings
              </span>
              <span className="font-mono" style={{ fontSize: "7px", color: "rgba(99,102,241,0.75)" }}>
                auto-refresh 30s
              </span>
            </div>

            {bookings.map((b, i) => (
              <div
                key={i}
                className="px-3 py-2.5 flex items-center justify-between gap-2"
                style={{
                  borderBottom: i < bookings.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  background: i === 0 ? "rgba(99,102,241,0.07)" : "transparent",
                }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className="rounded-full flex items-center justify-center font-mono font-bold shrink-0"
                    style={{
                      width: 22,
                      height: 22,
                      background: "rgba(99,102,241,0.22)",
                      color: "#818CF8",
                      fontSize: "9px",
                    }}
                  >
                    {b.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="font-sans font-medium truncate"
                      style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)" }}
                    >
                      {b.name}{" "}
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>· {b.space}</span>
                    </div>
                    <div className="font-mono" style={{ fontSize: "8px", color: "rgba(255,255,255,0.32)" }}>
                      {b.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {b.isNew && (
                    <span
                      className="font-mono rounded-full px-1.5 py-0.5"
                      style={{
                        fontSize: "7px",
                        background: "rgba(20,184,166,0.18)",
                        color: "#14B8A6",
                        border: "1px solid rgba(20,184,166,0.32)",
                      }}
                    >
                      NEW
                    </span>
                  )}
                  <span
                    className="font-mono font-semibold"
                    style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)" }}
                  >
                    {b.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chip — bottom left */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute flex items-center gap-2 rounded-full"
        style={{
          bottom: -14,
          left: -12,
          padding: "6px 14px",
          backdropFilter: "blur(12px)",
          background: "rgba(20,184,166,0.14)",
          border: "1px solid rgba(20,184,166,0.32)",
          boxShadow: "0 4px 20px rgba(20,184,166,0.18)",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#14B8A6" }} />
        <span className="font-mono" style={{ fontSize: "10px", color: "#14B8A6" }}>
          Payment Confirmed
        </span>
      </motion.div>

      {/* Floating chip — top right */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute flex items-center gap-2 rounded-full"
        style={{
          top: -14,
          right: -12,
          padding: "6px 14px",
          backdropFilter: "blur(12px)",
          background: "rgba(99,102,241,0.14)",
          border: "1px solid rgba(99,102,241,0.35)",
          boxShadow: "0 4px 20px rgba(99,102,241,0.18)",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#818CF8" }} />
        <span className="font-mono" style={{ fontSize: "10px", color: "#818CF8" }}>
          Credits Applied · ₹500
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const words = ["Software", "That", "Moves", "Your", "Business", "Forward."];

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
          {/* Left Column */}
          <div className="flex flex-col items-start">
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

            <h1
              className="font-display font-bold leading-[1.07] mb-8"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              {words.map((word, i) => {
                const isAccent = word === "Forward.";
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.065,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline-block mr-[0.22em] mb-1"
                    style={
                      isAccent
                        ? {
                            backgroundImage: "linear-gradient(135deg, #6366F1 0%, #14B8A6 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : { color: "rgba(255,255,255,0.95)" }
                    }
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-sans"
            >
              I build booking platforms, business dashboards, analytics systems, and
              workflow automation tools that solve real operational problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 mb-14"
            >
              <Link
                href="/projects"
                data-testid="button-view-work"
                className="font-medium text-white px-7 py-3.5 rounded-xl text-sm"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 24px rgba(99,102,241,0.38)",
                  transition: "box-shadow 0.2s, background 0.2s",
                }}
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                data-testid="button-get-in-touch"
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

          {/* Right Column */}
          <div className="hidden lg:block relative py-10 px-4">
            <AdminDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
