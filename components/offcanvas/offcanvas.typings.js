"use strict";
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
exports.__esModule = true;
function offCanvasProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({ left: null, right: null, showLeftAtScreen: [], showRightAtScreen: [] }, props);
    return {
        left: {
            type: Number,
            "default": defaults.left
        },
        right: {
            type: Number,
            "default": defaults.right
        },
        showLeftAtScreen: {
            type: Array,
            "default": defaults.showLeftAtScreen
        },
        showRightAtScreen: {
            type: Array,
            "default": defaults.showRightAtScreen
        }
    };
}
exports.offCanvasProps = offCanvasProps;
exports.definedProps = __assign({}, offCanvasProps());
