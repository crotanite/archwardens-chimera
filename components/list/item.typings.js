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
var useHrefProps_1 = require("../../composables/components/props/useHrefProps");
var useHideBorderProps_1 = require("../../composables/components/props/useHideBorderProps");
var useHideHoverProps_1 = require("../../composables/components/props/useHideHoverProps");
exports.definedProps = __assign(__assign(__assign({}, useHrefProps_1.hrefProps()), useHideBorderProps_1.hideBorderProps()), useHideHoverProps_1.hideHoverProps());
