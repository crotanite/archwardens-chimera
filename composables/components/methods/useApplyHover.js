"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyHover(defaultHover) {
    if (defaultHover === void 0) { defaultHover = true; }
    var ctx = vue_1.getCurrentInstance();
    var applyHover = function (hover, override) {
        if (hover === void 0) { hover = ''; }
        if (override === void 0) { override = null; }
        var _a;
        var state = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.props.hideHover) !== null && _a !== void 0 ? _a : false;
        if (override !== null) {
            state = override;
        }
        return state ? hover : '';
    };
    return { applyHover: applyHover };
}
exports["default"] = useApplyHover;
