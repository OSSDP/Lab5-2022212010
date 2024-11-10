import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { NavigationMiddlewareService as NavigationMiddlewareService1 } from '@farris/command-services';
import { NavigationService as NavigationService1 } from '@farris/command-services';
var rootAdd1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootAdd1Handler, _super);
    function rootAdd1Handler(_NavigationMiddlewareService1, _NavigationService1) {
        var _this = _super.call(this) || this;
        _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
        _this._NavigationService1 = _NavigationService1;
        return _this;
    }
    rootAdd1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('getTabId', function (context) {
            var args = [
                '{COMMAND~/params/params}',
                ''
            ];
            return _this.invoke(_this._NavigationMiddlewareService1, 'getTabId', args, context);
        });
        this.addTask('openMenu', function (context) {
            var args = [
                '{COMMAND~/results/getTabId}',
                '{COMMAND~/params/url}',
                '{COMMAND~/params/params}',
                '',
                '{COMMAND~/params/enableRefresh}',
                '{COMMAND~/params/tabName}',
                '{COMMAND~/params/destructuring}'
            ];
            return _this.invoke(_this._NavigationService1, 'openMenu', args, context);
        });
        this.addLink('getTabId', 'openMenu', "1==1");
    };
    rootAdd1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootAdd1'
        }),
        tslib_1.__metadata("design:paramtypes", [NavigationMiddlewareService1,
            NavigationService1])
    ], rootAdd1Handler);
    return rootAdd1Handler;
}(CommandHandler));
export { rootAdd1Handler };
