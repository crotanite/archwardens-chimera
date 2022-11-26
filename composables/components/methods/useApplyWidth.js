"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var useScreen_1 = require("../../useScreen");
function useApplyWidth() {
    var ctx = vue_1.getCurrentInstance();
    var applyWidth = function () {
        var widthState = ctx === null || ctx === void 0 ? void 0 : ctx.props.width;
        var maxWidthState = ctx === null || ctx === void 0 ? void 0 : ctx.props.maxWidth;
        var output = '';
        if (widthState === null) {
            //
        }
        else if (typeof widthState === 'object') {
            var getValueForScreen = useScreen_1.useScreen().getValueForScreen;
            var val = getValueForScreen(widthState);
            output += val;
        }
        else if (typeof widthState === 'string') {
            output += widthState;
        }
        if (maxWidthState !== null) {
            output += " " + maxWidthState;
        }
        return output;
    };
    return { applyWidth: applyWidth };
}
exports["default"] = useApplyWidth;
