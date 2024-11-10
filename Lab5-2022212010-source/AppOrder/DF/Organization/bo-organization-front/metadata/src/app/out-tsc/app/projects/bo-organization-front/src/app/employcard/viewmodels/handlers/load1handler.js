import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { NavigationMiddlewareService as NavigationMiddlewareService1 } from '@farris/command-services';
import { CommandService as CommandService1 } from '@farris/command-services';
var Load1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Load1Handler, _super);
    function Load1Handler(_NavigationMiddlewareService1, _CommandService1) {
        var _this = _super.call(this) || this;
        _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
        _this._CommandService1 = _CommandService1;
        return _this;
    }
    Load1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('onClosing', function (context) {
            var args = [];
            return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
        });
        this.addTask('execute', function (context) {
            var args = [
                '{COMMAND~/params/action}'
            ];
            return _this.invoke(_this._CommandService1, 'execute', args, context);
        });
        this.addLink('onClosing', 'execute', "1==1");
    };
    Load1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Load1'
        }),
        tslib_1.__metadata("design:paramtypes", [NavigationMiddlewareService1,
            CommandService1])
    ], Load1Handler);
    return Load1Handler;
}(CommandHandler));
export { Load1Handler };
