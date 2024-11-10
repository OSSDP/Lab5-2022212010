import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'teacher_id',
            name: "{{teacher_id_e14b3b80_1rz4}}",
            binding: 'teacher_id',
            updateOn: 'blur',
            defaultI18nValue: '教师工号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "teacher_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name',
            name: "{{name_c8912fac_r0fz}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '教师姓名',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'department',
            name: "{{department_949fe0ca_ttk3}}",
            binding: 'department',
            updateOn: 'change',
            defaultI18nValue: '所在院系',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "department", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'password',
            name: "{{password_dc6f345c_vpuv}}",
            binding: 'password',
            updateOn: 'blur',
            defaultI18nValue: '密码',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "password", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'email.email',
            name: "{{email_Email_d61de382_gryz}}",
            binding: 'email.email',
            updateOn: 'blur',
            defaultI18nValue: '邮箱',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "email_Email", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '教师表',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
