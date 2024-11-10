
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '教师表',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'teacher_id',
        name: "{{teacher_id_e14b3b80_1rz4}}",
        binding: 'teacher_id',
        updateOn: 'blur',
        defaultI18nValue: '教师工号',
    })
    teacher_id: FormControl;

    @NgFormControl({
        id: 'name',
        name: "{{name_c8912fac_r0fz}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '教师姓名',
    })
    name: FormControl;

    @NgFormControl({
        id: 'department',
        name: "{{department_949fe0ca_ttk3}}",
        binding: 'department',
        updateOn: 'change',
        defaultI18nValue: '所在院系',
    })
    department: FormControl;

    @NgFormControl({
        id: 'password',
        name: "{{password_dc6f345c_vpuv}}",
        binding: 'password',
        updateOn: 'blur',
        defaultI18nValue: '密码',
    })
    password: FormControl;

    @NgFormControl({
        id: 'email.email',
        name: "{{email_Email_d61de382_gryz}}",
        binding: 'email.email',
        updateOn: 'blur',
        defaultI18nValue: '邮箱',
    })
    email_Email: FormControl;

}