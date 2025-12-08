import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0"
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-12",
    visible: "opacity-100 translate-y-0"
  },
  "fade-left": {
    initial: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0"
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0"
  },
  "scale": {
    initial: "opacity-0 scale-90",
    visible: "opacity-100 scale-100"
  },
  "blur": {
    initial: "opacity-0 blur-sm",
    visible: "opacity-100 blur-0"
  }
};

export const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay, threshold: 0.15 });
  const { initial, visible } = animationClasses[animation];

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};
