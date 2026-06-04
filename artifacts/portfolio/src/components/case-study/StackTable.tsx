import { StackCategory } from "@/types/project";

interface StackTableProps {
  stack: StackCategory[];
}

export function StackTable({ stack }: StackTableProps) {
  return (
    <div className="w-full border border-border rounded-xl overflow-hidden bg-card">
      <div className="grid grid-cols-3 bg-muted/50 border-b border-border p-4">
        <div className="font-mono text-sm text-foreground font-semibold">Category</div>
        <div className="col-span-2 font-mono text-sm text-foreground font-semibold">Technology</div>
      </div>
      
      <div className="divide-y divide-border">
        {stack.map((category, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 md:gap-0 hover:bg-white/5 transition-colors">
            <div className="font-sans font-medium text-foreground">
              {category.category}
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-2">
              {category.items.map((item, j) => (
                <span 
                  key={j} 
                  className="bg-background border border-border px-3 py-1 rounded-full text-sm text-muted-foreground font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}