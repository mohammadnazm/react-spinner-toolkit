import React, { useEffect } from "react";
export var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.color, color = _c === void 0 ? "#3498db" : _c;
    var styles = {
        width: size,
        height: size,
        border: "".concat(size / 10, "px solid ").concat(color),
        borderTop: "".concat(size / 10, "px solid transparent"),
        borderRadius: "50%",
        animation: "spin 1.5s linear infinite",
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