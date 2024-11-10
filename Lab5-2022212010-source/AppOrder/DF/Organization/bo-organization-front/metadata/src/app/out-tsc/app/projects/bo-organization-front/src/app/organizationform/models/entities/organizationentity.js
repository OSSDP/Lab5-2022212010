import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { PathHierarchyInfo4397Entity } from './pathhierarchyinfo4397entity';
var OrganizationEntity = /** @class */ (function (_super) {
    tslib_1.__extends(OrganizationEntity, _super);
    function OrganizationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'id',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ID',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                },
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Version',
            dataField: 'version',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'Version',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Code',
            dataField: 'code',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Code',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "code", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'DutyLevel',
            dataField: 'dutyLevel',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: '01',
            path: 'DutyLevel',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrganizationEntity.prototype, "dutyLevel", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Leader',
            dataField: 'leader',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Leader',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "leader", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Owner',
            dataField: 'owner',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Owner',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "owner", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Area',
            dataField: 'area',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Area',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [255],
                    message: '最大长度为255',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "area", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Currency',
            dataField: 'currency',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'rmb',
            path: 'Currency',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrganizationEntity.prototype, "currency", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Summary',
            dataField: 'summary',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Summary',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], OrganizationEntity.prototype, "summary", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Flag',
            dataField: 'flag',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'Flag',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrganizationEntity.prototype, "flag", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderCode',
            dataField: 'orderCode',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'OrderCode',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrganizationEntity.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'treeInfo',
            originalDataField: 'TreeInfo',
            hierarchyType: 'path',
            type: PathHierarchyInfo4397Entity
        }),
        tslib_1.__metadata("design:type", PathHierarchyInfo4397Entity)
    ], OrganizationEntity.prototype, "treeInfo", void 0);
    OrganizationEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Organization",
            nodeCode: "organizations"
        })
    ], OrganizationEntity);
    return OrganizationEntity;
}(Entity));
export { OrganizationEntity };
