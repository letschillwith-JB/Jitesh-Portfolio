import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-primary text-primary flex items-center justify-center font-display font-bold text-lg group-hover:bg-primary/10 transition-colors rounded-sm">
              JB
            </div>
            <span className="font-display font-semibold text-xl tracking-tight hidden sm:block">
              Jitesh Babani
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link
              href="/"
              className={`hover:text-foreground transition-colors ${
                location === "/" ? "text-foreground" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`hover:text-foreground transition-colors ${
                location.startsWith("/projects") ? "text-foreground" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`hover:text-foreground transition-colors ${
                location === "/contact" ? "text-foreground" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="text-xs font-mono text-foreground">
              Available for Projects
            </span>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="w-10 h-10 border border-primary text-primary flex items-center justify-center font-display font-bold text-lg rounded-sm">
                JB
              </div>
              <button
                className="text-foreground p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-3xl font-display font-semibold mt-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="mt-auto flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3 self-start">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-sm font-mono text-foreground">
                Available for Projects
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}