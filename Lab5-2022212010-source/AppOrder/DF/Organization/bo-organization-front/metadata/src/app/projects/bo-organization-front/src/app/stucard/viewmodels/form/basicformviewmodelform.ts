
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '学生表',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'name_05ec4601_lmn1',
        name: "{{name_05ec4601_lmn1}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '姓名',
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
        id: 'gender_59a52474_g0yq',
        name: "{{gender_59a52474_g0yq}}",
        binding: 'gender',
        updateOn: 'change',
        defaultI18nValue: '性别',
    })
    gender: FormControl;

    @NgFormControl({
        id: 'birth_e01f1a35_elhd',
        name: "{{birth_e01f1a35_elhd}}",
        binding: 'birth',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '生日',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    birth: FormControl;

    @NgFormControl({
        id: 'major_498f38ff_w7gp',
        name: "{{major_498f38ff_w7gp}}",
        binding: 'major',
        updateOn: 'change',
        defaultI18nValue: '专业名称',
    })
    major: FormControl;

    @NgFormControl({
        id: 'phone_PhoneNumber_fdbd27d1_2f83',
        name: "{{phone_PhoneNumber_fdbd27d1_2f83}}",
        binding: 'phone.phoneNumber',
        updateOn: 'blur',
        defaultI18nValue: '手机电话号码',
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
    phone_PhoneNumber: FormControl;

    @NgFormControl({
        id: 'email_Email_866d9869_4nvh',
        name: "{{email_Email_866d9869_4nvh}}",
        binding: 'email.email',
        updateOn: 'blur',
        defaultI18nValue: '邮箱',
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
    email_Email: FormControl;

    @NgFormControl({
        id: 'state_8f5ef340_3lfl',
        name: "{{state_8f5ef340_3lfl}}",
        binding: 'state',
        updateOn: 'change',
        defaultI18nValue: '状态',
    })
    state: FormControl;

}