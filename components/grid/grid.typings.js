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
var useAlignProps_1 = require("../../composables/components/props/useAlignProps");
var useColumnsProps_1 = require("../../composables/components/props/useColumnsProps");
var useGapProps_1 = require("../../composables/components/props/useGapProps");
exports.definedProps = __assign(__assign(__assign({}, useAlignProps_1.alignProps({ items: 'items-start', justify: 'justify-start' })), useColumnsProps_1.columnsProps({ columns: 'grid-cols-1' })), useGapProps_1.gapProps({ gap: 'gap-3' }));
