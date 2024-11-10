import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var LoadAndAdd1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(LoadAndAdd1Handler, _super);
    function LoadAndAdd1Handler(_CardDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    LoadAndAdd1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'add', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('add', 'transit', "1==1");
    };
    LoadAndAdd1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'LoadAndAdd1'
        }),
        tslib_1.__metadata("design:paramtypes", [CardDataService1,
            StateMachineService1])
    ], LoadAndAdd1Handler);
    return LoadAndAdd1Handler;
}(CommandHandler));
export { LoadAndAdd1Handler };
