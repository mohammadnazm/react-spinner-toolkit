import React from 'react';

var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.color, color = _c === void 0 ? "#3498db" : _c;
    return (React.createElement("div", { className: "spinner", style: {
            width: size,
            height: size,
            border: "".concat(size / 10, "px solid ").concat(color),
            borderTop: "".concat(size / 10, "px solid transparent"),
        } }));
};

var Skeleton = function (_a) {
    var _b = _a.width, width = _b === void 0 ? "100%" : _b, _c = _a.height, height = _c === void 0 ? "20px" : _c, _d = _a.color, color = _d === void 0 ? "#e0e0e0" : _d;
    return (React.createElement("div", { className: "skeleton", style: {
            width: width,
            height: height,
            backgroundColor: color,
        } }));
};

export { Skeleton, Spinner };
