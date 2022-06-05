"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
var If = function (condition, block) {
    return new Evaluator(condition, block);
};
exports.If = If;
var Evaluator = (function () {
    function Evaluator(condition, block) {
        this.condition = condition;
        this.block = block;
    }
    Evaluator.prototype.else = function (alternative) {
        return this.evaluate(alternative);
    };
    Evaluator.prototype.evaluate = function (alternative) {
        if (this.condition) {
            return this.block();
        }
        else {
            return alternative();
        }
    };
    return Evaluator;
}());
//# sourceMappingURL=if.js.map