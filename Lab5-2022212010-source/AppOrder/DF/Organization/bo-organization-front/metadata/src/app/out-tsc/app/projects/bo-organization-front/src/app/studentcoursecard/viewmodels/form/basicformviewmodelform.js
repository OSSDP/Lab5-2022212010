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
            id: 'student_id_5f2fcc8e_tcym',
            name: "{{student_id_5f2fcc8e_tcym}}",
            binding: 'student_id',
            updateOn: 'blur',
            defaultI18nValue: '学生ID',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "student_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'course_id_77780bd6_iwin',
            name: "{{course_id_77780bd6_iwin}}",
            binding: 'course_id',
            updateOn: 'blur',
            defaultI18nValue: '课程ID',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "course_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state_1ba69cac_vl2z',
            name: "{{state_1ba69cac_vl2z}}",
            binding: 'state',
            updateOn: 'change',
            defaultI18nValue: '选课状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "state", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'grade_5684d932_23p2',
            name: "{{grade_5684d932_23p2}}",
            binding: 'grade',
            updateOn: 'blur',
            defaultI18nValue: '学生成绩',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "grade", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '学生选课表',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
