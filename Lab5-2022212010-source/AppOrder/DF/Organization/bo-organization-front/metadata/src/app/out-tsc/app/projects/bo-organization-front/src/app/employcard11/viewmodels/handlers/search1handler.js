import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { FilterService as FilterService1 } from '@farris/command-services';
var Search1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Search1Handler, _super);
    function Search1Handler(_ListDataService1, _FilterService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        _this._FilterService1 = _FilterService1;
        return _this;
    }
    Search1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('stripFiltersWithSpecialValue', function (context) {
            var args = [
                '{COMMAND~/params/filter}',
                '{COMMAND~/params/specialFilterValues}'
            ];
            return _this.invoke(_this._FilterService1, 'stripFiltersWithSpecialValue', args, context);
        });
        this.addTask('query', function (context) {
            var args = [
                '{COMMAND~/results/stripFiltersWithSpecialValue}',
                '{COMMAND~/params/sort}',
                '{COMMAND~/params/pageSize}',
                '{COMMAND~/params/pageIndex}'
            ];
            return _this.invoke(_this._ListDataService1, 'query', args, context);
        });
        this.addLink('stripFiltersWithSpecialValue', 'query', "1==1");
    };
    Search1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Search1'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1,
            FilterService1])
    ], Search1Handler);
    return Search1Handler;
}(CommandHandler));
export { Search1Handler };
