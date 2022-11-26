"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyLoading() {
    var ctx = vue_1.getCurrentInstance();
    var applyLoading = function (loadingClass, defaultClass) {
        if (loadingClass === void 0) { loadingClass = 'cursor-wait opacity-50'; }
        if (defaultClass === void 0) { defaultClass = ''; }
        var state = ctx === null || ctx === void 0 ? void 0 : ctx.props.loading;
        return state ? loadingClass : defaultClass;
    };
    return { applyLoading: applyLoading };
}
exports["default"] = useApplyLoading;
