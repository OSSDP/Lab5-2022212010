import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { StudentEntity } from './entities/studententity';
import { StudentProxy } from './studentproxy';
var StudentRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StudentRepository, _super);
    function StudentRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'StudentRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(StudentProxy, null);
        return _this;
    }
    StudentRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/apporder/df/v1.0/stucard_frm',
            entityType: StudentEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], StudentRepository);
    return StudentRepository;
}(BefRepository));
export { StudentRepository };
