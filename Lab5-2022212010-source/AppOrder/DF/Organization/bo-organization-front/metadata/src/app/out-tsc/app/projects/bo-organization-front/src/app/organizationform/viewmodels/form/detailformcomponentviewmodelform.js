import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponentViewmodelForm, _super);
    function DetailFormComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'code_2a2ef993_3f3b',
            name: "{{code_2a2ef993_3f3b}}",
            binding: 'code',
            updateOn: 'blur',
            defaultI18nValue: '编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'shortName_c85c7df9_03wl',
            name: "{{shortName_c85c7df9_03wl}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'dutyLevel_125fb816_uixh',
            name: "{{dutyLevel_125fb816_uixh}}",
            binding: 'dutyLevel',
            updateOn: 'blur',
            defaultI18nValue: '层级',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "dutyLevel", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'leader_a9cc51db_sy5i',
            name: "{{leader_a9cc51db_sy5i}}",
            binding: 'leader',
            updateOn: 'blur',
            defaultI18nValue: '分管领导',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "leader", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'owner_1659abe1_k0qx',
            name: "{{owner_1659abe1_k0qx}}",
            binding: 'owner',
            updateOn: 'blur',
            defaultI18nValue: '负责人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "owner", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'area_922add7f_m7et',
            name: "{{area_922add7f_m7et}}",
            binding: 'area',
            updateOn: 'blur',
            defaultI18nValue: '国家或地区',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "area", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'currency_3cd5ae49_ir1e',
            name: "{{currency_3cd5ae49_ir1e}}",
            binding: 'currency',
            updateOn: 'blur',
            defaultI18nValue: '币种',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "currency", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'summary_30eb4bb2_w7ia',
            name: "{{summary_30eb4bb2_w7ia}}",
            binding: 'summary',
            updateOn: 'blur',
            defaultI18nValue: '摘要',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "summary", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'flag_38c372ff_sydv',
            name: "{{flag_38c372ff_sydv}}",
            binding: 'flag',
            updateOn: 'change',
            defaultI18nValue: '启用标识',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "flag", void 0);
    DetailFormComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '行政组织',
            enableValidate: true
        }),
        Injectable()
    ], DetailFormComponentViewmodelForm);
    return DetailFormComponentViewmodelForm;
}(Form));
export { DetailFormComponentViewmodelForm };
