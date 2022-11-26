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
var useDisabledProps_1 = require("../../composables/components/props/useDisabledProps");
var useModelValueProps_1 = require("../../composables/components/props/useModelValueProps");
exports.definedProps = __assign(__assign({}, useDisabledProps_1.disabledProps()), useModelValueProps_1.modelValueProps({ modelValue: [] }));
