import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { EmployeeEntity } from './entities/employeeentity';
import { EmployeeProxy } from './employeeproxy';
var EmployeeRepository = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeeRepository, _super);
    function EmployeeRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'EmployeeRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(EmployeeProxy, null);
        return _this;
    }
    EmployeeRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/apporder/df/v1.0/employcard1_frm',
            entityType: EmployeeEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], EmployeeRepository);
    return EmployeeRepository;
}(BefRepository));
export { EmployeeRepository };
