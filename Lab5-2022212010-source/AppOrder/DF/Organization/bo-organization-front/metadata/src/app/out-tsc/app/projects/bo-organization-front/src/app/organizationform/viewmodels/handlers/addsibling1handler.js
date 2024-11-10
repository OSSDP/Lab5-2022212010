import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { TreeDataService as TreeDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var AddSibling1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(AddSibling1Handler, _super);
    function AddSibling1Handler(_TreeDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._TreeDataService1 = _TreeDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    AddSibling1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('addSibling', function (context) {
            var args = [
                '{COMMAND~/params/siblingId}'
            ];
            return _this.invoke(_this._TreeDataService1, 'addSibling', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                'Create'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('addSibling', 'transit', "1==1");
    };
    AddSibling1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'AddSibling1'
        }),
        tslib_1.__metadata("design:paramtypes", [TreeDataService1,
            StateMachineService1])
    ], AddSibling1Handler);
    return AddSibling1Handler;
}(CommandHandler));
export { AddSibling1Handler };
