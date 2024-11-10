import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ChangeItemService as ChangeItemService1 } from '@farris/command-services';
import { PaginationService as PaginationService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var ChangeItem2Handler = /** @class */ (function (_super) {
    tslib_1.__extends(ChangeItem2Handler, _super);
    function ChangeItem2Handler(_ChangeItemService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._ChangeItemService1 = _ChangeItemService1;
        _this._PaginationService1 = _PaginationService1;
        _this._CardDataService1 = _CardDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    ChangeItem2Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('changeItem', function (context) {
            var args = [
                '{COMMAND~/params/type}',
                '{COMMAND~/params/id}',
                '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
            ];
            return _this.invoke(_this._ChangeItemService1, 'changeItem', args, context);
        });
        this.addTask('resetChildrenPagination', function (context) {
            var args = [];
            return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
        });
        this.addTask('load', function (context) {
            var args = [
                '{COMMAND~/results/changeItem}'
            ];
            return _this.invoke(_this._CardDataService1, 'load', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('changeItem', 'resetChildrenPagination', "1==1");
        this.addLink('resetChildrenPagination', 'load', "1==1");
        this.addLink('load', 'transit', "1==1");
    };
    ChangeItem2Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'ChangeItem2'
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeItemService1,
            PaginationService1,
            CardDataService1,
            StateMachineService1])
    ], ChangeItem2Handler);
    return ChangeItem2Handler;
}(CommandHandler));
export { ChangeItem2Handler };
