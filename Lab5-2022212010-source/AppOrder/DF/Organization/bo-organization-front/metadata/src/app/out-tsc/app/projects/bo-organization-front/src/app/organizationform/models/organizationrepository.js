import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { OrganizationEntity } from './entities/organizationentity';
import { OrganizationProxy } from './organizationproxy';
var OrganizationRepository = /** @class */ (function (_super) {
    tslib_1.__extends(OrganizationRepository, _super);
    function OrganizationRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'OrganizationRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(OrganizationProxy, null);
        return _this;
    }
    OrganizationRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/apporder/df/v1.0/organizationform_frm',
            entityType: OrganizationEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], OrganizationRepository);
    return OrganizationRepository;
}(BefRepository));
export { OrganizationRepository };
