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
        ErrorService.prototype.executeUri = function () {
            throw new URIError('');
        };
        return ErrorService;
    }());
    it('can catch Error', function () {
        var s = (0, src_1.doOnTry)(function () { return (new ErrorService().execute()); }, (0, src_1.recover)(Error.prototype, function (e) { return ('DEFAULT'); }));
        expect(s).toBe('DEFAULT');
    });
    it('can catch URI Error', function () {
        var s = (0, src_1.doOnTry)(function () { return (new ErrorService().executeUri()); }, (0, src_1.recover)(URIError.prototype, function (e) { return ('URI Error'); }), (0, src_1.recover)(Error.prototype, function (e) { return ('DEFAULT'); }));
        expect(s).toBe('URI Error');
    });
});
//# sourceMappingURL=try-tests.js.map