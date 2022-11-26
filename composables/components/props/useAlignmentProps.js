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
function alignmentProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({ horizontal: 'left', vertical: 'top' }, props);
    return {
        horizontal: {
            type: String,
            "default": defaults.horizontal
        },
        vertical: {
            type: String,
            "default": defaults.vertical
        }
    };
}
exports.alignmentProps = alignmentProps;
