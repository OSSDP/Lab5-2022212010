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
            id: 'code_ca1a3fb2_1m5u',
            name: "{{code_ca1a3fb2_1m5u}}",
            binding: 'code',
            updateOn: 'blur',
            defaultI18nValue: '编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name_ff2e5859_wvll',
            name: "{{name_ff2e5859_wvll}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '组织',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark_d42ea20c_sj20',
            name: "{{remark_d42ea20c_sj20}}",
            binding: 'remark',
            updateOn: 'blur',
            defaultI18nValue: '备注',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state_6b3e9bc9_40q9',
            name: "{{state_6b3e9bc9_40q9}}",
            binding: 'state',
            updateOn: 'blur',
            defaultI18nValue: '状态',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "state", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'countryOrArea_88fe9039_ke9g',
            name: "{{countryOrArea_88fe9039_ke9g}}",
            binding: 'countryOrArea',
            updateOn: 'blur',
            defaultI18nValue: '所属国家或地区',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "countryOrArea", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'location_fd499f05_bmbu',
            name: "{{location_fd499f05_bmbu}}",
            binding: 'location',
            updateOn: 'blur',
            defaultI18nValue: '常驻地',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "location", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'postID_c9c53a79_k5er',
            name: "{{postID_c9c53a79_k5er}}",
            binding: 'postID',
            updateOn: 'blur',
            defaultI18nValue: '职级',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "postID", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'category_61bd7708_z4k0',
            name: "{{category_61bd7708_z4k0}}",
            binding: 'category',
            updateOn: 'blur',
            defaultI18nValue: '人员类别',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "category", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone_cbeb9998_ukhr',
            name: "{{telephone_cbeb9998_ukhr}}",
            binding: 'telephone',
            updateOn: 'blur',
            defaultI18nValue: '联系电话',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'mailbox_8d5f92ea_to45',
            name: "{{mailbox_8d5f92ea_to45}}",
            binding: 'mailbox',
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
    ], BasicFormViewmodelForm.prototype, "mailbox", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '行政人员',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
