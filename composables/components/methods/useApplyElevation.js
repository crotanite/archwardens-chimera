"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyElevation() {
    var ctx = vue_1.getCurrentInstance();
    var applyElevation = function () {
        var elevation = ctx === null || ctx === void 0 ? void 0 : ctx.props.elevation;
        switch (elevation) {
            case 0: return '';
            case 1: return 'shadow';
            case 2: return 'shadow-md';
            case 3: return 'shadow-lg';
            case 4: return 'shadow-xl';
            case 5: return 'shadow-2xl';
            default: return '';
        }
    };
    return { applyElevation: applyElevation };
}
exports["default"] = useApplyElevation;
