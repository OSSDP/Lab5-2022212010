import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { DataGridService as DataGridService1 } from '@farris/command-services';
import { SubListDataService as SubListDataService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
var eduinfoRemoveItem1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(eduinfoRemoveItem1Handler, _super);
    function eduinfoRemoveItem1Handler(_DataGridService1, _SubListDataService1, _ListDataService1) {
        var _this = _super.call(this) || this;
        _this._DataGridService1 = _DataGridService1;
        _this._SubListDataService1 = _SubListDataService1;
        _this._ListDataService1 = _ListDataService1;
        return _this;
    }
    eduinfoRemoveItem1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('remove', function (context) {
            var args = [
                '{COMMAND~/params/id}',
                '{COMMAND~/params/successMsg}'
            ];
            return _this.invoke(_this._SubListDataService1, 'remove', args, context);
        });
        this.addTask('uncheckDeletedRows', function (context) {
            var args = [
                '{COMMAND~/params/id}'
            ];
            return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
        });
        this.addTask('queryChild', function (context) {
            var args = [
                '',
                ''
            ];
            return _this.invoke(_this._ListDataService1, 'queryChild', args, context);
        });
        this.addLink('remove', 'uncheckDeletedRows', "1==1");
        this.addLink('uncheckDeletedRows', 'queryChild', "1==1");
    };
    eduinfoRemoveItem1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'eduinfoRemoveItem1'
        }),
        tslib_1.__metadata("design:paramtypes", [DataGridService1,
            SubListDataService1,
            ListDataService1])
    ], eduinfoRemoveItem1Handler);
    return eduinfoRemoveItem1Handler;
}(CommandHandler));
export { eduinfoRemoveItem1Handler };
