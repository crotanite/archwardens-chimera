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
var vue_1 = require("vue");
var useScreen_1 = require("../../useScreen");
function useApplyColumns() {
    var ctx = vue_1.getCurrentInstance();
    var applyColumns = function (grid) {
        if (grid === void 0) { grid = true; }
        var columns = ctx === null || ctx === void 0 ? void 0 : ctx.props.columns;
        var getValueForScreen = useScreen_1.useScreen().getValueForScreen;
        // grid
        if (grid) {
            if (columns === null) {
                return '';
            }
            else if (typeof columns === 'string') {
                return columns;
            }
            else {
                var defaultColumns = { xs: 'grid-cols-1' };
                var currentColumns = __assign(__assign({}, defaultColumns), columns);
                var output = getValueForScreen(currentColumns);
                return output;
            }
            // flex
        }
        else {
            if (columns === null) {
                return 'flex-row';
            }
            var defaultColumns = { xs: true, md: false };
            var currentColumns = __assign(__assign({}, defaultColumns), columns);
            var output = getValueForScreen(currentColumns);
            return output === 'true' ? 'flex-col' : 'flex-row';
        }
        // if (typeof columns === 'object') {
        //     const { getValueForScreen } = useScreen()
        //     if (grid) {
        //         const val = Number(getValueForScreen(columns as Screens<unknown>))
        //         return val === 0 ? 'grid-cols-none' : `grid-cols-${val}`
        //     } else {
        //         const defaultColumns = { xs: true, md: false }
        //         const currentColumns = { ...defaultColumns, ...columns }
        //         const val = getValueForScreen(currentColumns as Screens<unknown>)
        //         return val === 'true' ? 'flex-col' : 'flex-row'
        //     }
        // } else {
        //     return columns === 0 ? 'grid-cols-none' : `grid-cols-${columns}`
        // }
    };
    return { applyColumns: applyColumns };
}
exports["default"] = useApplyColumns;
[
    ['grid-cols-none', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-1', 'grid-cols-12']
];
