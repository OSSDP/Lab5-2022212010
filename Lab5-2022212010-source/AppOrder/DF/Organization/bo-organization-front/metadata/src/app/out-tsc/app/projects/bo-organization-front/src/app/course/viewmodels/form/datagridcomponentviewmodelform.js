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
            id: 'courseId',
            name: "{{courseId_f727a729_2l2j}}",
            binding: 'courseId',
            updateOn: 'blur',
            defaultI18nValue: '课程编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "courseId", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'course_name',
            name: "{{course_name_0fe03859_zolf}}",
            binding: 'course_name',
            updateOn: 'blur',
            defaultI18nValue: '课程名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "course_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'credits',
            name: "{{credits_94b90941_e0xq}}",
            binding: 'credits',
            updateOn: 'blur',
            defaultI18nValue: '课程学分',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "credits", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'teacher_id',
            name: "{{teacher_id_15e20fea_lxuh}}",
            binding: 'teacher_id',
            updateOn: 'blur',
            defaultI18nValue: '授课教师',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "teacher_id", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'max_students',
            name: "{{max_students_3b170260_6s75}}",
            binding: 'max_students',
            updateOn: 'blur',
            defaultI18nValue: '最大选课人数',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "max_students", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'semester',
            name: "{{semester_72076de8_1eqr}}",
            binding: 'semester',
            updateOn: 'blur',
            defaultI18nValue: '课程学期',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "semester", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'schedule',
            name: "{{schedule_58813dc6_8qob}}",
            binding: 'schedule',
            updateOn: 'blur',
            defaultI18nValue: '课程安排',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "schedule", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'state',
            name: "{{state_4663043d_cg5t}}",
            binding: 'state',
            updateOn: 'change',
            defaultI18nValue: '课程状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "state", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '课程表',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
