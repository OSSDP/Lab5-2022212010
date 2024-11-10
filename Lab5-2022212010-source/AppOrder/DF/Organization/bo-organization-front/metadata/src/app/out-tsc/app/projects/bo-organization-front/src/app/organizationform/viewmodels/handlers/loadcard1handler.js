import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { PaginationService as PaginationService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
var LoadCard1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(LoadCard1Handler, _super);
    function LoadCard1Handler(_PaginationService1, _CardDataService1) {
        var _this = _super.call(this) || this;
        _this._PaginationService1 = _PaginationService1;
        _this._CardDataService1 = _CardDataService1;
        return _this;
    }
    LoadCard1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('resetChildrenPagination', function (context) {
            var args = [];
            return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
        });
        this.addTask('update', function (context) {
            var args = [];
            return _this.invoke(_this._CardDataService1, 'update', args, context);
        });
        this.addLink('resetChildrenPagination', 'update', "1==1");
    };
    LoadCard1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'LoadCard1'
        }),
        tslib_1.__metadata("design:paramtypes", [PaginationService1,
            CardDataService1])
    ], LoadCard1Handler);
    return LoadCard1Handler;
}(CommandHandler));
export { LoadCard1Handler };
