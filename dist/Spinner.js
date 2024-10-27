import React, { useEffect } from "react";
export var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, // Default size
    _c = _a.color, // Default size
    color = _c === void 0 ? "#3498db" : _c, // Default color
    _d = _a.speed, // Default color
    speed = _d === void 0 ? 1.5 : _d, // Default speed in seconds
    _e = _a.borderWidth, // Default speed in seconds
    borderWidth = _e === void 0 ? 5 : _e;
    var styles = {
        width: size,
        height: size,
        border: "".concat(borderWidth, "px solid ").concat(color), // Border width and color
        borderTop: "".concat(borderWidth, "px solid transparent"),
        borderRadius: "50%",
        animation: "spin ".concat(speed, "s linear infinite"), // Animation speed
    };
    useEffect(function () {
        if (typeof document !== "undefined") {
            var styleSheet = document.styleSheets[0];
            // Check if the keyframes rule already exists
            var spinRuleExists = Array.from(styleSheet.cssRules).some(function (rule) { return rule instanceof CSSKeyframesRule && rule.name === "spin"; });
            // Add the keyframes rule if it doesn't exist
            if (!spinRuleExists) {
                styleSheet.insertRule("\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        ", styleSheet.cssRules.length);
            }
        }
    }, []);
    return React.createElement("div", { style: styles });
};
//# sourceMappingURL=Spinner.js.map