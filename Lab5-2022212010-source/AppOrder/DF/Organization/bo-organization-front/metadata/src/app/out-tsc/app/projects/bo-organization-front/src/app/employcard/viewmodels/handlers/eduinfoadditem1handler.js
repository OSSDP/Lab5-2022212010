import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { SubListDataService as SubListDataService1 } from '@farris/command-services';
var eduinfoAddItem1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(eduinfoAddItem1Handler, _super);
    function eduinfoAddItem1Handler(_SubListDataService1) {
        var _this = _super.call(this) || this;
        _this._SubListDataService1 = _SubListDataService1;
        return _this;
    }
    eduinfoAddItem1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function (context) {
            var args = [];
            return _this.invoke(_this._SubListDataService1, 'add', args, context);
        });
    };
    eduinfoAddItem1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'eduinfoAddItem1'
        }),
        tslib_1.__metadata("design:paramtypes", [SubListDataService1])
    ], eduinfoAddItem1Handler);
    return eduinfoAddItem1Handler;
}(CommandHandler));
export { eduinfoAddItem1Handler };
