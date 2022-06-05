"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('If tests', function () {
    var base = 'The quick brown fox jumps over the lazy dog';
    it('evaluate if expression', function () {
        var r = (0, src_1.If)(base.length > 30, function () { return 'over 30'; })
            .else(function () { return 'under 30'; });
        expect(r).toBe('over 30');
    });
    it('evaluate else expression', function () {
        var r = (0, src_1.If)(base.length > 50, function () { return 'over 50'; })
            .else(function () { return 'under 50'; });
        expect(r).toBe('under 50');
    });
});
//# sourceMappingURL=if-tests.js.map