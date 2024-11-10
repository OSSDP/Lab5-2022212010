
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '教师表',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'name_6bb901d3_ktiz',
        name: "{{name_6bb901d3_ktiz}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '教师姓名',
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
    name: FormControl;

    @NgFormControl({
        id: 'department_c9f3ece4_a2k0',
        name: "{{department_c9f3ece4_a2k0}}",
        binding: 'department',
        updateOn: 'change',
        defaultI18nValue: '所在院系',
    })
    department: FormControl;

    @NgFormControl({
        id: 'password_fa170110_iy7o',
        name: "{{password_fa170110_iy7o}}",
        binding: 'password',
        updateOn: 'blur',
        defaultI18nValue: '密码',
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
    password: FormControl;

    @NgFormControl({
        id: 'email_Email_f1849de7_52ya',
        name: "{{email_Email_f1849de7_52ya}}",
        binding: 'email.email',
        updateOn: 'blur',
        defaultI18nValue: '邮箱',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    email_Email: FormControl;

}