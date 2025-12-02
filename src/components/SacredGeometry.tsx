import { cn } from "@/lib/utils";

interface SacredGeometryProps {
  className?: string;
}

export const SacredGeometry = ({ className }: SacredGeometryProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Outer rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-sacred-rotate opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="sacredGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(158, 64%, 35%)" />
              <stop offset="50%" stopColor="hsl(40, 70%, 50%)" />
              <stop offset="100%" stopColor="hsl(270, 50%, 45%)" />
            </linearGradient>
          </defs>
          {/* Flower of Life Pattern */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="url(#sacredGradient)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="url(#sacredGradient)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="url(#sacredGradient)" strokeWidth="0.5" />
          {/* Hexagonal Pattern */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i}>
              <circle
                cx={200 + 60 * Math.cos((angle * Math.PI) / 180)}
                cy={200 + 60 * Math.sin((angle * Math.PI) / 180)}
                r="60"
                fill="none"
                stroke="url(#sacredGradient)"
                strokeWidth="0.5"
              />
              <line
                x1="200"
                y1="200"
                x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
                y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
                stroke="url(#sacredGradient)"
                strokeWidth="0.3"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Pulsing center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-sacred-pulse">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            points="100,10 190,90 160,180 40,180 10,90"
            fill="none"
            stroke="hsl(40, 70%, 50%)"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <polygon
            points="100,30 170,90 145,160 55,160 30,90"
            fill="none"
            stroke="hsl(158, 64%, 35%)"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-secondary/30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};
