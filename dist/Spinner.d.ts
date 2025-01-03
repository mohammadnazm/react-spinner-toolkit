import React from "react";
interface SpinnerProps {
    size?: number;
    color?: string;
    borderWidth?: number;
    speed?: number;
    animationType?: "spin" | "bounce" | "pulse" | "fade" | "rotateSquare" | "bounceBalls" | "ring" | "scaleLoader" | "dotLoader";
    loading?: boolean;
    gradient?: string;
    className?: string;
    shape?: string;
}
declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
//# sourceMappingURL=Spinner.d.ts.map