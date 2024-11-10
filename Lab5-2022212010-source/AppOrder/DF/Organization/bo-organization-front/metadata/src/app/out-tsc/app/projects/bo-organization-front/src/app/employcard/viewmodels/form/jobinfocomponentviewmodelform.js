import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var JobinfoComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(JobinfoComponentViewmodelForm, _super);
    function JobinfoComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'company',
            name: "{{company_420c3a35_2gnr}}",
            binding: 'company',
            updateOn: 'blur',
            defaultI18nValue: '工作单位',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], JobinfoComponentViewmodelForm.prototype, "company", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'timeInterval',
            name: "{{timeInterval_c1c46d6f_edm7}}",
            binding: 'timeInterval',
            updateOn: 'blur',
            defaultI18nValue: '时间区间',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], JobinfoComponentViewmodelForm.prototype, "timeInterval", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'position',
            name: "{{position_c51cd3a1_v04x}}",
            binding: 'position',
            updateOn: 'blur',
            defaultI18nValue: '岗位',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], JobinfoComponentViewmodelForm.prototype, "position", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'salary',
            name: "{{salary_3b56eedf_okgp}}",
            binding: 'salary',
            updateOn: 'change',
            defaultI18nValue: '薪资',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], JobinfoComponentViewmodelForm.prototype, "salary", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'certifier',
            name: "{{certifier_2688290d_h8l0}}",
            binding: 'certifier',
            updateOn: 'blur',
            defaultI18nValue: '证明人',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], JobinfoComponentViewmodelForm.prototype, "certifier", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'telephone',
            name: "{{telephone_8ff4aeca_vykt}}",
            binding: 'telephone',
            updateOn: 'blur',
            defaultI18nValue: '证明人联系方式',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], JobinfoComponentViewmodelForm.prototype, "telephone", void 0);
    JobinfoComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '工作信息',
            enableValidate: true
        }),
        Injectable()
    ], JobinfoComponentViewmodelForm);
    return JobinfoComponentViewmodelForm;
}(Form));
export { JobinfoComponentViewmodelForm };
