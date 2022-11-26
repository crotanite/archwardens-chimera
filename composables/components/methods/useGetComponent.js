"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
function useGetComponent() {
    var ctx = vue_1.getCurrentInstance();
    var getComponent = function () {
        var component = ctx === null || ctx === void 0 ? void 0 : ctx.props.component;
        if (typeof component === 'string') {
            return component;
        }
        else if (typeof component === 'object') {
            return component;
        }
    };
    return { getComponent: getComponent };
}
exports["default"] = useGetComponent;
