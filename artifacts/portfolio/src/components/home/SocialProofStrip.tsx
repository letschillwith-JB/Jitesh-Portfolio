import { motion } from "framer-motion";

const items = [
  "PayU Payment Integration",
  "React Native · iOS & Android",
  "PostgreSQL · Drizzle ORM",
  "End-to-End Delivery",
  "Neon · Railway · Vercel",
  "Business Logic Systems",
  "Full Stack · TypeScript",
  "Mobile App · Admin Dashboard",
];

export function SocialProofStrip() {
  return (
    <div
      className="w-full border-y border-border py-4 overflow-hidden relative"
      style={{ background: "linear-gradient(180deg, #0D0D14 0%, #111118 100%)" }}
    >
      {/* Edge fades — both sides on all viewports */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0D0D14, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0D0D14, transparent)" }} />

      {/* Desktop: scrolling marquee (same as mobile, always moving) */}
      <div className="flex items-center" style={{ width: "max-content" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex items-center"
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8 opacity-50 hover:opacity-90 transition-opacity duration-300 cursor-default">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "hsl(var(--primary))" }}
              />
              <span className="font-mono text-xs font-medium text-foreground tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
