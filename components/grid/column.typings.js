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
var useWidthProps_1 = require("../../composables/components/props/useWidthProps");
function gridColumnProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({ grow: null, shrink: null }, props);
    return {
        grow: {
            type: Boolean,
            "default": defaults.grow
        },
        shrink: {
            type: Boolean,
            "default": defaults.shrink
        }
    };
}
exports.gridColumnProps = gridColumnProps;
exports.definedProps = __assign(__assign({}, useWidthProps_1.widthProps({ item: 'items-start', justify: 'justify-start' })), gridColumnProps());
