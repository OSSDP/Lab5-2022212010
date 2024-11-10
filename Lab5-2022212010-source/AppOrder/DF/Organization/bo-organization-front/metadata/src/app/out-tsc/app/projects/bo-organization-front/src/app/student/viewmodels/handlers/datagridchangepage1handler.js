import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { CommandService as CommandService1 } from '@farris/command-services';
var datagridChangePage1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(datagridChangePage1Handler, _super);
    function datagridChangePage1Handler(_CommandService1) {
        var _this = _super.call(this) || this;
        _this._CommandService1 = _CommandService1;
        return _this;
    }
    datagridChangePage1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('execute', function (context) {
            var args = [
                '{COMMAND~/params/loadCommandName}',
                '{COMMAND~/params/loadCommandFrameId}'
            ];
            return _this.invoke(_this._CommandService1, 'execute', args, context);
        });
    };
    datagridChangePage1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'datagridChangePage1'
        }),
        tslib_1.__metadata("design:paramtypes", [CommandService1])
    ], datagridChangePage1Handler);
    return datagridChangePage1Handler;
}(CommandHandler));
export { datagridChangePage1Handler };
