import React, { useEffect } from "react";
export var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.color, color = _c === void 0 ? "#3498db" : _c, _d = _a.borderWidth, borderWidth = _d === void 0 ? 5 : _d, _e = _a.speed, speed = _e === void 0 ? 1.5 : _e, _f = _a.animationType, animationType = _f === void 0 ? "spin" : _f, gradient = _a.gradient, className = _a.className, _g = _a.loading, loading = _g === void 0 ? true : _g;
    var styles = {
        width: size,
        height: size,
        border: "".concat(borderWidth, "px solid ").concat(gradient ? "transparent" : color),
        borderTop: "".concat(borderWidth, "px solid ").concat(color),
        borderRadius: "50%",
        animation: "".concat(animationType, " ").concat(speed, "s linear infinite"),
        background: gradient ? "linear-gradient(".concat(gradient, ")") : undefined,
    };
    useEffect(function () {
        if (typeof document !== "undefined") {
            var styleSheet = document.styleSheets[0];
            var animationRuleExists = Array.from(styleSheet.cssRules).some(function (rule) {
                return rule instanceof CSSKeyframesRule && rule.name === animationType;
            });
            if (!animationRuleExists) {
                var keyframes = animationType === "spin"
                    ? "\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }"
                    : animationType === "bounce"
                        ? "\n          @keyframes bounce {\n            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }\n            40% { transform: translateY(-30px); }\n            60% { transform: translateY(-15px); }\n          }"
                        : "\n          @keyframes pulse {\n            0%, 100% { transform: scale(1); }\n            50% { transform: scale(1.05); }\n          }";
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
            }
        }
    }, [animationType]);
    if (!loading)
        return null;
    return (React.createElement("div", { style: styles, className: className, "aria-label": "Loading", role: "status" }));
};
//# sourceMappingURL=Spinner.js.map