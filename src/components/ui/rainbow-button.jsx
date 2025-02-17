import React from "react";
import { cn } from "../../lib/utils";

export function RainbowButton({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",

        // before styles - glow effect
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,#00ff9d,#ff00e5,#00f0ff,#00ff9d,#ff00e5)] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // background colors - matched to theme
        "bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(10,10,10,0.6)_80%,rgba(10,10,10,0)),linear-gradient(90deg,#00ff9d,#ff00e5,#00f0ff,#00ff9d,#ff00e5)]",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
