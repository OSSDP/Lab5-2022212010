import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var StudentProxy = /** @class */ (function (_super) {
    tslib_1.__extends(StudentProxy, _super);
    function StudentProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/apporder/df/v1.0/stucard_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    StudentProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], StudentProxy);
    return StudentProxy;
}(BefProxy));
export { StudentProxy };
