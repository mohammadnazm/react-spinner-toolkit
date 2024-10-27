import React, { useEffect } from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "#3498db",
}) => {
  const styles = {
    width: size,
    height: size,
    border: `${size / 10}px solid ${color}`,
    borderTop: `${size / 10}px solid transparent`,
    borderRadius: "50%",
    animation: "spin 1.5s linear infinite",
  } as React.CSSProperties;

  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleSheet = document.styleSheets[0];

      // Check if the keyframes rule already exists
      const spinRuleExists = Array.from(styleSheet.cssRules).some(
        (rule) => rule instanceof CSSKeyframesRule && rule.name === "spin"
      );

      // Add the keyframes rule if it doesn't exist
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
    }
  }, []);

  return <div style={styles} />;
};
