"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyFullWidth() {
    var ctx = vue_1.getCurrentInstance();
    var applyFullWidth = function () {
        var state = ctx === null || ctx === void 0 ? void 0 : ctx.props.fullWidth;
        return state ? 'w-full' : '';
    };
    return { applyFullWidth: applyFullWidth };
}
exports["default"] = useApplyFullWidth;
