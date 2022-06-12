"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
var If = function (condition, block) {
    return new Evaluator(condition, block);
};
exports.If = If;
var Evaluator = (function () {
    function Evaluator(condition, block) {
        this.condtionFunctions = [];
        this.condtionFunctions.push([condition, block]);
    }
    Evaluator.prototype.elseIf = function (condition, block) {
        this.condtionFunctions.push([condition, block]);
        return this;
    };
    Evaluator.prototype.else = function (alternative) {
        this.condtionFunctions.push([true, alternative]);
        for (var _i = 0, _a = this.condtionFunctions; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair[0]) {
                return pair[1]();
            }
        }
        throw new Error('All conditions was not matched');
    };
    return Evaluator;
}());
//# sourceMappingURL=if.js.map