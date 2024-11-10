import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StateMachine, State, NgState, NgRenderState } from '@farris/devkit';
var ɵ0 = function (context) { return context.state === 'init'; }, ɵ1 = function (context) { return context.state === 'init'; }, ɵ2 = function (context) { return context.state === 'init'; }, ɵ3 = function (context) { return context.state === 'init'; };
var RootViewmodelStateMachine = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodelStateMachine, _super);
    function RootViewmodelStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgState({
            initialState: true,
            name: "初始"
        }),
        tslib_1.__metadata("design:type", State)
    ], RootViewmodelStateMachine.prototype, "init", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ0
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canView", void 0);
    tslib_1.__decorate([
        NgRenderState({
            render: ɵ1
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
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
    ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
    RootViewmodelStateMachine = tslib_1.__decorate([
        Injectable()
    ], RootViewmodelStateMachine);
    return RootViewmodelStateMachine;
}(StateMachine));
export { RootViewmodelStateMachine };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
