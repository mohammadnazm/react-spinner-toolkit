import React, { useEffect } from "react";
export var Skeleton = function (_a) {
    var _b = _a.width, width = _b === void 0 ? "100%" : _b, _c = _a.height, height = _c === void 0 ? "20px" : _c, _d = _a.color, color = _d === void 0 ? "#e0e0e0" : _d;
    var styles = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: "4px",
        animation: "pulse 1.5s ease-in-out infinite",
    };
    useEffect(function () {
        if (typeof document !== "undefined") {
            var styleSheet = document.styleSheets[0];
            // Check if the keyframes rule already exists
            var pulseRuleExists = Array.from(styleSheet.cssRules).some(function (rule) { return rule instanceof CSSKeyframesRule && rule.name === "pulse"; });
            // Add the keyframes rule if it doesn't exist
            if (!pulseRuleExists) {
                styleSheet.insertRule("\n          @keyframes pulse {\n            0% { opacity: 1; }\n            50% { opacity: 0.5; }\n            100% { opacity: 1; }\n          }\n        ", styleSheet.cssRules.length);
            }
        }
    }, []);
    return React.createElement("div", { style: styles });
};
//# sourceMappingURL=Skeleton.js.map