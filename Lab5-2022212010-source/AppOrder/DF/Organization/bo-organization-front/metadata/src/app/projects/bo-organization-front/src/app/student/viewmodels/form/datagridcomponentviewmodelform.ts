
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '学生表',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'student_id',
        name: "{{student_id_187b1ada_5ngh}}",
        binding: 'student_id',
        updateOn: 'blur',
        defaultI18nValue: '学号',
    })
    student_id: FormControl;

    @NgFormControl({
        id: 'name',
        name: "{{name_cd4d8a2b_lj1y}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '姓名',
    })
    name: FormControl;

    @NgFormControl({
        id: 'gender',
        name: "{{gender_b09c1344_gzd2}}",
        binding: 'gender',
        updateOn: 'change',
        defaultI18nValue: '性别',
    })
    gender: FormControl;

    @NgFormControl({
        id: 'password',
        name: "{{password_72231dcb_iwrs}}",
        binding: 'password',
        updateOn: 'blur',
        defaultI18nValue: '密码',
    })
    password: FormControl;

    @NgFormControl({
        id: 'birth',
        name: "{{birth_99cae752_zwqe}}",
        binding: 'birth',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '生日',
    })
    birth: FormControl;

    @NgFormControl({
        id: 'major',
        name: "{{major_615161ef_22fk}}",
        binding: 'major',
        updateOn: 'change',
        defaultI18nValue: '专业名称',
    })
    major: FormControl;

    @NgFormControl({
        id: 'phone.phoneNumber',
        name: "{{phone_PhoneNumber_46c77ec9_ljvn}}",
        binding: 'phone.phoneNumber',
        updateOn: 'blur',
        defaultI18nValue: '手机电话号码',
    })
    phone_PhoneNumber: FormControl;

    @NgFormControl({
        id: 'email.email',
        name: "{{email_Email_503c6e67_8ros}}",
        binding: 'email.email',
        updateOn: 'blur',
        defaultI18nValue: '邮箱',
    })
    email_Email: FormControl;

    @NgFormControl({
        id: 'state',
        name: "{{state_c7b052e8_jonh}}",
        binding: 'state',
        updateOn: 'change',
        defaultI18nValue: '状态',
    })
    state: FormControl;

}