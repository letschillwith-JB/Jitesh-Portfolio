import { motion } from "framer-motion";
import { ProjectFeature } from "@/types/project";
import * as Icons from "lucide-react";

interface FeatureRowProps {
  feature: ProjectFeature;
  index: number;
}

export function FeatureRow({ feature, index }: FeatureRowProps) {
  // @ts-expect-error - dynamic icon access
  const IconComponent = Icons[feature.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <IconComponent size={24} strokeWidth={1.5} />
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold text-xl text-foreground mb-2">
          {feature.title}
        </h4>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}