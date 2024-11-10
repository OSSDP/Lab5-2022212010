import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var StudentCourseProxy = /** @class */ (function (_super) {
    tslib_1.__extends(StudentCourseProxy, _super);
    function StudentCourseProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/apporder/df/v1.0/studentcoursecard_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    StudentCourseProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], StudentCourseProxy);
    return StudentCourseProxy;
}(BefProxy));
export { StudentCourseProxy };
