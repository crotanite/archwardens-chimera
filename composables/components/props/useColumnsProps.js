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
function columnsProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({ columns: null }, props);
    return {
        columns: {
            type: [Boolean, String, Object],
            "default": defaults.columns
        }
    };
}
exports.columnsProps = columnsProps;
