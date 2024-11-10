import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { NavigationMiddlewareService as NavigationMiddlewareService1 } from '@farris/command-services';
import { TreeDataService as TreeDataService1 } from '@farris/command-services';
var LoadTree1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(LoadTree1Handler, _super);
    function LoadTree1Handler(_NavigationMiddlewareService1, _TreeDataService1) {
        var _this = _super.call(this) || this;
        _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
        _this._TreeDataService1 = _TreeDataService1;
        return _this;
    }
    LoadTree1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('onClosing', function (context) {
            var args = [];
            return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
        });
        this.addTask('load', function (context) {
            var args = [
                '{COMMAND~/params/filter}',
                '{COMMAND~/params/sort}'
            ];
            return _this.invoke(_this._TreeDataService1, 'load', args, context);
        });
        this.addLink('onClosing', 'load', "1==1");
    };
    LoadTree1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'LoadTree1'
        }),
        tslib_1.__metadata("design:paramtypes", [NavigationMiddlewareService1,
            TreeDataService1])
    ], LoadTree1Handler);
    return LoadTree1Handler;
}(CommandHandler));
export { LoadTree1Handler };
