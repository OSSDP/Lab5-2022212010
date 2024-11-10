
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '课程表',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'courseId',
        name: "{{courseId_f727a729_2l2j}}",
        binding: 'courseId',
        updateOn: 'blur',
        defaultI18nValue: '课程编号',
    })
    courseId: FormControl;

    @NgFormControl({
        id: 'course_name',
        name: "{{course_name_0fe03859_zolf}}",
        binding: 'course_name',
        updateOn: 'blur',
        defaultI18nValue: '课程名称',
    })
    course_name: FormControl;

    @NgFormControl({
        id: 'credits',
        name: "{{credits_94b90941_e0xq}}",
        binding: 'credits',
        updateOn: 'blur',
        defaultI18nValue: '课程学分',
    })
    credits: FormControl;

    @NgFormControl({
        id: 'teacher_id',
        name: "{{teacher_id_15e20fea_lxuh}}",
        binding: 'teacher_id',
        updateOn: 'blur',
        defaultI18nValue: '授课教师',
    })
    teacher_id: FormControl;

    @NgFormControl({
        id: 'max_students',
        name: "{{max_students_3b170260_6s75}}",
        binding: 'max_students',
        updateOn: 'blur',
        defaultI18nValue: '最大选课人数',
    })
    max_students: FormControl;

    @NgFormControl({
        id: 'semester',
        name: "{{semester_72076de8_1eqr}}",
        binding: 'semester',
        updateOn: 'blur',
        defaultI18nValue: '课程学期',
    })
    semester: FormControl;

    @NgFormControl({
        id: 'schedule',
        name: "{{schedule_58813dc6_8qob}}",
        binding: 'schedule',
        updateOn: 'blur',
        defaultI18nValue: '课程安排',
    })
    schedule: FormControl;

    @NgFormControl({
        id: 'state',
        name: "{{state_4663043d_cg5t}}",
        binding: 'state',
        updateOn: 'change',
        defaultI18nValue: '课程状态',
    })
    state: FormControl;

}