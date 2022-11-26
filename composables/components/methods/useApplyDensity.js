"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var useTheme_1 = require("../../useTheme");
function useApplyDensity() {
    var ctx = vue_1.getCurrentInstance();
    var applyDensity = function (group, override) {
        if (group === void 0) { group = 'content'; }
        if (override === void 0) { override = null; }
        var state = ctx === null || ctx === void 0 ? void 0 : ctx.props.dense;
        if (override !== null) {
            state = override;
        }
        if (state === null) {
            return '';
        }
        return state ? useTheme_1["default"]().padding[group].dense : useTheme_1["default"]().padding[group].wide;
    };
    return { applyDensity: applyDensity };
}
exports["default"] = useApplyDensity;
