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
var useElevationProps_1 = require("../../composables/components/props/useElevationProps");
var useThemeProps_1 = require("../../composables/components/props/useThemeProps");
exports.definedProps = __assign(__assign(__assign(__assign({}, useContentProps_1.contentProps()), useDensityProps_1.densityProps()), useElevationProps_1.elevationProps()), useThemeProps_1.themeProps());
