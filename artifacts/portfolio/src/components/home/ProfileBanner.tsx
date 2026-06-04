import { motion } from "framer-motion";

export function ProfileBanner() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 0 0 1px rgba(99,102,241,0.12) inset, 0 24px 80px rgba(0,0,0,0.45)",
          }}
        >
          {/* The banner image */}
          <img
            src="/jitesh-banner.png"
            alt="Jitesh Babani — Full Stack Developer"
            className="w-full block"
            style={{ display: "block", maxHeight: 340, objectFit: "cover", objectPosition: "center top" }}
          />

          {/* Left edge fade — blends with page bg */}
          <div
            className="absolute inset-y-0 left-0 w-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(10,10,15,0.6) 0%, transparent 100%)",
            }}
          />
          {/* Right edge fade */}
          <div
            className="absolute inset-y-0 right-0 w-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(10,10,15,0.6) 0%, transparent 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,15,0.5) 0%, transparent 100%)",
            }}
          />

          {/* Indigo glow overlay — top-left corner accent */}
          <div
            className="absolute top-0 left-0 w-64 h-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 0% 50%, rgba(99,102,241,0.1) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
