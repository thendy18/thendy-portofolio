"use client";

import React, { useEffect, useState, type MouseEvent } from "react";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  duration?: string;
}

export const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  (
    {
      className = "",
      children,
      rippleColor = "#111111",
      duration = "600ms",
      onClick,
      ...props
    },
    ref,
  ) => {
    const [ripples, setRipples] = useState<
      Array<{ x: number; y: number; size: number; key: number }>
    >([]);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      setRipples((current) => [
        ...current,
        {
          x: event.clientX - rect.left - size / 2,
          y: event.clientY - rect.top - size / 2,
          size,
          key: Date.now(),
        },
      ]);
      onClick?.(event);
    };

    useEffect(() => {
      if (ripples.length === 0) return;

      const latest = ripples[ripples.length - 1];
      const timeout = window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.key !== latest.key));
      }, Number.parseInt(duration, 10));

      return () => window.clearTimeout(timeout);
    }, [ripples, duration]);

    return (
      <button
        ref={ref}
        className={`relative flex cursor-pointer items-center justify-center overflow-hidden ${className}`}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0">
          {ripples.map((ripple) => (
            <span
              key={ripple.key}
              className="absolute rounded-full opacity-30"
              style={{
                width: ripple.size,
                height: ripple.size,
                top: ripple.y,
                left: ripple.x,
                backgroundColor: rippleColor,
                transform: "scale(0)",
                animation: `rippling ${duration} ease-out`,
              }}
            />
          ))}
        </span>
      </button>
    );
  },
);

RippleButton.displayName = "RippleButton";
