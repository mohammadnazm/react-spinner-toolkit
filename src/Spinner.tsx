import React, { useEffect } from "react";

interface SpinnerProps {
  size?: number; // Size of the spinner
  color?: string; // Color of the spinner
  speed?: number; // Animation speed in seconds
  borderWidth?: number; // Width of the spinner's border
  loading?: boolean; // Indicates if the spinner should be visible
  label?: string; // Accessibility label for screen readers
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 50, // Default size
  color = "#3498db", // Default color
  speed = 1.5, // Default speed in seconds
  borderWidth = 5, // Default border width
  loading = true, // Default loading state
  label = "Loading...", // Default label for accessibility
}) => {
  // Style for the spinner
  const styles: React.CSSProperties = {
    width: size,
    height: size,
    border: `${borderWidth}px solid ${color}`, // Border width and color
    borderTop: `${borderWidth}px solid transparent`,
    borderRadius: "50%",
    animation: `spin ${speed}s linear infinite`, // Animation speed
    display: loading ? "block" : "none", // Show or hide based on loading state
  };

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

  return (
    <div
      style={styles}
      aria-label={label} // Accessibility label
      role="status" // Role for assistive technologies
    />
  );
};
