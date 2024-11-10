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
    RootViewmodel.prototype.rootAdd1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootEdit1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootView1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootRemoveRows1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootRemove1 = function (commandParam) { return; };
    RootViewmodel.prototype.rootRemove2 = function (commandParam) { return; };
    RootViewmodel.prototype.rootRemoveRows2 = function (commandParam) { return; };
    RootViewmodel.prototype.rootRemove3 = function (commandParam) { return; };
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
                url: '',
                params: '{"action":"LoadAndAdd1"}'
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' }
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
                url: '',
                params: '{"action":"LoadAndView1", "id":"{DATA~/#{data-grid-component}/id}"}',
                idToView: '{DATA~/#{data-grid-component}/id}'
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToView: { type: 'string' }
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
                url: '',
                params: '{"action":"LoadAndEdit1", "id":"{DATA~/#{data-grid-component}/id}"}',
                idToEdit: '{DATA~/#{data-grid-component}/id}'
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToEdit: { type: 'string' }
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
                filter: '{UISTATE~/root-component/originalFilterConditionList}',
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
    tslib_1.__decorate([
        NgCommand({
            name: 'rootAdd1',
            params: {
                url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
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
    ], RootViewmodel.prototype, "rootAdd1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootEdit1',
            params: {
                url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
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
    ], RootViewmodel.prototype, "rootEdit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootView1',
            params: {
                url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
                params: '{"action":"LoadAndView1", "id":"{DATA~/#{data-grid-component}/id}"}',
                idToView: '',
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
    ], RootViewmodel.prototype, "rootView1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootRemoveRows1',
            params: {
                ids: '{DATA~/#{root-component}/id}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                ids: { type: 'decimal' },
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootRemoveRows1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootRemove1',
            params: {
                id: '',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ1,
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootRemove1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootRemove2',
            params: {
                id: '',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ2,
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootRemove2", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootRemoveRows2',
            params: {
                ids: '{DATA~/#{root-component}/version}{DATA~/#{root-component}/student_id}{DATA~/#{root-component}/id}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                ids: { type: 'decimal' },
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootRemoveRows2", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'rootRemove3',
            params: {
                id: '{DATA~/#{root-component}/id}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ3,
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "rootRemove3", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
