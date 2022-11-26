"use strict";
exports.__esModule = true;
var useTheme_1 = require("../../useTheme");
var useApplyDisabled_1 = require("./useApplyDisabled");
function useInputClasses(withHeight, additional, override) {
    if (withHeight === void 0) { withHeight = true; }
    if (additional === void 0) { additional = null; }
    if (override === void 0) { override = null; }
    var applyDisabled = useApplyDisabled_1["default"]().applyDisabled;
    var classes = "border text-sm rounded " + useTheme_1["default"]().padding.element.wide;
    classes += applyDisabled(" cursor-not-allowed " + useTheme_1["default"]().colors.background.system.inputDisabled + " " + useTheme_1["default"]().colors.border.system.inputDisabled, " " + useTheme_1["default"]().colors.background.system.input + " " + useTheme_1["default"]().colors.border.system.input, override);
    if (withHeight) {
        classes += ' h-[38px]';
    }
    if (additional !== null) {
        classes += " " + additional;
    }
    return classes;
}
exports["default"] = useInputClasses;
