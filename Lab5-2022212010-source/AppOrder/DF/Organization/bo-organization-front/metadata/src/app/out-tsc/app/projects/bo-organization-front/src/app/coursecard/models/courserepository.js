import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { CourseEntity } from './entities/courseentity';
import { CourseProxy } from './courseproxy';
var CourseRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CourseRepository, _super);
    function CourseRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'CourseRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(CourseProxy, null);
        return _this;
    }
    CourseRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/apporder/df/v1.0/coursecard_frm',
            entityType: CourseEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], CourseRepository);
    return CourseRepository;
}(BefRepository));
export { CourseRepository };
