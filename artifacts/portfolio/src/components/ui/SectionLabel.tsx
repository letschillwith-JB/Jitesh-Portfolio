import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div 
      className={cn(
        "font-mono text-sm font-medium tracking-widest text-primary uppercase mb-4",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}