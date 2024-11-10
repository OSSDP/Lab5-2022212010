import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StateMachine, State, NgState, NgRenderState, NgAction } from '@farris/devkit';
var ɵ0 = function (context) { return context.state === 'init'; }, ɵ1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ2 = function (context) { return context.state === 'init'; }, ɵ3 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ4 = function (context) { return context.state === 'init'; }, ɵ5 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ6 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ7 = function (context) { return context.state === 'add' || context.state === 'edit'; };
var RootViewmodelStateMachine = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodelStateMachine, _super);
    function RootViewmodelStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgState({ name: "新增" }),
        tslib_1.__metadata("design:type", State)
    ], RootViewmodelStateMachine.prototype, "add", void 0);
    tslib_1.__decorate([
        NgState({
            initialState: true,
            name: "初始"
        }),
        tslib_1.__metadata("design:type", State)
    ], RootViewmodelStateMachine.prototype, "init", void 0);
    tslib_1.__decorate([
        NgState({ name: "编辑" }),
        tslib_1.__metadata("design:type", State)
    ], RootViewmodelStateMachine.prototype, "edit", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ0
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ1
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "editable", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ2
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ3
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canRemoveDetail", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ4
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ5
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canSave", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ6
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canCancel", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ7
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canAddDetail", void 0);
    tslib_1.__decorate([
        NgAction({
            transitTo: 'init'
        }),
        tslib_1.__metadata("design:type", Function)
    ], RootViewmodelStateMachine.prototype, "Cancel", void 0);
    tslib_1.__decorate([
        NgAction({
            transitTo: 'add'
        }),
        tslib_1.__metadata("design:type", Function)
    ], RootViewmodelStateMachine.prototype, "Create", void 0);
    tslib_1.__decorate([
        NgAction({
            transitTo: 'edit'
        }),
        tslib_1.__metadata("design:type", Function)
    ], RootViewmodelStateMachine.prototype, "Edit", void 0);
    tslib_1.__decorate([
        NgAction({
            transitTo: 'init'
        }),
        tslib_1.__metadata("design:type", Function)
    ], RootViewmodelStateMachine.prototype, "Save", void 0);
    RootViewmodelStateMachine = tslib_1.__decorate([
        Injectable()
    ], RootViewmodelStateMachine);
    return RootViewmodelStateMachine;
}(StateMachine));
export { RootViewmodelStateMachine };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7 };
