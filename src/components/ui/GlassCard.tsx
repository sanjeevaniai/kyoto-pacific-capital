import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card silk-shimmer",
        hover && "hover:shadow-gold-glow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
