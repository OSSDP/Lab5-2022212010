import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var CourseProxy = /** @class */ (function (_super) {
    tslib_1.__extends(CourseProxy, _super);
    function CourseProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/apporder/df/v1.0/course_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    CourseProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], CourseProxy);
    return CourseProxy;
}(BefProxy));
export { CourseProxy };
