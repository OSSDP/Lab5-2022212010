import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var TreeGridComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(TreeGridComponentViewmodel, _super);
    function TreeGridComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        return _this;
    }
    TreeGridComponentViewmodel.prototype.LoadTree1 = function (commandParam) { return; };
    TreeGridComponentViewmodel.prototype.LoadCard1 = function (commandParam) { return; };
    TreeGridComponentViewmodel.prototype.AddSibling1 = function (commandParam) { return; };
    TreeGridComponentViewmodel.prototype.AddChild1 = function (commandParam) { return; };
    TreeGridComponentViewmodel.prototype.Remove1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'LoadTree1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], TreeGridComponentViewmodel.prototype, "LoadTree1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'LoadCard1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], TreeGridComponentViewmodel.prototype, "LoadCard1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'AddSibling1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], TreeGridComponentViewmodel.prototype, "AddSibling1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'AddChild1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], TreeGridComponentViewmodel.prototype, "AddChild1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Remove1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], TreeGridComponentViewmodel.prototype, "Remove1", null);
    TreeGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], TreeGridComponentViewmodel);
    return TreeGridComponentViewmodel;
}(ViewModel));
export { TreeGridComponentViewmodel };
