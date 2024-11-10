import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var BasicFormViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormViewmodelForm, _super);
    function BasicFormViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
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
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'gender_59a52474_g0yq',
            name: "{{gender_59a52474_g0yq}}",
            binding: 'gender',
            updateOn: 'change',
            defaultI18nValue: '性别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgFormControl({
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
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "birth", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'major_498f38ff_w7gp',
            name: "{{major_498f38ff_w7gp}}",
            binding: 'major',
            updateOn: 'change',
            defaultI18nValue: '专业名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "major", void 0);
    tslib_1.__decorate([
        NgFormControl({
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
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "phone_PhoneNumber", void 0);
    tslib_1.__decorate([
        NgFormControl({
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
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "email_Email", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state_8f5ef340_3lfl',
            name: "{{state_8f5ef340_3lfl}}",
            binding: 'state',
            updateOn: 'change',
            defaultI18nValue: '状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "state", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '学生表',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
