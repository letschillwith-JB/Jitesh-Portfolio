export function ArchitectureDiagram() {
  return (
    <div className="w-full bg-card border border-border rounded-xl p-8 relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-4xl mx-auto">
        {/* Client Side */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="text-center font-mono text-xs text-muted-foreground uppercase tracking-widest">Client</div>
          <div className="bg-background border border-border rounded-lg p-6 shadow-xl text-center hover:border-primary/50 transition-colors">
            <div className="font-display font-bold text-lg mb-2 text-foreground">User Interface</div>
            <div className="text-sm text-muted-foreground font-mono">React / Next.js</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-8">
          <div className="h-[2px] w-16 bg-gradient-to-r from-border to-primary/50 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary/50 rotate-45" />
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center shrink-0 h-8">
          <div className="w-[2px] h-16 bg-gradient-to-b from-border to-primary/50 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-primary/50 rotate-45" />
          </div>
        </div>

        {/* Server Side */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="text-center font-mono text-xs text-muted-foreground uppercase tracking-widest">Server</div>
          <div className="bg-background border border-primary/30 rounded-lg p-6 shadow-[0_0_30px_rgba(99,102,241,0.1)] text-center relative">
            <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent rounded-lg -z-10" />
            <div className="font-display font-bold text-lg mb-2 text-foreground">API Layer</div>
            <div className="text-sm text-muted-foreground font-mono">Node.js / Express</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-8">
          <div className="h-[2px] w-16 bg-gradient-to-r from-primary/50 to-border relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border rotate-45" />
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center shrink-0 h-8">
          <div className="w-[2px] h-16 bg-gradient-to-b from-primary/50 to-border relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-border rotate-45" />
          </div>
        </div>

        {/* Database Side */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="text-center font-mono text-xs text-muted-foreground uppercase tracking-widest">Data</div>
          <div className="bg-background border border-border rounded-lg p-6 shadow-xl text-center hover:border-primary/50 transition-colors">
            <div className="font-display font-bold text-lg mb-2 text-foreground">Database</div>
            <div className="text-sm text-muted-foreground font-mono">PostgreSQL</div>
          </div>
        </div>
      </div>
    </div>
  );
}