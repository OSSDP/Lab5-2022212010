
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { StudentCourseEntity } from './entities/studentcourseentity';

import { StudentCourseProxy } from './studentcourseproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/apporder/df/v1.0/studentcoursecard_frm',
    entityType: StudentCourseEntity
})
export class StudentCourseRepository extends BefRepository<StudentCourseEntity> {
    public name = 'StudentCourseRepository';

    public proxy: StudentCourseProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(StudentCourseProxy, null);
    }
}