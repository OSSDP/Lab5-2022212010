import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { CommandService as CommandService1 } from '@farris/command-services';
var datagridChangePage2Handler = /** @class */ (function (_super) {
    tslib_1.__extends(datagridChangePage2Handler, _super);
    function datagridChangePage2Handler(_CommandService1) {
        var _this = _super.call(this) || this;
        _this._CommandService1 = _CommandService1;
        return _this;
    }
    datagridChangePage2Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('execute', function (context) {
            var args = [
                '{COMMAND~/params/loadCommandName}',
                '{COMMAND~/params/loadCommandFrameId}'
            ];
            return _this.invoke(_this._CommandService1, 'execute', args, context);
        });
    };
    datagridChangePage2Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'datagridChangePage2'
        }),
        tslib_1.__metadata("design:paramtypes", [CommandService1])
    ], datagridChangePage2Handler);
    return datagridChangePage2Handler;
}(CommandHandler));
export { datagridChangePage2Handler };
