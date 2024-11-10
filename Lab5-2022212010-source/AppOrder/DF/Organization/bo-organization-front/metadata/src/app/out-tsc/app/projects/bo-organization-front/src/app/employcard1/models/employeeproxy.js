import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var EmployeeProxy = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeeProxy, _super);
    function EmployeeProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/apporder/df/v1.0/employcard1_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    EmployeeProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], EmployeeProxy);
    return EmployeeProxy;
}(BefProxy));
export { EmployeeProxy };
