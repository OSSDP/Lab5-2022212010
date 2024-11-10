import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var BasicFormViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormViewmodelForm, _super);
    function BasicFormViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'teacher_id_16fb257e_h2az',
            name: "{{teacher_id_16fb257e_h2az}}",
            binding: 'teacher_id',
            updateOn: 'blur',
            defaultI18nValue: '教师工号',
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
    ], BasicFormViewmodelForm.prototype, "teacher_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name_a9df9e1e_xgj5',
            name: "{{name_a9df9e1e_xgj5}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '教师姓名',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'department_6a312a92_bvcd',
            name: "{{department_6a312a92_bvcd}}",
            binding: 'department',
            updateOn: 'change',
            defaultI18nValue: '所在院系',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "department", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'password_2e41f9ab_xzbn',
            name: "{{password_2e41f9ab_xzbn}}",
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
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "password", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'email_Email_c4dc35f2_i5zn',
            name: "{{email_Email_c4dc35f2_i5zn}}",
            binding: 'email.email',
            updateOn: 'blur',
            defaultI18nValue: '邮箱',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "email_Email", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '教师表',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
