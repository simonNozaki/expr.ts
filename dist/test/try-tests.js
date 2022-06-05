"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('Try tests', function () {
    var ErrorService = (function () {
        function ErrorService() {
        }
        ErrorService.prototype.execute = function () {
            throw new Error('');
        };
        return ErrorService;
    }());
    it('can catch Error', function () {
        var s = (0, src_1.Try)(function () { return (new ErrorService().execute()); }, (0, src_1.Catch)(Error, function (e) { return ('DEFAULT'); }));
        expect(s).toBe('DEFAULT');
    });
});
//# sourceMappingURL=try-tests.js.map