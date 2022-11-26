"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var useScreen_1 = require("../../../composables/useScreen");
function useApplyHeight() {
    var ctx = vue_1.getCurrentInstance();
    var applyHeight = function () {
        var heightState = ctx === null || ctx === void 0 ? void 0 : ctx.props.height;
        var maxHeightState = ctx === null || ctx === void 0 ? void 0 : ctx.props.maxHeight;
        var output = '';
        if (heightState === null) {
            //
        }
        else if (typeof heightState === 'object') {
            var getValueForScreen = useScreen_1.useScreen().getValueForScreen;
            var val = getValueForScreen(heightState);
            output += val;
        }
        else if (typeof heightState === 'string') {
            output += heightState;
        }
        if (maxHeightState !== null) {
            output += " " + maxHeightState;
        }
        return output;
    };
    return { applyHeight: applyHeight };
}
exports["default"] = useApplyHeight;
