import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { DataGridService as DataGridService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
var datagridRemove2Handler = /** @class */ (function (_super) {
    tslib_1.__extends(datagridRemove2Handler, _super);
    function datagridRemove2Handler(_DataGridService1, _ListDataService1) {
        var _this = _super.call(this) || this;
        _this._DataGridService1 = _DataGridService1;
        _this._ListDataService1 = _ListDataService1;
        return _this;
    }
    datagridRemove2Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('remove', function (context) {
            var args = [
                '{COMMAND~/params/id}',
                'true',
                '{COMMAND~/params/successMsg}',
                'true',
                'true'
            ];
            return _this.invoke(_this._ListDataService1, 'remove', args, context);
        });
        this.addTask('uncheckDeletedRows', function (context) {
            var args = [
                '{COMMAND~/params/id}'
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
        this.addLink('remove', 'uncheckDeletedRows', "1==1");
        this.addLink('uncheckDeletedRows', 'refreshAfterRemoving', "1==1");
    };
    datagridRemove2Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'datagridRemove2'
        }),
        tslib_1.__metadata("design:paramtypes", [DataGridService1,
            ListDataService1])
    ], datagridRemove2Handler);
    return datagridRemove2Handler;
}(CommandHandler));
export { datagridRemove2Handler };
