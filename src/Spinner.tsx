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
    | "ring";
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
      return (
        <div
          style={{
            ...styles,
            borderRadius: "0%",
            animation: `rotateSquare ${speed}s linear infinite`,
          }}
          className={className}
        />
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
    default:
      return <div style={styles} className={className} />;
  }
};
