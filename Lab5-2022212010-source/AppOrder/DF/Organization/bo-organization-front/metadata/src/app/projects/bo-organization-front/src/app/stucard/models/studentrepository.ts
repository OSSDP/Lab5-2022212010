
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { StudentEntity } from './entities/studententity';

import { StudentProxy } from './studentproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/apporder/df/v1.0/stucard_frm',
    entityType: StudentEntity
})
export class StudentRepository extends BefRepository<StudentEntity> {
    public name = 'StudentRepository';

    public proxy: StudentProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(StudentProxy, null);
    }
}