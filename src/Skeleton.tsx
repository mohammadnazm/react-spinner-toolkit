import React, { useEffect } from "react";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  color = "#e0e0e0",
}) => {
  const styles = {
    width,
    height,
    backgroundColor: color,
    borderRadius: "4px",
    animation: "pulse 1.5s ease-in-out infinite",
  } as React.CSSProperties;

  useEffect(() => {
    if (typeof document !== "undefined") {
      const styleSheet = document.styleSheets[0];

      // Check if the keyframes rule already exists
      const pulseRuleExists = Array.from(styleSheet.cssRules).some(
        (rule) => rule instanceof CSSKeyframesRule && rule.name === "pulse"
      );

      // Add the keyframes rule if it doesn't exist
      if (!pulseRuleExists) {
        styleSheet.insertRule(
          `
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `,
          styleSheet.cssRules.length
        );
      }
    }
  }, []);

  return <div style={styles} />;
};
