"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyAlign() {
    var ctx = vue_1.getCurrentInstance();
    var applyAlign = function () {
        var items = ctx === null || ctx === void 0 ? void 0 : ctx.props.items;
        var justify = ctx === null || ctx === void 0 ? void 0 : ctx.props.justify;
        return items + " " + justify;
    };
    return { applyAlign: applyAlign };
}
exports["default"] = useApplyAlign;
