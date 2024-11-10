
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '学生选课表',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'student_id',
        name: "{{student_id_c8a96a10_ug84}}",
        binding: 'student_id',
        updateOn: 'blur',
        defaultI18nValue: '学生ID',
    })
    student_id: FormControl;

    @NgFormControl({
        id: 'course_id',
        name: "{{course_id_4d647003_prh6}}",
        binding: 'course_id',
        updateOn: 'blur',
        defaultI18nValue: '课程ID',
    })
    course_id: FormControl;

    @NgFormControl({
        id: 'state',
        name: "{{state_d3117fe5_13d1}}",
        binding: 'state',
        updateOn: 'change',
        defaultI18nValue: '选课状态',
    })
    state: FormControl;

    @NgFormControl({
        id: 'grade',
        name: "{{grade_c87e9cd9_v6jm}}",
        binding: 'grade',
        updateOn: 'blur',
        defaultI18nValue: '学生成绩',
    })
    grade: FormControl;

}