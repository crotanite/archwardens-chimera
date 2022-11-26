"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyBorder(defaultBorder) {
    if (defaultBorder === void 0) { defaultBorder = true; }
    var ctx = vue_1.getCurrentInstance();
    var applyBorder = function (border, override) {
        if (border === void 0) { border = 'border'; }
        if (override === void 0) { override = null; }
        var _a;
        var state = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.props.showBorder) !== null && _a !== void 0 ? _a : defaultBorder;
        if (override !== null) {
            state = override;
        }
        return '';
        // return state ? `${border} ${useTheme().colors.border.system?.upper}` : ''
    };
    return { applyBorder: applyBorder };
}
exports["default"] = useApplyBorder;
