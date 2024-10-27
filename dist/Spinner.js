import React, { useEffect } from "react";
export var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.color, color = _c === void 0 ? "#007aff" : _c, _d = _a.borderWidth, borderWidth = _d === void 0 ? 4 : _d, _e = _a.speed, speed = _e === void 0 ? 1.5 : _e, _f = _a.animationType, animationType = _f === void 0 ? "spin" : _f, _g = _a.loading, loading = _g === void 0 ? true : _g, gradient = _a.gradient, className = _a.className;
    var styles = {
        width: size,
        height: size,
        border: "".concat(borderWidth, "px solid ").concat(gradient ? "linear-gradient(".concat(gradient, ")") : color),
        borderTop: "".concat(borderWidth, "px solid transparent"),
        borderRadius: "50%",
        animation: "".concat(animationType === "spin" ? "spin" : "bounce", " ").concat(speed, "s linear infinite"),
        display: loading ? "block" : "none",
    };
    useEffect(function () {
        if (typeof document !== "undefined") {
            var styleSheet = document.styleSheets[0];
            var spinRuleExists = Array.from(styleSheet.cssRules).some(function (rule) { return rule instanceof CSSKeyframesRule && rule.name === "spin"; });
            if (!spinRuleExists) {
                styleSheet.insertRule("\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        ", styleSheet.cssRules.length);
            }
            var bounceRuleExists = Array.from(styleSheet.cssRules).some(function (rule) { return rule instanceof CSSKeyframesRule && rule.name === "bounce"; });
            if (!bounceRuleExists) {
                styleSheet.insertRule("\n          @keyframes bounce {\n            0%, 100% { transform: scale(1); }\n            50% { transform: scale(1.1); }\n          }\n        ", styleSheet.cssRules.length);
            }
        }
    }, []);
    return React.createElement("div", { style: styles, className: className });
};
//# sourceMappingURL=Spinner.js.map