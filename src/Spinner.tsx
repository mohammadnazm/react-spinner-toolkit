import React, { useEffect } from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  borderWidth?: number;
  speed?: number;
  animationType?:
    | "spin"
    | "bounce"
    | "pulse"
    | "fade"
    | "rotateSquare"
    | "bounceBalls"
    | "ring"
    | "scaleLoader"
    | "dotLoader"; // Added DotLoader
  loading?: boolean;
  gradient?: string;
  className?: string;
  shape?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#007aff",
  borderWidth = 4,
  speed = 1.5,
  animationType = "spin",
  gradient,
  loading = true,
  className,
  shape = "circle", // Default shape
}) => {
  const styles: React.CSSProperties = {
    width: size,
    height: size,
    border: `${borderWidth}px solid ${color}`,
    borderTop: `${borderWidth}px solid transparent`,
    borderRadius:
      shape === "circle" ? "50%" : shape === "square" ? "0%" : "50%",
    animation: loading ? `${animationType} ${speed}s linear infinite` : "none",
    background: gradient ? `linear-gradient(${gradient})` : "transparent",
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleSheet = document.styleSheets[0];

      const keyframeAnimations = {
        spin: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
        bounce: `
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `,
        pulse: `
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `,
        fade: `
          @keyframes fade {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `,
        rotateSquare: `
          @keyframes rotateSquare {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
        bounceBalls: `
          @keyframes bounceBalls {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `,
        ring: `
          @keyframes ring {
            0% { transform: scale(0.95); }
            50% { transform: scale(1.05); }
            100% { transform: scale(0.95); }
          }
        `,
        scaleLoader: `
          @keyframes scaleLoader {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.5); }
          }
        `,
        dotLoader: `
          @keyframes dotLoader {
            0%, 20% { transform: scale(1); }
            50% { transform: scale(1.5); }
            100% { transform: scale(1); }
          }
        `,
      };

      Object.entries(keyframeAnimations).forEach(([name, animation]) => {
        const ruleExists = Array.from(styleSheet.cssRules).some(
          (rule) => rule instanceof CSSKeyframesRule && rule.name === name
        );

        if (!ruleExists) {
          styleSheet.insertRule(animation, styleSheet.cssRules.length);
        }
      });
    }
  }, []);

  if (!loading) {
    return null; // Return nothing if not loading
  }

  switch (shape) {
    case "pulsing":
      return (
        <div
          style={{
            ...styles,
            animation: `pulse ${speed}s infinite`,
            backgroundColor: color,
            border: "none",
          }}
          className={className}
        />
      );
    case "fading":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 6,
                height: size / 6,
                borderRadius: "50%",
                backgroundColor: color,
                opacity: 0,
                animation: `fade ${speed}s infinite ${index * (speed / 3)}s`,
              }}
            />
          ))}
        </div>
      );
    case "rotatingSquare":
      const squareSize = size / 2; // Size of the square
      return (
        <div
          style={{
            width: squareSize,
            height: squareSize,
            backgroundColor: color,
            borderRadius: "5%", // Slightly rounded corners for a nicer look
            animation: `rotateSquare ${speed}s linear infinite`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "50% 50%", // Center the rotation
          }}
          className={className}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: color,
              opacity: 0.6, // Slight transparency for a layered effect
              borderRadius: "5%",
            }}
          />
        </div>
      );
    case "bouncingBalls":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 6,
                height: size / 6,
                borderRadius: "50%",
                backgroundColor: color,
                animation: `bounceBalls ${speed}s infinite ${
                  index * (speed / 3)
                }s`,
              }}
            />
          ))}
        </div>
      );
    case "ring":
      return (
        <div
          style={{
            ...styles,
            border: "none",
            animation: `ring ${speed}s infinite`,
            backgroundColor: "transparent",
            position: "relative",
          }}
          className={className}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              border: `${borderWidth}px solid ${color}`,
              borderRadius: "50%",
              animation: `ring ${speed}s infinite`,
              position: "absolute",
            }}
          />
        </div>
      );
    case "scaleLoader":
      const barWidth = size / 8; // Width of each bar
      const barHeight = size / 2; // Height of each bar
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
            height: size,
            width: size,
            position: "relative",
          }}
          className={className}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: barWidth,
                height: barHeight,
                backgroundColor: color,
                borderRadius: "5px", // Rounded corners for a nicer look
                animation: `scaleLoader ${speed}s infinite`,
                animationDelay: `${index * (speed / 3)}s`,
              }}
            />
          ))}
        </div>
      );
    case "dotLoader":
      // Refined DotLoader design with better sizes and spacing
      const dotSize = size / 6; // Size of each dot
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: size,
            height: size,
          }}
          className={className}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: dotSize,
                height: dotSize,
                borderRadius: "50%",
                backgroundColor: color,
                animation: `dotLoader ${speed}s infinite`,
                animationDelay: `${index * (speed / 3)}s`,
              }}
            />
          ))}
        </div>
      );
    default:
      return <div style={styles} className={className} />;
  }
};
