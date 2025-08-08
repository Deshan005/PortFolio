// components/SpiderWeb.jsx
import React from "react";

const SpiderWeb = ({
  color = "rgba(255,255,255,0.06)",
  lineColor = "rgba(255,255,255,0.08)",
  rotateSpeed = 40, 
  pulseSpeed = 6,
}) => {
  const rings = 8;
  const radials = 12; 

  // generate ring radii as percentages
  const radii = Array.from({ length: rings }, (_, i) => 8 + i * (80 / rings)); // 8%..~88%

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: "120vw",
          height: "120vh",
          position: "absolute",
          left: "-10vw",
          top: "-10vh",
          transformOrigin: "50% 50%",
          opacity: 1,
          mixBlendMode: "screen",
          filter: "blur(.2px)",
          zIndex: 0,
        }}
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={lineColor} />
          </linearGradient>

          <style>{`
            @keyframes web-rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes web-pulse {
              0% { stroke-opacity: 0.06; }
              50% { stroke-opacity: 0.12; }
              100% { stroke-opacity: 0.06; }
            }
            .web-wrapper {
              animation: web-rotate ${rotateSpeed}s linear infinite;
              transform-origin: 50% 50%;
            }
            .web-ring {
              fill: none;
              stroke: url(#g1);
              stroke-width: 0.25;
              stroke-linecap: round;
              stroke-linejoin: round;
              animation: web-pulse ${pulseSpeed}s ease-in-out infinite;
            }
            .web-radial {
              fill: none;
              stroke: url(#g1);
              stroke-width: 0.2;
              stroke-linecap: round;
              opacity: 0.9;
            }
          `}</style>
        </defs>

        <g className="web-wrapper">
          {/* radial spokes */}
          {Array.from({ length: radials }).map((_, i) => {
            const angle = (360 / radials) * i;
            return (
              <g key={`r-${i}`} transform={`rotate(${angle} 50 50)`}>
                <line
                  className="web-radial"
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="2"
                  opacity={0.06 + (i % 2) * 0.02}
                />
              </g>
            );
          })}

          {/* concentric rings */}
          {radii.map((r, i) => (
            <circle
              key={`c-${i}`}
              className="web-ring"
              cx="50"
              cy="50"
              r={r / 1.3} /* scaled for viewBox */
              strokeOpacity={0.06 + (i / radii.length) * 0.07}
            />
          ))}

          {/* inner spiral accent — subtle */}
          <path
            d="M50,50 m-2,0 a2,2 0 1,0 4,0 a4,4 0 1,1 -4,0 a8,8 0 1,0 8,0 a16,16 0 1,1 -16,0"
            fill="none"
            stroke={lineColor}
            strokeWidth="0.25"
            strokeOpacity="0.06"
            style={{ transformOrigin: "50% 50%", transform: "rotate(0deg)" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default SpiderWeb;
