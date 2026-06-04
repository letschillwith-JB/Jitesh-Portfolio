import { motion } from "framer-motion";

const items = [
  "PayU Payment Integration",
  "React Native · iOS & Android",
  "PostgreSQL · Drizzle ORM",
  "End-to-End Delivery",
  "Neon · Railway · Vercel",
  "Business Logic Systems"
];

export function SocialProofStrip() {
  return (
    <div className="w-full bg-card border-y border-border py-4 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card to-transparent z-10 md:hidden" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-card to-transparent z-10 md:hidden" />
      
      {/* Desktop view: centered, static */}
      <div className="hidden md:flex justify-center items-center gap-12 container mx-auto px-4 max-w-7xl">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs font-medium text-foreground tracking-wide whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile view: scrolling marquee */}
      <div className="flex md:hidden w-[200%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex items-center justify-around w-full"
        >
          {/* Double the items for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-6 opacity-60">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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