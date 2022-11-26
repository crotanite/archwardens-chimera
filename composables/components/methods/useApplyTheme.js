"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var useTheme_1 = require("../../useTheme");
function useApplyTheme() {
    var ctx = vue_1.getCurrentInstance();
    var applyTheme = function (withBorder) {
        if (withBorder === void 0) { withBorder = false; }
        var _a;
        var state = ctx === null || ctx === void 0 ? void 0 : ctx.props.theme;
        var lower = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.props.lower) !== null && _a !== void 0 ? _a : false;
        var output = '';
        if (state === 'system') {
            output += lower ? String(useTheme_1["default"]().colors.background.system.disabled) : String(useTheme_1["default"]().colors.background.system.element);
            if (withBorder) {
                output += lower ? String(useTheme_1["default"]().colors.border.system.disabled) : String(useTheme_1["default"]().colors.border.system.element);
            }
        }
        else {
            output += String(useTheme_1["default"]().colors.background[state]);
            if (withBorder) {
                output += String(useTheme_1["default"]().colors.border[state]);
            }
        }
        return output;
    };
    return { applyTheme: applyTheme };
}
exports["default"] = useApplyTheme;
