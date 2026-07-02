"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
}

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const hasPlus = value.includes("+");

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numericValue);
      setCount(current);
      
      if (step >= steps) {
        clearInterval(timer);
        setCount(numericValue);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{hasPlus ? "+" : ""}{suffix}
    </span>
  );
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="text-center group"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative text-4xl md:text-5xl font-extrabold gradient-text-blue mb-2">
              <AnimatedNumber value={stat.value} />
            </div>
          </div>
          <p className="text-sm text-[color:var(--color-muted-foreground)] font-medium tracking-wide">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
