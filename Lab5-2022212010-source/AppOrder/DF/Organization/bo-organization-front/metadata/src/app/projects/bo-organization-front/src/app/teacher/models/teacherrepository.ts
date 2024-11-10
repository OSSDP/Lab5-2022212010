
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { TeacherEntity } from './entities/teacherentity';

import { TeacherProxy } from './teacherproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/apporder/df/v1.0/teacher_frm',
    entityType: TeacherEntity
})
export class TeacherRepository extends BefRepository<TeacherEntity> {
    public name = 'TeacherRepository';

    public proxy: TeacherProxy;
    public paginationInfo = {
        TeacherEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(TeacherProxy, null);
    }
}