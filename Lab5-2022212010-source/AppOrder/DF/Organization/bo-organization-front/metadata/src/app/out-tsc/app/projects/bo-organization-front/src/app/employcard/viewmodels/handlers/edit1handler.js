import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var Edit1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Edit1Handler, _super);
    function Edit1Handler(_CardDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    Edit1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('checkBeforeUpdate', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'checkBeforeUpdate', args, context);
        });
        this.addTask('update', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'update', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('checkBeforeUpdate', 'update', "1==1");
        this.addLink('update', 'transit', "1==1");
    };
    Edit1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Edit1'
        }),
        tslib_1.__metadata("design:paramtypes", [CardDataService1,
            StateMachineService1])
    ], Edit1Handler);
    return Edit1Handler;
}(CommandHandler));
export { Edit1Handler };
