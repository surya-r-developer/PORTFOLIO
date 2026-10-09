'use client';

import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[10px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      <div className={`relative ${currentSize.icon} flex items-center justify-center`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-electric-600 to-cyan-400 rounded-lg opacity-40 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
        
        {/* Frame */}
        <div className="relative w-full h-full bg-navy-900 border border-electric-500/40 rounded-lg flex items-center justify-center p-1 shadow-md overflow-hidden group-hover:border-cyan-400 transition-colors duration-300">
          {/* Subtle tech background line */}
          <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-cyan-400/20 rounded-full blur-[2px]" />
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-white"
          >
            {/* Hexagon Bracket */}
            <path
              d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
              stroke="url(#logo-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            />
            {/* Minimalist Stylized 'S' & 'R' Tech Typography */}
            <path
              d="M13 14C13 12.8954 13.8954 12 15 12H19C20.1046 12 21 12.8954 21 14V16C21 17.1046 20.1046 18 19 18H15C13.8954 18 13 18.8954 13 20V24C13 25.1046 13.8954 26 15 26H20"
              stroke="#3B82F6"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 14H26C27.1046 14 28 14.8954 28 16V18C28 19.1046 27.1046 20 26 20H22V26M26 20L28.5 26"
              stroke="#22D3EE"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Tech Node Dot */}
            <circle cx="20" cy="3" r="1.5" fill="#22D3EE" />
            <defs>
              <linearGradient id="logo-grad" x1="5" y1="3" x2="35" y2="37" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold tracking-tight text-slate-900 dark:text-white ${currentSize.text} leading-tight`}>
            SURYA <span className="text-gradient">R</span>
          </span>
          <span className={`font-mono text-slate-500 dark:text-slate-400 font-medium ${currentSize.sub} tracking-wider uppercase`}>
            DEV // CSE '29
          </span>
        </div>
      )}
    </div>
  );
};
