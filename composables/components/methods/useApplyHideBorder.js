"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyHideBorder() {
    var ctx = vue_1.getCurrentInstance();
    var applyHideBorder = function (override) {
        if (override === void 0) { override = null; }
        var state = ctx === null || ctx === void 0 ? void 0 : ctx.props.hideBorder;
        if (override !== null) {
            state = override;
        }
        return state ? '' : 'border';
    };
    return { applyHideBorder: applyHideBorder };
}
exports["default"] = useApplyHideBorder;
