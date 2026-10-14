// Phác hoạ nét mảnh Ga Đà Lạt (đường Quang Trung) — ba mái nhọn mô phỏng đỉnh Langbiang.
export default function DalatStationSketch({ className = "", color = "#C89B53", opacity = 0.4 }) {
  return (
    <svg
      viewBox="0 0 500 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity={opacity}>
        {/* Ground & railway tracks */}
        <line x1="30" y1="210" x2="470" y2="210" strokeWidth="1.5" />
        <path d="M 20 222 L 480 222" strokeDasharray="3 3" />
        <path d="M 10 230 L 490 230" strokeDasharray="2 4" opacity="0.6" />

        {/* Side wings with low sloping roofs */}
        <path d="M 60 210 V 158 H 172" />
        <path d="M 50 160 L 70 146 H 175" strokeWidth="1.4" />
        <path d="M 440 210 V 158 H 328" />
        <path d="M 450 160 L 430 146 H 325" strokeWidth="1.4" />
        {/* Wing windows (arched) */}
        {[78, 106, 134, 346, 374, 402].map((x) => (
          <path key={x} d={`M ${x} 196 V 178 C ${x} 168 ${x + 16} 168 ${x + 16} 178 V 196`} />
        ))}

        {/* Central hall */}
        <path d="M 172 210 V 132 H 328 V 210" />

        {/* Three steep gables — the station's signature */}
        <path d="M 168 134 L 207 66 L 246 134" strokeWidth="1.6" />
        <path d="M 254 134 L 293 66 L 332 134" strokeWidth="1.6" />
        <path d="M 206 130 L 250 30 L 294 130" strokeWidth="1.8" />
        {/* Stained-glass stripes in the gables */}
        <path d="M 207 82 V 128 M 199 98 V 128 M 215 98 V 128" />
        <path d="M 293 82 V 128 M 285 98 V 128 M 301 98 V 128" />
        <path d="M 250 50 V 80 M 240 70 V 80 M 260 70 V 80" />
        {/* Clock */}
        <circle cx="250" cy="98" r="11" />
        <path d="M 250 98 V 91 M 250 98 L 255 101" />
        {/* Spire */}
        <path d="M 250 30 V 16" strokeWidth="1.6" />
        <circle cx="250" cy="13" r="2.5" />

        {/* Entrance arches */}
        <path d="M 222 210 V 170 C 222 152 278 152 278 170 V 210" strokeWidth="1.5" />
        <path d="M 232 210 V 174 C 232 162 268 162 268 174 V 210" />
        <path d="M 186 210 V 180 C 186 170 206 170 206 180 V 210" />
        <path d="M 294 210 V 180 C 294 170 314 170 314 180 V 210" />

        {/* Pine trees framing the station */}
        <path d="M 22 210 L 34 168 L 46 210 M 28 190 L 40 190 M 26 200 L 42 200" />
        <path d="M 456 210 L 470 160 L 484 210 M 462 186 L 478 186 M 460 198 L 480 198" />

        {/* Soft mist swirls */}
        <path d="M 60 120 C 90 112 115 124 145 118" strokeDasharray="2 3" opacity="0.6" />
        <path d="M 355 112 C 385 106 410 118 440 112" strokeDasharray="2 3" opacity="0.6" />
      </g>
    </svg>
  );
}
