"use client";

import { useState, useRef } from "react";

interface AnnotationProps {
  children: React.ReactNode;
  tooltip: string;
  side?: "top" | "bottom";
}

export function Annotation({ children, tooltip, side = "top" }: AnnotationProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function hide() {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  }

  function toggle() {
    setOpen((v) => !v);
  }

  return (
    <span className="relative inline">
      <button
        type="button"
        onMouseEnter={show}
        onMouseLeave={hide}
        onClick={toggle}
        className="cursor-help border-b border-dashed border-[--il-purple]/50 text-[--il-purple] hover:border-[--il-purple] transition-colors"
      >
        {children}
      </button>
      {open && (
        <span
          role="tooltip"
          onMouseEnter={show}
          onMouseLeave={hide}
          className={`pointer-events-auto absolute left-1/2 z-50 w-60 -translate-x-1/2 rounded-lg border border-[--il-purple-border] bg-white px-3 py-2.5 text-left text-xs leading-relaxed text-foreground shadow-lg ${
            side === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <span className="block font-semibold text-[--il-purple] mb-0.5 text-[10px] uppercase tracking-wider">
            What's this?
          </span>
          {tooltip}
          {/* Arrow */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 h-0 w-0 border-x-4 border-x-transparent ${
              side === "top"
                ? "top-full border-t-4 border-t-[--il-purple-border]"
                : "bottom-full border-b-4 border-b-[--il-purple-border]"
            }`}
          />
        </span>
      )}
    </span>
  );
}
