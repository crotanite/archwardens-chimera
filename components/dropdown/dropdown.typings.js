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
var useAlignmentProps_1 = require("../../composables/components/props/useAlignmentProps");
var useHeightProps_1 = require("../../composables/components/props/useHeightProps");
var useHideArrowProps_1 = require("../../composables/components/props/useHideArrowProps");
var useHideBorderProps_1 = require("../../composables/components/props/useHideBorderProps");
var useToggleProps_1 = require("../../composables/components/props/useToggleProps");
var useWidthProps_1 = require("../../composables/components/props/useWidthProps");
exports.definedProps = __assign(__assign(__assign(__assign(__assign(__assign({}, useAlignmentProps_1.alignmentProps()), useHeightProps_1.heightProps()), useHideBorderProps_1.hideBorderProps()), useHideArrowProps_1.hideArrowProps()), useToggleProps_1.toggleProps()), useWidthProps_1.widthProps());
