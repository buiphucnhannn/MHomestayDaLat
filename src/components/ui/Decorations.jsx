// Hoa dã quỳ (wild sunflower) nét mảnh — biểu tượng mùa hoa Đà Lạt
export function WildSunflower({ className = "", color = "#C89B53", opacity = 0.35 }) {
  const petals = Array.from({ length: 14 }, (_, i) => (i * 360) / 14);
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity={opacity}>
        {/* Petals */}
        {petals.map((deg) => (
          <path key={deg} d="M 100 72 C 92 58 92 40 100 26 C 108 40 108 58 100 72 Z" transform={"rotate(" + deg + " 100 96)"} />
        ))}
        {/* Seed disc */}
        <circle cx="100" cy="96" r="22" />
        <circle cx="100" cy="96" r="14" strokeDasharray="2 3" />
        <circle cx="100" cy="96" r="5" />
        {/* Stem & leaves */}
        <path d="M 100 118 C 98 140 102 160 100 185" strokeWidth="1.5" />
        <path d="M 100 160 C 80 150 64 156 58 168 C 76 172 90 168 100 160 Z" />
        <path d="M 101 146 C 120 134 138 140 144 152 C 126 156 112 154 101 146 Z" />
        {/* Ground line */}
        <path d="M 60 188 C 85 184 115 184 140 188" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

export function BotanicalBranch({ className = "", flip = false, color = "#1E4B38" }) {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
        {/* Main stem curve */}
        <path d="M 20 210 Q 50 140 110 30" />
        {/* Leaf 1 top */}
        <path d="M 110 30 Q 125 10 140 15 Q 135 35 110 30" fill={color} fillOpacity="0.2" />
        {/* Leaf pair 2 */}
        <path d="M 95 60 Q 125 45 145 60 Q 125 75 95 60" fill={color} fillOpacity="0.25" />
        <path d="M 90 70 Q 60 55 45 70 Q 65 85 90 70" fill={color} fillOpacity="0.22" />
        {/* Leaf pair 3 */}
        <path d="M 75 105 Q 115 95 130 115 Q 100 125 75 105" fill={color} fillOpacity="0.25" />
        <path d="M 70 115 Q 35 100 20 118 Q 45 130 70 115" fill={color} fillOpacity="0.2" />
        {/* Leaf pair 4 */}
        <path d="M 55 150 Q 95 140 110 160 Q 80 170 55 150" fill={color} fillOpacity="0.25" />
        <path d="M 48 160 Q 15 150 5 170 Q 30 180 48 160" fill={color} fillOpacity="0.2" />
      </g>
    </svg>
  );
}

// Ornamental seam between two cream sections: fading gold rules around a small wild sunflower.
// Place it absolutely at the top of the lower section; className sets the vertical offset.
export function SectionDivider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-x-0 flex items-center justify-center gap-4 px-6 pointer-events-none z-0 ${className}`}
    >
      <span data-reveal="divider-l" data-reveal-delay="200" className="h-px w-full max-w-[420px] bg-gradient-to-r from-transparent via-[#C89B53]/35 to-[#C89B53]/60" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B53]/50 shrink-0" />
      <span data-reveal="divider-lotus" className="shrink-0 -mt-4">
        <WildSunflower className="w-14 h-14 md:w-16 md:h-16" opacity={1} />
      </span>
      <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B53]/50 shrink-0" />
      <span data-reveal="divider-r" data-reveal-delay="200" className="h-px w-full max-w-[420px] bg-gradient-to-l from-transparent via-[#C89B53]/35 to-[#C89B53]/60" />
    </div>
  );
}
