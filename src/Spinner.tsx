import React, { useEffect } from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  borderWidth?: number;
  speed?: number;
  animationType?: "spin" | "bounce";
  loading?: boolean;
  gradient?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#007aff",
  borderWidth = 4,
  speed = 1.5,
  animationType = "spin",
  loading = true,
  gradient,
  className,
}) => {
  const styles: React.CSSProperties = {
    width: size,
    height: size,
    border: `${borderWidth}px solid ${
      gradient ? `linear-gradient(${gradient})` : color
    }`,
    borderTop: `${borderWidth}px solid transparent`,
    borderRadius: "50%",
    animation: `${
      animationType === "spin" ? "spin" : "bounce"
    } ${speed}s linear infinite`,
    display: loading ? "block" : "none",
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleSheet = document.styleSheets[0];

      const spinRuleExists = Array.from(styleSheet.cssRules).some(
        (rule) => rule instanceof CSSKeyframesRule && rule.name === "spin"
      );

      if (!spinRuleExists) {
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

      const bounceRuleExists = Array.from(styleSheet.cssRules).some(
        (rule) => rule instanceof CSSKeyframesRule && rule.name === "bounce"
      );

      if (!bounceRuleExists) {
        styleSheet.insertRule(
          `
          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `,
          styleSheet.cssRules.length
        );
      }
    }
  }, []);

  return <div style={styles} className={className} />;
};
