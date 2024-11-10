import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { StudentCourseEntity } from './entities/studentcourseentity';
import { StudentCourseProxy } from './studentcourseproxy';
var StudentCourseRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StudentCourseRepository, _super);
    function StudentCourseRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'StudentCourseRepository';
        _this.paginationInfo = {
            StudentCourseEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(StudentCourseProxy, null);
        return _this;
    }
    StudentCourseRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/apporder/df/v1.0/studentcourse_frm',
            entityType: StudentCourseEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], StudentCourseRepository);
    return StudentCourseRepository;
}(BefRepository));
export { StudentCourseRepository };
