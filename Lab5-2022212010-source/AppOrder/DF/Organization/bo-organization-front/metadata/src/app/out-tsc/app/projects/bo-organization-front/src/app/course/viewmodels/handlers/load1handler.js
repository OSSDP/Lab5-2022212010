import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ChangeItemService as ChangeItemService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
var Load1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Load1Handler, _super);
    function Load1Handler(_ChangeItemService1, _ListDataService1) {
        var _this = _super.call(this) || this;
        _this._ChangeItemService1 = _ChangeItemService1;
        _this._ListDataService1 = _ListDataService1;
        return _this;
    }
    Load1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('load', function (context) {
            var args = [
                '{COMMAND~/params/filter}',
                '{COMMAND~/params/sort}'
            ];
            return _this.invoke(_this._ListDataService1, 'load', args, context);
        });
        this.addTask('setRepository', function (context) {
            var args = [];
            return _this.invoke(_this._ChangeItemService1, 'setRepository', args, context);
        });
        this.addLink('load', 'setRepository', "1==1");
    };
    Load1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Load1'
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeItemService1,
            ListDataService1])
    ], Load1Handler);
    return Load1Handler;
}(CommandHandler));
export { Load1Handler };
