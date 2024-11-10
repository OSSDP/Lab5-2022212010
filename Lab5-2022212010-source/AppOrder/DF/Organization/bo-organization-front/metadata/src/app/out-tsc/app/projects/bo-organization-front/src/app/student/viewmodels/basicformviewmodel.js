import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel } from '@farris/devkit';
var BasicFormViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormViewmodel, _super);
    function BasicFormViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        return _this;
    }
    BasicFormViewmodel = tslib_1.__decorate([
        Injectable()
    ], BasicFormViewmodel);
    return BasicFormViewmodel;
}(ViewModel));
export { BasicFormViewmodel };
