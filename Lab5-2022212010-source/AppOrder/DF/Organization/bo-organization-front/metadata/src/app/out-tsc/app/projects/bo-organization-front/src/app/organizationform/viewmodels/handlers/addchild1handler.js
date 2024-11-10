import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { TreeDataService as TreeDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var AddChild1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(AddChild1Handler, _super);
    function AddChild1Handler(_TreeDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._TreeDataService1 = _TreeDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    AddChild1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('addChild', function (context) {
            var args = [
                '{COMMAND~/params/parentId}'
            ];
            return _this.invoke(_this._TreeDataService1, 'addChild', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                'Create'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('addChild', 'transit', "1==1");
    };
    AddChild1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'AddChild1'
        }),
        tslib_1.__metadata("design:paramtypes", [TreeDataService1,
            StateMachineService1])
    ], AddChild1Handler);
    return AddChild1Handler;
}(CommandHandler));
export { AddChild1Handler };
