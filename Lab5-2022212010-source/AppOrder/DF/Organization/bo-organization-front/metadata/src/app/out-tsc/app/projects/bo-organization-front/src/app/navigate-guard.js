import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { BasePathService } from '@farris/rtf';
/**
 * 运行时定制加载前脚本请求
 */
var NavigateGuard = /** @class */ (function () {
    function NavigateGuard(httpClient) {
        this.httpClient = httpClient;
    }
    NavigateGuard.prototype.canLoad = function (route, segments) {
        var _this = this;
        // 读取当前路由Url地址
        if (!route.data) {
            return true;
        }
        var queryParams = route.data["navigateGuardParameter"];
        if (queryParams) {
            var isRtc = queryParams.get("isRTC") || queryParams.get("isRtc");
            var formMetadataId = queryParams.get('metadataId');
            var isQdpRtc_1 = isRtc === '2';
            var isDynamicForm_1 = isRtc === '3';
            var isCompileForm = isRtc === '1';
            if (formMetadataId && (isQdpRtc_1 || isCompileForm)) {
                var constructRequestBody_1 = function () {
                    var obj = {};
                    obj.dim1 = queryParams.get('dim1');
                    obj.dim2 = queryParams.get('dim2');
                    obj.metadataId = queryParams.get('metadataId');
                    obj.isRootMetadata = queryParams.get('isRootMetadata');
                    obj.isDynamicForm = isDynamicForm_1;
                    return obj;
                };
                var suCodeRequest = this.httpClient.get(BasePathService.convertPath("/api/runtime/bcc/v1.0/template/suCode/" + formMetadataId), {
                    responseType: 'text'
                }).pipe(switchMap(function (suCode) {
                    var requestBody = constructRequestBody_1();
                    if (isQdpRtc_1) {
                        return _this.httpClient.post(BasePathService.convertPath("/api/runtime/bcc/v1.0/qdpdefinition/loadscript"), JSON.stringify(requestBody), {
                            responseType: "text",
                            headers: new HttpHeaders({ 'Content-Type': 'application/text' })
                        });
                    }
                    else {
                        return _this.httpClient.post(BasePathService.convertPath("/api/" + suCode + "/v1.0/template/check/beforeNavigate"), requestBody);
                    }
                })).pipe(map(function () {
                    return true;
                }), catchError(function () { return of(false); }));
                return suCodeRequest;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    NavigateGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], NavigateGuard);
    return NavigateGuard;
}());
export { NavigateGuard };
