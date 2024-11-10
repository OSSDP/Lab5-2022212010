
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { CourseEntity } from './entities/courseentity';

import { CourseProxy } from './courseproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/apporder/df/v1.0/course_frm',
    entityType: CourseEntity
})
export class CourseRepository extends BefRepository<CourseEntity> {
    public name = 'CourseRepository';

    public proxy: CourseProxy;
    public paginationInfo = {
        CourseEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(CourseProxy, null);
    }
}