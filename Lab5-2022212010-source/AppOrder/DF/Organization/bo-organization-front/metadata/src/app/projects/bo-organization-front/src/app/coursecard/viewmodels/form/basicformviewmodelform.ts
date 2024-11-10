
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '课程表',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'course_name_03e8313b_71j3',
        name: "{{course_name_03e8313b_71j3}}",
        binding: 'course_name',
        updateOn: 'blur',
        defaultI18nValue: '课程名称',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    course_name: FormControl;

    @NgFormControl({
        id: 'credits_ded82c86_trz4',
        name: "{{credits_ded82c86_trz4}}",
        binding: 'credits',
        updateOn: 'blur',
        defaultI18nValue: '课程学分',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    credits: FormControl;

    @NgFormControl({
        id: 'teacher_id_e62946f4_3geq',
        name: "{{teacher_id_e62946f4_3geq}}",
        binding: 'teacher_id',
        updateOn: 'blur',
        defaultI18nValue: '授课教师',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    teacher_id: FormControl;

    @NgFormControl({
        id: 'max_students_87371daf_flsf',
        name: "{{max_students_87371daf_flsf}}",
        binding: 'max_students',
        updateOn: 'blur',
        defaultI18nValue: '最大选课人数',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    max_students: FormControl;

    @NgFormControl({
        id: 'semester_ed40d007_ybja',
        name: "{{semester_ed40d007_ybja}}",
        binding: 'semester',
        updateOn: 'blur',
        defaultI18nValue: '课程学期',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    semester: FormControl;

    @NgFormControl({
        id: 'schedule_47f274b5_solj',
        name: "{{schedule_47f274b5_solj}}",
        binding: 'schedule',
        updateOn: 'blur',
        defaultI18nValue: '课程安排',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    schedule: FormControl;

    @NgFormControl({
        id: 'state_f8a51308_ceb3',
        name: "{{state_f8a51308_ceb3}}",
        binding: 'state',
        updateOn: 'change',
        defaultI18nValue: '课程状态',
    })
    state: FormControl;

}