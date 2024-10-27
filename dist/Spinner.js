import React, { useEffect } from "react";
export var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.color, color = _c === void 0 ? "#3498db" : _c, _d = _a.borderWidth, borderWidth = _d === void 0 ? 4 : _d, _e = _a.speed, speed = _e === void 0 ? 1.5 : _e, _f = _a.animationType, animationType = _f === void 0 ? "spin" : _f, gradient = _a.gradient, _g = _a.loading, loading = _g === void 0 ? true : _g, className = _a.className;
    var styles = {
        width: size,
        height: size,
        border: "".concat(borderWidth, "px solid ").concat(color),
        borderTop: "".concat(borderWidth, "px solid transparent"),
        borderRadius: "50%",
        animation: loading ? "".concat(animationType, " ").concat(speed, "s linear infinite") : "none",
        background: gradient ? "linear-gradient(".concat(gradient, ")") : "transparent",
    };
    useEffect(function () {
        if (typeof document !== "undefined") {
            var styleSheet = document.styleSheets[0];
            var spinExists = Array.from(styleSheet.cssRules).some(function (rule) { return rule instanceof CSSKeyframesRule && rule.name === "spin"; });
            var bounceExists = Array.from(styleSheet.cssRules).some(function (rule) { return rule instanceof CSSKeyframesRule && rule.name === "bounce"; });
            if (!spinExists) {
                styleSheet.insertRule("\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        ", styleSheet.cssRules.length);
            }
            if (!bounceExists) {
                styleSheet.insertRule("\n          @keyframes bounce {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(-10px); }\n          }\n        ", styleSheet.cssRules.length);
            }
        }
    }, []);
    return React.createElement("div", { style: styles, className: className });
};
//# sourceMappingURL=Spinner.js.map