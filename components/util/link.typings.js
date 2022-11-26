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
var useColorProps_1 = require("../../composables/components/props/useColorProps");
var useContentProps_1 = require("../../composables/components/props/useContentProps");
var useHrefProps_1 = require("../../composables/components/props/useHrefProps");
exports.definedProps = __assign(__assign(__assign({}, useColorProps_1.colorProps({ color: 'text-accent-500 dark:text-accent-500' })), useContentProps_1.contentProps()), useHrefProps_1.hrefProps());
