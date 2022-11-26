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
var useHeightProps_1 = require("../../composables/components/props/useHeightProps");
var useSrcProps_1 = require("../../composables/components/props/useSrcProps");
var useWidthProps_1 = require("../../composables/components/props/useWidthProps");
exports.definedProps = __assign(__assign(__assign({}, useHeightProps_1.heightProps()), useSrcProps_1.srcProps()), useWidthProps_1.widthProps());
