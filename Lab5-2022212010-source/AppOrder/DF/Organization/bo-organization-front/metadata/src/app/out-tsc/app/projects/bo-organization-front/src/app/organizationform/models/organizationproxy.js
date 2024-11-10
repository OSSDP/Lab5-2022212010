import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var OrganizationProxy = /** @class */ (function (_super) {
    tslib_1.__extends(OrganizationProxy, _super);
    function OrganizationProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/apporder/df/v1.0/organizationform_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    OrganizationProxy.prototype.PathHierarchyCreateSibling = function (dataID) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatesibling', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                dataID: dataID,
            }
        };
        return this.invoke(url, method, options);
    };
    OrganizationProxy.prototype.PathHierarchyCreateChildLayer = function (dataID) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatechildlayer', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                dataID: dataID,
            }
        };
        return this.invoke(url, method, options);
    };
    OrganizationProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], OrganizationProxy);
    return OrganizationProxy;
}(BefProxy));
export { OrganizationProxy };
