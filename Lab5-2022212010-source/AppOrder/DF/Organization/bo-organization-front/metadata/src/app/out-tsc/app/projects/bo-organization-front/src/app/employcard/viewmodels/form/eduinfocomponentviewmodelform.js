import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var EduinfoComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(EduinfoComponentViewmodelForm, _super);
    function EduinfoComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'empolyeeID',
            name: "{{empolyeeID_54068d87_wp5l}}",
            binding: 'empolyeeID',
            updateOn: 'blur',
            defaultI18nValue: '人员ID',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "empolyeeID", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'schoolName',
            name: "{{schoolName_3100ddda_di17}}",
            binding: 'schoolName',
            updateOn: 'blur',
            defaultI18nValue: '学校名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "schoolName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'timeInterval',
            name: "{{timeInterval_556dd1d1_8rcf}}",
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
    ], EduinfoComponentViewmodelForm.prototype, "timeInterval", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'studyType',
            name: "{{studyType_2f896fda_h66a}}",
            binding: 'studyType',
            updateOn: 'blur',
            defaultI18nValue: '学习形式',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "studyType", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'major',
            name: "{{major_5e64f7eb_fdno}}",
            binding: 'major',
            updateOn: 'blur',
            defaultI18nValue: '专业',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "major", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'education',
            name: "{{education_f8b3b3e8_azw8}}",
            binding: 'education',
            updateOn: 'blur',
            defaultI18nValue: '学历',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "education", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'eduSystem',
            name: "{{eduSystem_50d4bac9_bhm8}}",
            binding: 'eduSystem',
            updateOn: 'blur',
            defaultI18nValue: '学制',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "eduSystem", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'degree',
            name: "{{degree_304819a8_wsms}}",
            binding: 'degree',
            updateOn: 'blur',
            defaultI18nValue: '学位',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "degree", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'isFirstDegree',
            name: "{{isFirstDegree_d1e3393b_3ncw}}",
            binding: 'isFirstDegree',
            updateOn: 'change',
            defaultI18nValue: '是否第一学历',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "isFirstDegree", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'isHighest',
            name: "{{isHighest_290b3ac4_z4oq}}",
            binding: 'isHighest',
            updateOn: 'change',
            defaultI18nValue: '是否最高学历',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], EduinfoComponentViewmodelForm.prototype, "isHighest", void 0);
    EduinfoComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '教育信息',
            enableValidate: true
        }),
        Injectable()
    ], EduinfoComponentViewmodelForm);
    return EduinfoComponentViewmodelForm;
}(Form));
export { EduinfoComponentViewmodelForm };
