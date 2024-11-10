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
            id: 'course_name_03e8313b_71j3',
            name: "{{course_name_03e8313b_71j3}}",
            binding: 'course_name',
            updateOn: 'blur',
            defaultI18nValue: '课程名称',
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
    ], BasicFormViewmodelForm.prototype, "course_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'credits_ded82c86_trz4',
            name: "{{credits_ded82c86_trz4}}",
            binding: 'credits',
            updateOn: 'blur',
            defaultI18nValue: '课程学分',
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
    ], BasicFormViewmodelForm.prototype, "credits", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'teacher_id_e62946f4_3geq',
            name: "{{teacher_id_e62946f4_3geq}}",
            binding: 'teacher_id',
            updateOn: 'blur',
            defaultI18nValue: '授课教师',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "teacher_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'max_students_87371daf_flsf',
            name: "{{max_students_87371daf_flsf}}",
            binding: 'max_students',
            updateOn: 'blur',
            defaultI18nValue: '最大选课人数',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "max_students", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'semester_ed40d007_ybja',
            name: "{{semester_ed40d007_ybja}}",
            binding: 'semester',
            updateOn: 'blur',
            defaultI18nValue: '课程学期',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "semester", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'schedule_47f274b5_solj',
            name: "{{schedule_47f274b5_solj}}",
            binding: 'schedule',
            updateOn: 'blur',
            defaultI18nValue: '课程安排',
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
    ], BasicFormViewmodelForm.prototype, "schedule", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state_f8a51308_ceb3',
            name: "{{state_f8a51308_ceb3}}",
            binding: 'state',
            updateOn: 'change',
            defaultI18nValue: '课程状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "state", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '课程表',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
