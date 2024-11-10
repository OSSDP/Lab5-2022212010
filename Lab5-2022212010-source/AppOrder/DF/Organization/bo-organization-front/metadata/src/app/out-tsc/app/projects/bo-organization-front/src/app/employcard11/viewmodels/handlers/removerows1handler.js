import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { DataGridService as DataGridService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
var RemoveRows1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveRows1Handler, _super);
    function RemoveRows1Handler(_DataGridService1, _ListDataService1) {
        var _this = _super.call(this) || this;
        _this._DataGridService1 = _DataGridService1;
        _this._ListDataService1 = _ListDataService1;
        return _this;
    }
    RemoveRows1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('removeRows', function (context) {
            var args = [
                '{COMMAND~/params/ids}',
                '',
                '{COMMAND~/params/successMsg}'
            ];
            return _this.invoke(_this._ListDataService1, 'removeRows', args, context);
        });
        this.addTask('uncheckDeletedRows', function (context) {
            var args = [
                '{COMMAND~/params/ids}'
            ];
            return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
        });
        this.addTask('refreshAfterRemoving', function (context) {
            var args = [
                '{COMMAND~/params/refreshCommandName}',
                '{COMMAND~/params/refreshCommandFrameId}'
            ];
            return _this.invoke(_this._ListDataService1, 'refreshAfterRemoving', args, context);
        });
        this.addLink('removeRows', 'uncheckDeletedRows', "1==1");
        this.addLink('uncheckDeletedRows', 'refreshAfterRemoving', "1==1");
    };
    RemoveRows1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'RemoveRows1'
        }),
        tslib_1.__metadata("design:paramtypes", [DataGridService1,
            ListDataService1])
    ], RemoveRows1Handler);
    return RemoveRows1Handler;
}(CommandHandler));
export { RemoveRows1Handler };
