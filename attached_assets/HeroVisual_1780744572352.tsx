"use client"

import { motion } from "motion/react"

// ─── Mini card: Space-Booker Admin Dashboard ───────────────────────────────
function SpaceBookerCard() {
  const spaces = [
    true, true, false, true, false, false,
    true, false, true, true, false, true,
  ]

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">
            Space-Booker
          </span>
        </div>
        <span className="text-[10px] font-mono text-white/25">Admin</span>
      </div>

      {/* Space availability grid */}
      <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-2">
        Space availability
      </p>
      <div className="grid grid-cols-6 gap-1 mb-2">
        {spaces.map((available, i) => (
          <div
            key={i}
            className={`h-2 rounded-sm ${
              available
                ? "bg-emerald-400/70"
                : "bg-indigo-500/40"
            }`}
          />
        ))}
      </div>
      <div className="flex gap-3 mb-3">
        <span className="text-[9px] font-mono text-emerald-400">● Available</span>
        <span className="text-[9px] font-mono text-indigo-400">● Booked</span>
      </div>

      <div className="h-px bg-white/[0.06] mb-3" />

      {/* Stats row */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">
            Bookings today
          </p>
          <p className="text-2xl font-bold font-mono text-white leading-none">12</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">
            Revenue
          </p>
          <p className="text-lg font-bold font-mono text-white leading-none">₹14,280</p>
        </div>
      </div>

      {/* Confirmation pill */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-2">
        <div className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <polyline
              points="1,3 3,5 7,1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="text-[10px] font-mono text-emerald-400">
          Payment confirmed · ₹800
        </span>
      </div>
    </div>
  )
}

// ─── Mini card: TradeLink P&L ──────────────────────────────────────────────
function TradeLinkCard() {
  // Sparkline points (160×36 viewBox)
  const points = "0,28 20,22 40,26 60,14 80,18 100,8 120,12 140,4 160,6"
  const fill = "0,36 0,28 20,22 40,26 60,14 80,18 100,8 120,12 140,4 160,6 160,36"

  return (
    <div className="p-4">
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-teal-400">▲</span>
        <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">
          TradeLink
        </span>
      </div>

      <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">
        Today&apos;s P&L
      </p>
      <p className="text-xl font-bold font-mono text-teal-400 leading-none mb-2">
        +₹4,280
      </p>

      {/* Sparkline */}
      <svg
        viewBox="0 0 160 36"
        className="w-full mb-3"
        style={{ height: 36 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon fill="url(#tealGrad)" points={fill} />
        <polyline
          fill="none"
          stroke="#2DD4BF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          opacity="0.8"
        />
      </svg>

      <div className="h-px bg-white/[0.06] mb-2" />
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">
          Win rate
        </span>
        <span className="text-[11px] font-mono text-white/60">68%</span>
      </div>
    </div>
  )
}

// ─── Mini card: AutoMinder notification ───────────────────────────────────
function AutoMinderCard() {
  return (
    <div className="p-4">
      <div className="mb-3">
        <span className="text-[10px] font-mono text-amber-400/80 tracking-widest uppercase border border-amber-500/20 bg-amber-500/[0.08] px-2 py-0.5 rounded-md">
          AutoMinder
        </span>
      </div>

      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/20">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FCD34D"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="0.5" fill="#FCD34D" />
          </svg>
        </div>
        <div>
          <p className="text-[12px] font-medium text-white/80 leading-snug">
            Service due in 12 days
          </p>
          <p className="text-[9px] font-mono text-white/30 mt-0.5">
            Honda Activa · MH-09-AB-1234
          </p>
        </div>
      </div>

      <div className="h-px bg-white/[0.06] my-3" />
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">
          Active customers
        </span>
        <span className="text-[11px] font-mono text-white/60">47</span>
      </div>
    </div>
  )
}

// ─── Main HeroVisual component ─────────────────────────────────────────────
export default function HeroVisual() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: "100%", minHeight: 420 }}
    >
      {/*
       * Cards stage — the three cards are absolutely positioned within this
       * relative container. Adjust the pixel offsets if you need to tune
       * the composition on your specific screen size.
       */}
      <div className="relative" style={{ width: 300, height: 380 }}>

        {/* ── TradeLink (back, top-right) ── */}
        <motion.div
          className="absolute rounded-2xl border border-teal-500/20 bg-[#0E1A19]"
          style={{
            width: 200,
            right: -20,
            top: 0,
            zIndex: 1,
            rotate: 4,
            transformOrigin: "top right",
          }}
          initial={{ opacity: 0, y: 20, rotate: 4 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            rotate: 4,
            transition: {
              opacity: { duration: 0.5, delay: 0.5 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              },
            },
          }}
        >
          <TradeLinkCard />
        </motion.div>

        {/* ── AutoMinder (back, bottom-right) ── */}
        <motion.div
          className="absolute rounded-2xl border border-amber-500/20 bg-[#1A1610]"
          style={{
            width: 190,
            right: -28,
            bottom: 0,
            zIndex: 1,
            rotate: -2,
            transformOrigin: "bottom right",
          }}
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
            rotate: -2,
            transition: {
              opacity: { duration: 0.5, delay: 0.7 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              },
            },
          }}
        >
          <AutoMinderCard />
        </motion.div>

        {/* ── Space-Booker (front, center) ── */}
        <motion.div
          className="absolute rounded-2xl border border-indigo-500/25 bg-[#12121C]"
          style={{
            width: 264,
            left: 0,
            top: 48,
            zIndex: 3,
            // Subtle indigo glow
            boxShadow:
              "0 0 0 1px rgba(99,102,241,0.1), 0 24px 48px rgba(0,0,0,0.5), 0 0 80px rgba(99,102,241,0.06)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
            transition: {
              opacity: { duration: 0.5, delay: 0.3 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
        >
          <SpaceBookerCard />
        </motion.div>

      </div>
    </div>
  )
}
