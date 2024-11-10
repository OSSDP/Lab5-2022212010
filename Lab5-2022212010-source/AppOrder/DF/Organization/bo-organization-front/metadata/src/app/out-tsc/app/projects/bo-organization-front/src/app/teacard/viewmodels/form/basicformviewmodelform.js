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
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'department_c9f3ece4_a2k0',
            name: "{{department_c9f3ece4_a2k0}}",
            binding: 'department',
            updateOn: 'change',
            defaultI18nValue: '所在院系',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "department", void 0);
    tslib_1.__decorate([
        NgFormControl({
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
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "password", void 0);
    tslib_1.__decorate([
        NgFormControl({
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
