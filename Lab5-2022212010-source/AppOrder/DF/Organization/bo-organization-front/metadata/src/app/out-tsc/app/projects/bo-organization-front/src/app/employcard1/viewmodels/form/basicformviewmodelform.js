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
            id: 'id_bad77a08_01l0',
            name: "{{id_bad77a08_01l0}}",
            binding: 'id',
            defaultI18nValue: '主键',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'version_67ae2ffa_irq7',
            name: "{{version_67ae2ffa_irq7}}",
            binding: 'version',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '版本',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "version", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'code_f79cb2d9_r8ec',
            name: "{{code_f79cb2d9_r8ec}}",
            binding: 'code',
            defaultI18nValue: '编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name_c44d08f4_082r',
            name: "{{name_c44d08f4_082r}}",
            binding: 'name',
            defaultI18nValue: '名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark_21ed9883_1eg7',
            name: "{{remark_21ed9883_1eg7}}",
            binding: 'remark',
            defaultI18nValue: '备注',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state_9ffaba7a_v1dw',
            name: "{{state_9ffaba7a_v1dw}}",
            binding: 'state',
            defaultI18nValue: '状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "state", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'organization_62270c20_lb6d',
            name: "{{organization_62270c20_lb6d}}",
            binding: 'organization',
            defaultI18nValue: '组织',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "organization", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'gender_429efa25_to3c',
            name: "{{gender_429efa25_to3c}}",
            binding: 'gender',
            defaultI18nValue: '性别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'countryOrArea_d6a89160_03rq',
            name: "{{countryOrArea_d6a89160_03rq}}",
            binding: 'countryOrArea',
            defaultI18nValue: '所属国家或地区',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "countryOrArea", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'location_508ce566_9ubr',
            name: "{{location_508ce566_9ubr}}",
            binding: 'location',
            defaultI18nValue: '常驻地',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "location", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'postID_3cfd3482_zod6',
            name: "{{postID_3cfd3482_zod6}}",
            binding: 'postID',
            defaultI18nValue: '职级',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "postID", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'category_c97816d4_m7ug',
            name: "{{category_c97816d4_m7ug}}",
            binding: 'category',
            defaultI18nValue: '人员类别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "category", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'displayName_57101eee_9bw2',
            name: "{{displayName_57101eee_9bw2}}",
            binding: 'displayName',
            defaultI18nValue: '显示姓名',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "displayName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone_66c54664_nb5m',
            name: "{{telephone_66c54664_nb5m}}",
            binding: 'telephone',
            defaultI18nValue: '联系电话',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'secret_47662b25_581g',
            name: "{{secret_47662b25_581g}}",
            binding: 'secret',
            defaultI18nValue: '密级',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "secret", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'mailbox_e17ee73a_8d03',
            name: "{{mailbox_e17ee73a_8d03}}",
            binding: 'mailbox',
            defaultI18nValue: '邮箱',
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
