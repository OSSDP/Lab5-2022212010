import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { TeacherEntity } from './entities/teacherentity';
import { TeacherProxy } from './teacherproxy';
var TeacherRepository = /** @class */ (function (_super) {
    tslib_1.__extends(TeacherRepository, _super);
    function TeacherRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'TeacherRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(TeacherProxy, null);
        return _this;
    }
    TeacherRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/apporder/df/v1.0/student_frm',
            entityType: TeacherEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], TeacherRepository);
    return TeacherRepository;
}(BefRepository));
export { TeacherRepository };
