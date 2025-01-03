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

const Spinner: React.FC<SpinnerProps> = ({
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
        scaleCircle: `
        @keyframes scaleCircle {
          0% { transform: scale(0.95); }
          50% { transform: scale(1.05); }
          100% { transform: scale(0.95); }
        }
      `,
        cubeGrid: `
        @keyframes cubeGrid {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(0.5); }
          50% { transform: scale(1); }
          75% { transform: scale(0.5); }
        }
      `,
        threeDots: `
        @keyframes threeDots {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `,
        chasingDots: `
        @keyframes chasingDots {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.5); }
        }
      `,
        puff: `
        @keyframes puff {
          0% { transform: scale(1); }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0; }
        }
      `,
        wave: `
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `,
        pulsingDots: `
      @keyframes pulsingDots {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.5); }
      }
    `,
        doubleBounce: `
      @keyframes doubleBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(0.5); }
      }
    `,
        threeBounce: `
      @keyframes threeBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
    `,
        cube: `
      @keyframes cube {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
      }
    `,
        spiral: `
      @keyframes spiral {
        0% { transform: rotate(0deg) translateX(0); }
        100% { transform: rotate(360deg) translateX(20px); }
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
    case "scaleCircle":
      return (
        <div
          style={{ ...styles, animation: `scaleCircle ${speed}s infinite` }}
          className={className}
        />
      );
    case "cubeGrid":
      return (
        <div
          className={className}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4px",
            width: size,
            height: size,
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 3,
                height: size / 3,
                backgroundColor: color,
                animation: `cubeGrid ${speed}s infinite`,
              }}
            />
          ))}
        </div>
      );
    case "threeDots":
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
                animation: `threeDots ${speed}s infinite ${
                  index * (speed / 3)
                }s`,
              }}
            />
          ))}
        </div>
      );
    case "chasingDots":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 6,
                height: size / 6,
                borderRadius: "50%",
                backgroundColor: color,
                animation: `chasingDots ${speed}s infinite ${
                  index * (speed / 2)
                }s`,
              }}
            />
          ))}
        </div>
      );
    case "puff":
      return (
        <div
          style={{ ...styles, animation: `puff ${speed}s infinite` }}
          className={className}
        />
      );
    case "wave":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 10,
                height: size,
                backgroundColor: color,
                animation: `wave ${speed}s infinite`,
                animationDelay: `${index * (speed / 5)}s`,
              }}
            />
          ))}
        </div>
      );
    case "pulsingDots":
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
                animation: `pulsingDots ${speed}s infinite ${
                  index * (speed / 3)
                }s`,
              }}
            />
          ))}
        </div>
      );
    case "chasingDots":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 6,
                height: size / 6,
                borderRadius: "50%",
                backgroundColor: color,
                animation: `chasingDots ${speed}s infinite ${
                  index * (speed / 2)
                }s`,
              }}
            />
          ))}
        </div>
      );
    case "doubleBounce":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 6,
                height: size / 6,
                borderRadius: "50%",
                backgroundColor: color,
                animation: `doubleBounce ${speed}s infinite`,
                animationDelay: `${index * 0.5 * speed}s`,
              }}
            />
          ))}
        </div>
      );
    case "threeBounce":
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
                animation: `threeBounce ${speed}s infinite`,
                animationDelay: `${index * 0.5 * speed}s`,
              }}
            />
          ))}
        </div>
      );
    case "cube":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          <div
            style={{
              width: size / 6,
              height: size / 6,
              backgroundColor: color,
              animation: `cube ${speed}s infinite`,
            }}
          />
        </div>
      );
    case "spiral":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: size,
          }}
        >
          <div
            style={{
              width: size / 6,
              height: size / 6,
              borderRadius: "50%",
              backgroundColor: color,
              animation: `spiral ${speed}s infinite`,
            }}
          />
        </div>
      );
    case "wave":
      return (
        <div
          className={className}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: size,
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: size / 12,
                height: size / 4,
                backgroundColor: color,
                animation: `wave ${speed}s infinite`,
                animationDelay: `${index * (speed / 4)}s`,
              }}
            />
          ))}
        </div>
      );
    default:
      return <div style={styles} className={className} />;
  }
};

export default Spinner;
