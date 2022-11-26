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
var useComponentProps_1 = require("../../composables/components/props/useComponentProps");
var useDensityProps_1 = require("../../composables/components/props/useDensityProps");
var useElevationProps_1 = require("../../composables/components/props/useElevationProps");
var useHideBorderProps_1 = require("../../composables/components/props/useHideBorderProps");
var useHideRoundedProps_1 = require("../../composables/components/props/useHideRoundedProps");
var useThemeProps_1 = require("../../composables/components/props/useThemeProps");
function paperProps(props) {
    if (props === void 0) { props = {}; }
    var defaults = __assign({}, props);
    return {
        lower: {
            type: Boolean,
            "default": false
        }
    };
}
exports.paperProps = paperProps;
exports.definedProps = __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, useComponentProps_1.componentProps({ component: 'div' })), useDensityProps_1.densityProps({ dense: false })), useElevationProps_1.elevationProps({ elevation: 0 })), useHideBorderProps_1.hideBorderProps({ hideBorder: false })), useHideRoundedProps_1.hideRoundedProps({ hideRounded: false })), useThemeProps_1.themeProps({ theme: 'system' })), paperProps());
