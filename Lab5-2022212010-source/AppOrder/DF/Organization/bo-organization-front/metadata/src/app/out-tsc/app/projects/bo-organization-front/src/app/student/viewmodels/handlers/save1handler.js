import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ValidationService as ValidationService1 } from '@farris/command-services';
import { EndEditService as EndEditService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var Save1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Save1Handler, _super);
    function Save1Handler(_ValidationService1, _EndEditService1, _CardDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._ValidationService1 = _ValidationService1;
        _this._EndEditService1 = _EndEditService1;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    Save1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('endEdit', function (context) {
            var args = [];
            return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
        });
        this.addTask('validateCurrentRow', function (context) {
            var args = [];
            return _this.invoke(_this._ValidationService1, 'validateCurrentRow', args, context);
        });
        this.addTask('save', function (context) {
            var args = [
                '{COMMAND~/params/successMsg}'
            ];
            return _this.invoke(_this._CardDataService1, 'save', args, context);
        });
        this.addTask('update', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'update', args, context);
        });
        this.addTask('resetValidation', function (context) {
            var args = [];
            return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('endEdit', 'validateCurrentRow', "1==1");
        this.addLink('validateCurrentRow', 'save', "1==1");
        this.addLink('save', 'update', "1==1");
        this.addLink('update', 'resetValidation', "1==1");
        this.addLink('resetValidation', 'transit', "1==1");
    };
    Save1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Save1'
        }),
        tslib_1.__metadata("design:paramtypes", [ValidationService1,
            EndEditService1,
            CardDataService1,
            StateMachineService1])
    ], Save1Handler);
    return Save1Handler;
}(CommandHandler));
export { Save1Handler };
