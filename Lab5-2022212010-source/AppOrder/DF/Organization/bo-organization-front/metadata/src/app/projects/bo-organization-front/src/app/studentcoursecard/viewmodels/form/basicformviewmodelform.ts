
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '学生选课表',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'student_id_5f2fcc8e_tcym',
        name: "{{student_id_5f2fcc8e_tcym}}",
        binding: 'student_id',
        updateOn: 'blur',
        defaultI18nValue: '学生ID',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    student_id: FormControl;

    @NgFormControl({
        id: 'course_id_77780bd6_iwin',
        name: "{{course_id_77780bd6_iwin}}",
        binding: 'course_id',
        updateOn: 'blur',
        defaultI18nValue: '课程ID',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    course_id: FormControl;

    @NgFormControl({
        id: 'state_1ba69cac_vl2z',
        name: "{{state_1ba69cac_vl2z}}",
        binding: 'state',
        updateOn: 'change',
        defaultI18nValue: '选课状态',
    })
    state: FormControl;

    @NgFormControl({
        id: 'grade_5684d932_23p2',
        name: "{{grade_5684d932_23p2}}",
        binding: 'grade',
        updateOn: 'blur',
        defaultI18nValue: '学生成绩',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    grade: FormControl;

}