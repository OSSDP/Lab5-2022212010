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
            id: 'id',
            name: "{{id_e793c221_1nzc}}",
            binding: 'id',
            updateOn: 'blur',
            defaultI18nValue: '主键',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'version',
            name: "{{version_9eb823f7_sasv}}",
            binding: 'version',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '版本',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "version", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'code',
            name: "{{code_60bea67e_49il}}",
            binding: 'code',
            updateOn: 'blur',
            defaultI18nValue: '编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name',
            name: "{{name_316a9d3c_4tqx}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark',
            name: "{{remark_f1b6442a_yhbi}}",
            binding: 'remark',
            updateOn: 'blur',
            defaultI18nValue: '备注',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state',
            name: "{{state_3a5365bd_kvai}}",
            binding: 'state',
            updateOn: 'blur',
            defaultI18nValue: '状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "state", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'organization',
            name: "{{organization_e473ce45_t1cl}}",
            binding: 'organization',
            updateOn: 'blur',
            defaultI18nValue: '组织',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "organization", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'gender',
            name: "{{gender_58fd9314_3uve}}",
            binding: 'gender',
            updateOn: 'blur',
            defaultI18nValue: '性别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'countryOrArea',
            name: "{{countryOrArea_d74fa6c7_uuzf}}",
            binding: 'countryOrArea',
            updateOn: 'blur',
            defaultI18nValue: '所属国家或地区',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "countryOrArea", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'location',
            name: "{{location_38a3f824_lq1v}}",
            binding: 'location',
            updateOn: 'blur',
            defaultI18nValue: '常驻地',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "location", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'postID',
            name: "{{postID_fe7c6d11_pzus}}",
            binding: 'postID',
            updateOn: 'blur',
            defaultI18nValue: '职级',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "postID", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'category',
            name: "{{category_13aa1e37_gpkh}}",
            binding: 'category',
            updateOn: 'blur',
            defaultI18nValue: '人员类别',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "category", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'displayName',
            name: "{{displayName_cf08e0f6_f64n}}",
            binding: 'displayName',
            updateOn: 'blur',
            defaultI18nValue: '显示姓名',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "displayName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone',
            name: "{{telephone_03cb4977_ilcq}}",
            binding: 'telephone',
            updateOn: 'blur',
            defaultI18nValue: '联系电话',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'secret',
            name: "{{secret_fb560c3d_r80g}}",
            binding: 'secret',
            updateOn: 'blur',
            defaultI18nValue: '密级',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "secret", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'mailbox',
            name: "{{mailbox_ca7ab15d_acak}}",
            binding: 'mailbox',
            updateOn: 'blur',
            defaultI18nValue: '邮箱',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "mailbox", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '行政人员',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
