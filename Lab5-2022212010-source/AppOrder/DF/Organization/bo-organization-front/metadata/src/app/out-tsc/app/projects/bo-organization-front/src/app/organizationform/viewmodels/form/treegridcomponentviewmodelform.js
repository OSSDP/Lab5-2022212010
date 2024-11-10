import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var TreeGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(TreeGridComponentViewmodelForm, _super);
    function TreeGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'code',
            name: "{{code_2a2ef993_kge5}}",
            binding: 'code',
            updateOn: 'blur',
            defaultI18nValue: '编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], TreeGridComponentViewmodelForm.prototype, "code", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'name',
            name: "{{shortName_c85c7df9_fbyj}}",
            binding: 'name',
            updateOn: 'blur',
            defaultI18nValue: '名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], TreeGridComponentViewmodelForm.prototype, "name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'dutyLevel',
            name: "{{dutyLevel_125fb816_ketd}}",
            binding: 'dutyLevel',
            updateOn: 'blur',
            defaultI18nValue: '层级',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], TreeGridComponentViewmodelForm.prototype, "dutyLevel", void 0);
    TreeGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '行政组织',
            enableValidate: false
        }),
        Injectable()
    ], TreeGridComponentViewmodelForm);
    return TreeGridComponentViewmodelForm;
}(Form));
export { TreeGridComponentViewmodelForm };
