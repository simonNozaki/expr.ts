"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catch = exports.Try = void 0;
var Try = function (f) {
    var catches = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        catches[_i - 1] = arguments[_i];
    }
    try {
        return f();
    }
    catch (e) {
        for (var i = 0; i < catches.length; i++) {
            var expr = catches[i];
            if (e instanceof expr.e) {
                return expr.f(e);
            }
        }
        throw e;
    }
};
exports.Try = Try;
var Catch = function (e, f) { return ({
    e: e,
    f: f,
}); };
exports.Catch = Catch;
//# sourceMappingURL=try.js.map