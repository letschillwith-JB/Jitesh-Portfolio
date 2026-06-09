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
              <a
                href="https://github.com/letschillwith-JB/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors w-fit"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jiteshbabani/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors w-fit"
              >
                LinkedIn
              </a>
              <a
                href="mailto:Jiteshbabani808@gmail.com"
                className="hover:text-primary transition-colors w-fit"
              >
                Email
              </a>
              <a
                href="https://wa.me/919165759300"
                target="_blank"
                rel="noreferrer"
                className="group w-fit inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  background: "rgba(22,163,74,0.1)",
                  border: "1px solid rgba(22,163,74,0.25)",
                  color: "#4ade80",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(22,163,74,0.2)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(22,163,74,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(22,163,74,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(22,163,74,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(22,163,74,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
