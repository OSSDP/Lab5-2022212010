import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'student_id',
            name: "{{student_id_187b1ada_5ngh}}",
            binding: 'student_id',
            updateOn: 'blur',
            defaultI18nValue: '学号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "student_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name',
            name: "{{name_cd4d8a2b_lj1y}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '姓名',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'gender',
            name: "{{gender_b09c1344_gzd2}}",
            binding: 'gender',
            updateOn: 'change',
            defaultI18nValue: '性别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'password',
            name: "{{password_72231dcb_iwrs}}",
            binding: 'password',
            updateOn: 'blur',
            defaultI18nValue: '密码',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "password", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'birth',
            name: "{{birth_99cae752_zwqe}}",
            binding: 'birth',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '生日',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "birth", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'major',
            name: "{{major_615161ef_22fk}}",
            binding: 'major',
            updateOn: 'change',
            defaultI18nValue: '专业名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "major", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'phone.phoneNumber',
            name: "{{phone_PhoneNumber_46c77ec9_ljvn}}",
            binding: 'phone.phoneNumber',
            updateOn: 'blur',
            defaultI18nValue: '手机电话号码',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "phone_PhoneNumber", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'email.email',
            name: "{{email_Email_503c6e67_8ros}}",
            binding: 'email.email',
            updateOn: 'blur',
            defaultI18nValue: '邮箱',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "email_Email", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state',
            name: "{{state_c7b052e8_jonh}}",
            binding: 'state',
            updateOn: 'change',
            defaultI18nValue: '状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "state", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '学生表',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
