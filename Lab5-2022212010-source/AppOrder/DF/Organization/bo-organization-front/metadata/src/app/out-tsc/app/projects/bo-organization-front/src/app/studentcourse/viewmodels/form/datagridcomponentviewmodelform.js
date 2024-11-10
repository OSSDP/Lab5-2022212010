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
            id: 'student_id',
            name: "{{student_id_c8a96a10_ug84}}",
            binding: 'student_id',
            updateOn: 'blur',
            defaultI18nValue: '学生ID',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "student_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'course_id',
            name: "{{course_id_4d647003_prh6}}",
            binding: 'course_id',
            updateOn: 'blur',
            defaultI18nValue: '课程ID',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "course_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state',
            name: "{{state_d3117fe5_13d1}}",
            binding: 'state',
            updateOn: 'change',
            defaultI18nValue: '选课状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "state", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'grade',
            name: "{{grade_c87e9cd9_v6jm}}",
            binding: 'grade',
            updateOn: 'blur',
            defaultI18nValue: '学生成绩',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "grade", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '学生选课表',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
