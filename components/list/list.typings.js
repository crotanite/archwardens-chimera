"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var useHideBorderProps_1 = require("../../composables/components/props/useHideBorderProps");
var useHideHoverProps_1 = require("../../composables/components/props/useHideHoverProps");
exports.definedProps = __assign(__assign(__assign({}, useHideBorderProps_1.hideBorderProps()), useHideHoverProps_1.hideHoverProps()), { border: {
        type: String,
        "default": 'border-gray-200'
    }, hover: {
        type: String,
        "default": 'hover:bg-gray-200 dark:hover:bg-gray-700'
    }, padding: {
        type: String,
        "default": 'px-4 py-2'
    } });
