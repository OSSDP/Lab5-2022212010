import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UIState, NgParam } from '@farris/devkit';
var RootViewmodelUIState = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodelUIState, _super);
    function RootViewmodelUIState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalFilterConditionList = '';
        return _this;
    }
    tslib_1.__decorate([
        NgParam({ originalDataType: "String", category: "locale" }),
        tslib_1.__metadata("design:type", String)
    ], RootViewmodelUIState.prototype, "originalFilterConditionList", void 0);
    RootViewmodelUIState = tslib_1.__decorate([
        Injectable()
    ], RootViewmodelUIState);
    return RootViewmodelUIState;
}(UIState));
export { RootViewmodelUIState };
