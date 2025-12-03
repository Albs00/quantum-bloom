import { cn } from "@/lib/utils";

interface SectionDividerProps {
  position?: "top" | "bottom";
  fill?: string;
  className?: string;
  variant?: "wave" | "curve" | "slope";
}

export const SectionDivider = ({ 
  position = "bottom", 
  fill = "fill-background", 
  className,
  variant = "wave"
}: SectionDividerProps) => {
  
  const getPath = () => {
    switch (variant) {
      case "curve":
        return "M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z"; // Simplified for example, needs actual viewbox logic
      case "slope":
        return "M0,100 L1440,0 L1440,100 Z";
      case "wave":
      default:
         // A smooth organic wave
         return "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
    }
  };

  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none",
        position === "top" ? "top-0 rotate-180" : "bottom-0",
        className
      )}
    >
      <svg
        className={cn("relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]", fill)}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d={getPath()}
          className="fill-current"
        />
      </svg>
    </div>
  );
};
