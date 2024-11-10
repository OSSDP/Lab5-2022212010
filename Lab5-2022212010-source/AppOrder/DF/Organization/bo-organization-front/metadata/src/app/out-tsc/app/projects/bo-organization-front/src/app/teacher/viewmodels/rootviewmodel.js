import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
    function RootViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        _this.childViewModels = {
            'DataGridComponentViewmodel': 'dataGridComponentViewmodel'
        };
        return _this;
    }
    RootViewmodel.prototype.Load1 = function (commandParam) { return; };
    RootViewmodel.prototype.Search1 = function (commandParam) { return; };
    RootViewmodel.prototype.RemoveRows1 = function (commandParam) { return; };
    RootViewmodel.prototype.Add1 = function (commandParam) { return; };
    RootViewmodel.prototype.View1 = function (commandParam) { return; };
    RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
    RootViewmodel.prototype.Remove1 = function (commandParam) { return; };
    RootViewmodel.prototype.Filter1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'Load1',
            params: {
                filter: '',
                sort: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Load1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Search1',
            params: {
                filter: '',
                sort: '',
                pageSize: '',
                pageIndex: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' },
                pageSize: { type: 'int' },
                pageIndex: { type: 'int' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Search1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'RemoveRows1',
            params: {
                ids: '{UISTATE~/#{data-grid-component}/ids}'
            },
            paramDescriptions: {
                ids: { type: 'decimal' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "RemoveRows1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Add1',
            params: {
                url: 'df0de510-c510-474e-80a9-27c04654c084',
                params: '{"action":"LoadAndAdd1"}',
                enableRefresh: '',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'View1',
            params: {
                url: 'df0de510-c510-474e-80a9-27c04654c084',
                params: '{"action":"LoadAndView1", "id":"{DATA~/#{data-grid-component}/id}"}',
                idToView: '{DATA~/#{data-grid-component}/id}',
                enableRefresh: '',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToView: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "View1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Edit1',
            params: {
                url: 'df0de510-c510-474e-80a9-27c04654c084',
                params: '{"action":"LoadAndEdit1", "id":"{DATA~/#{data-grid-component}/id}"}',
                idToEdit: '{DATA~/#{data-grid-component}/id}',
                enableRefresh: '',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToEdit: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Edit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Remove1',
            params: {
                id: '{DATA~/#{data-grid-component}/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Remove1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Filter1',
            params: {
                filter: '{UISTATE~/#{root-component}/originalFilterConditionList}',
                sort: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Filter1", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
export { ɵ0 };
