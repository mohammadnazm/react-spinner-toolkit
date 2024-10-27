import React, { useEffect } from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  borderWidth?: number;
  speed?: number;
  animationType?: "spin" | "bounce";
  gradient?: string;
  loading?: boolean;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#3498db",
  borderWidth = 4,
  speed = 1.5,
  animationType = "spin",
  gradient,
  loading = true,
  className,
}) => {
  const styles: React.CSSProperties = {
    width: size,
    height: size,
    border: `${borderWidth}px solid ${color}`,
    borderTop: `${borderWidth}px solid transparent`,
    borderRadius: "50%",
    animation: loading ? `${animationType} ${speed}s linear infinite` : "none",
    background: gradient ? `linear-gradient(${gradient})` : "transparent",
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleSheet = document.styleSheets[0];
      const spinExists = Array.from(styleSheet.cssRules).some(
        (rule) => rule instanceof CSSKeyframesRule && rule.name === "spin"
      );
      const bounceExists = Array.from(styleSheet.cssRules).some(
        (rule) => rule instanceof CSSKeyframesRule && rule.name === "bounce"
      );

      if (!spinExists) {
        styleSheet.insertRule(
          `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
          styleSheet.cssRules.length
        );
      }

      if (!bounceExists) {
        styleSheet.insertRule(
          `
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `,
          styleSheet.cssRules.length
        );
      }
    }
  }, []);

  return <div style={styles} className={className} />;
};
