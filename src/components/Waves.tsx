// src/components/Waves.tsx
type Props = { position?: "top" | "bottom" };

export default function Waves({ position = "top" }: Props) {
  const isBottom = position === "bottom";
  return (
    <div
      aria-hidden
      className={`wave ${isBottom ? "wave-bottom" : "wave-top"}`}
    >
      {/* Layer 1 (near water) */}
      <svg
        className="wave-layer"
        viewBox="0 0 1440 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* silky gold that fades toward the “sea” */}
          <linearGradient id="goldGrad1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(212,175,55,0.55)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.0)" />
          </linearGradient>
        </defs>
        {/* Smooth sine-ish path (wide), fills upward to create water body */}
        <path
          d="M0,140 C120,120 240,170 360,150 C480,130 600,180 720,160 C840,140 960,190 1080,170 C1200,150 1320,200 1440,180 L1440,220 L0,220 Z"
          fill="url(#goldGrad1)"
        />
      </svg>

      {/* Layer 2 (far water): slightly different curve + slower */}
      <svg
        className="wave-layer layer2"
        viewBox="0 0 1440 220"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldGrad2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(212,175,55,0.35)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.0)" />
          </linearGradient>
        </defs>
        <path
          d="M0,150 C130,135 260,175 390,160 C520,145 650,185 780,170 C910,155 1040,195 1170,180 C1300,165 1370,195 1440,190 L1440,220 L0,220 Z"
          fill="url(#goldGrad2)"
        />
      </svg>

      {/* subtle foam edge where water meets beach */}
      <div className="shoreline" />
    </div>
  );
}
