"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyGap() {
    var ctx = vue_1.getCurrentInstance();
    var applyGap = function () {
        var gap = ctx === null || ctx === void 0 ? void 0 : ctx.props.gap;
        return gap === null ? '' : "" + gap;
    };
    return { applyGap: applyGap };
}
exports["default"] = useApplyGap;
