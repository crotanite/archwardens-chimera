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
function loadingProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({ loading: false }, props);
    return {
        loading: {
            type: Boolean,
            "default": defaults.loading
        }
    };
}
exports.loadingProps = loadingProps;
