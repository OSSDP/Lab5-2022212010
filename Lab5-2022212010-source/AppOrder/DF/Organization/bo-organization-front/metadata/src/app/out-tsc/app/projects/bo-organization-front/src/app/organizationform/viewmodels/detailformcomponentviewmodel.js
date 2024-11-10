import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var DetailFormComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponentViewmodel, _super);
    function DetailFormComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        return _this;
    }
    DetailFormComponentViewmodel.prototype.Edit1 = function (commandParam) { return; };
    DetailFormComponentViewmodel.prototype.Save1 = function (commandParam) { return; };
    DetailFormComponentViewmodel.prototype.Cancel1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'Edit1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DetailFormComponentViewmodel.prototype, "Edit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Save1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DetailFormComponentViewmodel.prototype, "Save1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Cancel1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DetailFormComponentViewmodel.prototype, "Cancel1", null);
    DetailFormComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DetailFormComponentViewmodel);
    return DetailFormComponentViewmodel;
}(ViewModel));
export { DetailFormComponentViewmodel };
