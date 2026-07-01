"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[color:var(--color-foreground)] text-[color:var(--color-background)] hover:opacity-90 shadow-md",
      outline: "border border-[color:var(--color-border)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-foreground)]",
      ghost: "hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-foreground)]",
      glass: "bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-lg"
    };
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
