var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect } from "react";
export var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.color, color = _c === void 0 ? "#007aff" : _c, _d = _a.borderWidth, borderWidth = _d === void 0 ? 4 : _d, _e = _a.speed, speed = _e === void 0 ? 1.5 : _e, _f = _a.animationType, animationType = _f === void 0 ? "spin" : _f, gradient = _a.gradient, _g = _a.loading, loading = _g === void 0 ? true : _g, className = _a.className, _h = _a.shape, shape = _h === void 0 ? "circle" : _h;
    var styles = {
        width: size,
        height: size,
        border: "".concat(borderWidth, "px solid ").concat(color),
        borderTop: "".concat(borderWidth, "px solid transparent"),
        borderRadius: shape === "circle" ? "50%" : shape === "square" ? "0%" : "50%",
        animation: loading ? "".concat(animationType, " ").concat(speed, "s linear infinite") : "none",
        background: gradient ? "linear-gradient(".concat(gradient, ")") : "transparent",
    };
    useEffect(function () {
        if (typeof document !== "undefined") {
            var styleSheet_1 = document.styleSheets[0];
            var keyframeAnimations = {
                spin: "\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        ",
                bounce: "\n          @keyframes bounce {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(-10px); }\n          }\n        ",
                pulse: "\n          @keyframes pulse {\n            0%, 100% { transform: scale(1); }\n            50% { transform: scale(1.1); }\n          }\n        ",
                fade: "\n          @keyframes fade {\n            0%, 100% { opacity: 0; }\n            50% { opacity: 1; }\n          }\n        ",
                rotateSquare: "\n          @keyframes rotateSquare {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        ",
                bounceBalls: "\n          @keyframes bounceBalls {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(-10px); }\n          }\n        ",
                ring: "\n          @keyframes ring {\n            0% { transform: scale(0.95); }\n            50% { transform: scale(1.05); }\n            100% { transform: scale(0.95); }\n          }\n        ",
                scaleLoader: "\n          @keyframes scaleLoader {\n            0%, 100% { transform: scale(1); }\n            50% { transform: scale(1.5); }\n          }\n        ",
                dotLoader: "\n          @keyframes dotLoader {\n            0%, 20% { transform: scale(1); }\n            50% { transform: scale(1.5); }\n            100% { transform: scale(1); }\n          }\n        ",
            };
            Object.entries(keyframeAnimations).forEach(function (_a) {
                var name = _a[0], animation = _a[1];
                var ruleExists = Array.from(styleSheet_1.cssRules).some(function (rule) { return rule instanceof CSSKeyframesRule && rule.name === name; });
                if (!ruleExists) {
                    styleSheet_1.insertRule(animation, styleSheet_1.cssRules.length);
                }
            });
        }
    }, []);
    if (!loading) {
        return null; // Return nothing if not loading
    }
    switch (shape) {
        case "pulsing":
            return (React.createElement("div", { style: __assign(__assign({}, styles), { animation: "pulse ".concat(speed, "s infinite"), backgroundColor: color, border: "none" }), className: className }));
        case "fading":
            return (React.createElement("div", { className: className, style: {
                    display: "flex",
                    justifyContent: "space-around",
                    width: size,
                } }, Array.from({ length: 3 }).map(function (_, index) { return (React.createElement("div", { key: index, style: {
                    width: size / 6,
                    height: size / 6,
                    borderRadius: "50%",
                    backgroundColor: color,
                    opacity: 0,
                    animation: "fade ".concat(speed, "s infinite ").concat(index * (speed / 3), "s"),
                } })); })));
        case "rotatingSquare":
            var squareSize = size / 2; // Size of the square
            return (React.createElement("div", { style: {
                    width: squareSize,
                    height: squareSize,
                    backgroundColor: color,
                    borderRadius: "5%", // Slightly rounded corners for a nicer look
                    animation: "rotateSquare ".concat(speed, "s linear infinite"),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformOrigin: "50% 50%", // Center the rotation
                }, className: className },
                React.createElement("div", { style: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: color,
                        opacity: 0.6, // Slight transparency for a layered effect
                        borderRadius: "5%",
                    } })));
        case "bouncingBalls":
            return (React.createElement("div", { className: className, style: {
                    display: "flex",
                    justifyContent: "space-around",
                    width: size,
                } }, Array.from({ length: 3 }).map(function (_, index) { return (React.createElement("div", { key: index, style: {
                    width: size / 6,
                    height: size / 6,
                    borderRadius: "50%",
                    backgroundColor: color,
                    animation: "bounceBalls ".concat(speed, "s infinite ").concat(index * (speed / 3), "s"),
                } })); })));
        case "ring":
            return (React.createElement("div", { style: __assign(__assign({}, styles), { border: "none", animation: "ring ".concat(speed, "s infinite"), backgroundColor: "transparent", position: "relative" }), className: className },
                React.createElement("div", { style: {
                        width: "100%",
                        height: "100%",
                        border: "".concat(borderWidth, "px solid ").concat(color),
                        borderRadius: "50%",
                        animation: "ring ".concat(speed, "s infinite"),
                        position: "absolute",
                    } })));
        case "scaleLoader":
            var barWidth_1 = size / 8; // Width of each bar
            var barHeight_1 = size / 2; // Height of each bar
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-end",
                    height: size,
                    width: size,
                    position: "relative",
                }, className: className }, Array.from({ length: 3 }).map(function (_, index) { return (React.createElement("div", { key: index, style: {
                    width: barWidth_1,
                    height: barHeight_1,
                    backgroundColor: color,
                    borderRadius: "5px", // Rounded corners for a nicer look
                    animation: "scaleLoader ".concat(speed, "s infinite"),
                    animationDelay: "".concat(index * (speed / 3), "s"),
                } })); })));
        case "dotLoader":
            // Refined DotLoader design with better sizes and spacing
            var dotSize_1 = size / 6; // Size of each dot
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: size,
                    height: size,
                }, className: className }, Array.from({ length: 3 }).map(function (_, index) { return (React.createElement("div", { key: index, style: {
                    width: dotSize_1,
                    height: dotSize_1,
                    borderRadius: "50%",
                    backgroundColor: color,
                    animation: "dotLoader ".concat(speed, "s infinite"),
                    animationDelay: "".concat(index * (speed / 3), "s"),
                } })); })));
        default:
            return React.createElement("div", { style: styles, className: className });
    }
};
//# sourceMappingURL=Spinner.js.map