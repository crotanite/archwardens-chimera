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
var useContentProps_1 = require("../../composables/components/props/useContentProps");
var useDensityProps_1 = require("../../composables/components/props/useDensityProps");
var useDisabledProps_1 = require("../../composables/components/props/useDisabledProps");
var useFullWidthProps_1 = require("../../composables/components/props/useFullWidthProps");
var useHideRoundedProps_1 = require("../../composables/components/props/useHideRoundedProps");
var useHrefProps_1 = require("../../composables/components/props/useHrefProps");
var useLoadingProps_1 = require("../../composables/components/props/useLoadingProps");
var useThemeProps_1 = require("../../composables/components/props/useThemeProps");
exports.definedProps = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, useContentProps_1.contentProps()), useDensityProps_1.densityProps()), useDisabledProps_1.disabledProps()), useFullWidthProps_1.fullWidthProps()), useHideRoundedProps_1.hideRoundedProps()), useHrefProps_1.hrefProps()), useLoadingProps_1.loadingProps()), useThemeProps_1.themeProps());
