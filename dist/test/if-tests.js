"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('If tests', function () {
    var base = 'The quick brown fox jumps over the lazy dog';
    var StatusFindService = (function () {
        function StatusFindService() {
        }
        StatusFindService.prototype.execute = function () {
            return '5';
        };
        return StatusFindService;
    }());
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
    it('evaluate elseIf and else sequentially', function () {
        var result = new StatusFindService().execute();
        var res = (0, src_1.If)(result === '0', function () { return ({ message: 'success' }); })
            .elseIf(result === '5', function () { return ({ message: 'not found' }); })
            .else(function () { return ({ message: 'failure' }); });
        console.log(res);
        expect(res).toStrictEqual({ message: 'not found' });
    });
});
//# sourceMappingURL=if-tests.js.map