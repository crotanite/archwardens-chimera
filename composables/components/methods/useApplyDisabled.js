"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyDisabled() {
    var ctx = vue_1.getCurrentInstance();
    var applyDisabled = function (disabledClass, defaultClass, override) {
        if (disabledClass === void 0) { disabledClass = 'bg-gray-400 cursor-not-allowed text-white'; }
        if (defaultClass === void 0) { defaultClass = ''; }
        if (override === void 0) { override = null; }
        var state = ctx === null || ctx === void 0 ? void 0 : ctx.props.disabled;
        if (override !== null) {
            state = override;
        }
        return state ? disabledClass : defaultClass;
    };
    return { applyDisabled: applyDisabled };
}
exports["default"] = useApplyDisabled;
