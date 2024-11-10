import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel } from '@farris/devkit';
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
    function RootViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        _this.childViewModels = {
            'TreeGridComponentViewmodel': 'treeGridComponentViewmodel',
            'DetailFormComponentViewmodel': 'detailFormComponentViewmodel'
        };
        return _this;
    }
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
