import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' }, ɵ1 = { type: 'string' }, ɵ2 = { type: 'string' }, ɵ3 = { type: 'string' };
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
    function RootViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        _this.childViewModels = {
            'BasicFormViewmodel': 'basicFormViewmodel',
            'JobinfoComponentViewmodel': 'jobinfoComponentViewmodel',
            'EduinfoComponentViewmodel': 'eduinfoComponentViewmodel'
        };
        return _this;
    }
    RootViewmodel.prototype.Load1 = function (commandParam) { return; };
    RootViewmodel.prototype.LoadAndAdd1 = function (commandParam) { return; };
    RootViewmodel.prototype.LoadAndView1 = function (commandParam) { return; };
    RootViewmodel.prototype.LoadAndEdit1 = function (commandParam) { return; };
    RootViewmodel.prototype.Add1 = function (commandParam) { return; };
    RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
    RootViewmodel.prototype.Save1 = function (commandParam) { return; };
    RootViewmodel.prototype.Cancel1 = function (commandParam) { return; };
    RootViewmodel.prototype.ChangeItem1 = function (commandParam) { return; };
    RootViewmodel.prototype.ChangeItem2 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'Load1',
            params: {
                action: '{UISTATE~/#{root-component}/action}'
            },
            paramDescriptions: {
                action: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Load1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'LoadAndAdd1',
            params: {
                transitionAction: 'Create'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "LoadAndAdd1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'LoadAndView1',
            params: {
                id: '{UISTATE~/#{root-component}/id}',
                transitionAction: 'Cancel'
            },
            paramDescriptions: {
                id: ɵ0,
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "LoadAndView1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'LoadAndEdit1',
            params: {
                id: '{UISTATE~/#{root-component}/id}',
                transitionAction: 'Edit'
            },
            paramDescriptions: {
                id: ɵ1,
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "LoadAndEdit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Add1',
            params: {
                transitionAction: 'Create'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Edit1',
            params: {
                transitionAction: 'Edit'
            },
            paramDescriptions: {
                transitionAction: { type: '' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Edit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Save1',
            params: {
                transitionAction: 'Cancel'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Save1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Cancel1',
            params: {
                transitionAction: 'Cancel'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Cancel1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangeItem1',
            params: {
                id: '{DATA~/#{root-component}/id}',
                type: 'prev',
                transitionAction: 'Cancel'
            },
            paramDescriptions: {
                id: ɵ2,
                type: { type: 'string' },
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "ChangeItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangeItem2',
            params: {
                id: '{DATA~/#{root-component}/id}',
                type: 'next',
                transitionAction: 'Cancel'
            },
            paramDescriptions: {
                id: ɵ3,
                type: { type: 'string' },
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "ChangeItem2", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
