"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recover = exports.doOnTry = void 0;
var doOnTry = function (f) {
    var catches = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        catches[_i - 1] = arguments[_i];
    }
    try {
        return f();
    }
    catch (e) {
        if (!(e instanceof Error)) {
            throw e;
        }
        return catches
            .find(function (c) { return c.e.name === e.name; })
            .f(e);
    }
};
exports.doOnTry = doOnTry;
var recover = function (e, f) {
    return {
        e: e,
        f: f,
    };
};
exports.recover = recover;
//# sourceMappingURL=try.js.map