import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 border border-primary text-primary flex items-center justify-center font-display font-bold text-lg group-hover:bg-primary/10 transition-colors rounded-sm">
                JB
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">
                Jitesh Babani
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mt-4">
              Full Stack Developer · Bhopal, India
            </p>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Jitesh Babani. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-foreground mb-6">NAVIGATION</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors w-fit">Home</Link>
              <Link href="/projects" className="hover:text-primary transition-colors w-fit">Projects</Link>
              <Link href="/contact" className="hover:text-primary transition-colors w-fit">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-foreground mb-6">CONNECT</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors w-fit">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors w-fit">LinkedIn</a>
              <a href="mailto:hello@example.com" className="hover:text-primary transition-colors w-fit">Email</a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors w-fit">Freelancer.com</a>
              <a href="#" className="hover:text-primary transition-colors text-secondary w-fit flex items-center gap-2">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            Built with React, Vite and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}