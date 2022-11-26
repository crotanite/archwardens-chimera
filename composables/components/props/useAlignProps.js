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
function alignProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({ items: 'items-start', justify: 'justify-start' }, props);
    return {
        items: {
            type: String,
            "default": defaults.items
        },
        justify: {
            type: String,
            "default": defaults.justify
        }
    };
}
exports.alignProps = alignProps;
