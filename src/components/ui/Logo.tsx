import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "w-6 h-6", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 select-none group cursor-pointer">
      <div className="relative flex items-center justify-center">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-xl blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Logo Container */}
        <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300">
          <svg 
            className={className} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logo-m-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" /> {/* blue-500 */}
                <stop offset="50%" stopColor="#6366F1" /> {/* indigo-500 */}
                <stop offset="100%" stopColor="#A855F7" /> {/* purple-500 */}
              </linearGradient>
            </defs>
            <path 
              d="M20 75V25L50 55L80 25V75" 
              stroke="url(#logo-m-grad)" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </div>
      </div>
      {showText && (
        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
          M-Menu
        </span>
      )}
    </div>
  );
}
