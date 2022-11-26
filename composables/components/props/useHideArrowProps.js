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
function hideArrowProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({}, props);
    return {
        hideArrow: {
            type: Boolean,
            "default": false
        }
    };
}
exports.hideArrowProps = hideArrowProps;
