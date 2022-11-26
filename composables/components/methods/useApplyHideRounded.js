"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyHideRounded() {
    var ctx = vue_1.getCurrentInstance();
    var applyHideRounded = function (override) {
        if (override === void 0) { override = null; }
        var state = ctx === null || ctx === void 0 ? void 0 : ctx.props.hideRounded;
        if (override !== null) {
            state = override;
        }
        return state ? '' : 'rounded';
    };
    return { applyHideRounded: applyHideRounded };
}
exports["default"] = useApplyHideRounded;
