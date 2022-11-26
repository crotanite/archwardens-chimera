"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useApplyToggle(defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a, _b;
    var ctx = vue_1.getCurrentInstance();
    var show = vue_1.ref(false);
    var disableToggle = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.props.disableToggle) !== null && _a !== void 0 ? _a : false;
    var state = (_b = ctx === null || ctx === void 0 ? void 0 : ctx.props.isOpen) !== null && _b !== void 0 ? _b : defaultState;
    var toggle = function () {
        if (!disableToggle) {
            show.value = !show.value;
        }
    };
    var close = function () {
        if (!disableToggle) {
            show.value = false;
        }
    };
    var open = function () {
        if (!disableToggle) {
            show.value = true;
        }
    };
    vue_1.onMounted(function () {
        show.value = state;
    });
    return { show: show, toggle: toggle, close: close, open: open };
}
exports["default"] = useApplyToggle;
