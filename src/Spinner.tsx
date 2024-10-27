import React, { useEffect } from "react";

interface SpinnerProps {
  size?: number | string;
  color?: string;
  borderWidth?: number;
  speed?: number;
  animationType?: "spin" | "bounce" | "pulse";
  gradient?: string;
  className?: string;
  loading?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#3498db",
  borderWidth = 5,
  speed = 1.5,
  animationType = "spin",
  gradient,
  className,
  loading = true,
}) => {
  const styles = {
    width: size,
    height: size,
    border: `${borderWidth}px solid ${gradient ? "transparent" : color}`,
    borderTop: `${borderWidth}px solid ${color}`,
    borderRadius: "50%",
    animation: `${animationType} ${speed}s linear infinite`,
    background: gradient ? `linear-gradient(${gradient})` : undefined,
  } as React.CSSProperties;

  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleSheet = document.styleSheets[0];

      const animationRuleExists = Array.from(styleSheet.cssRules).some(
        (rule) =>
          rule instanceof CSSKeyframesRule && rule.name === animationType
      );

      if (!animationRuleExists) {
        const keyframes =
          animationType === "spin"
            ? `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`
            : animationType === "bounce"
            ? `
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
          }`
            : `
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }`;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      }
    }
  }, [animationType]);

  if (!loading) return null;

  return (
    <div
      style={styles}
      className={className}
      aria-label="Loading"
      role="status"
    />
  );
};
