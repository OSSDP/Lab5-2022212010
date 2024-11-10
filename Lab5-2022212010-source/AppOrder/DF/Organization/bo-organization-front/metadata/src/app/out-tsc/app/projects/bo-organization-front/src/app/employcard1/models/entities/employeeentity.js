import * as tslib_1 from "tslib";
import { Entity, NgField, EntityList, NgList, NgEntity } from '@farris/devkit';
import { JobInfoEntity } from './jobinfoentity';
import { EduInfoEntity } from './eduinfoentity';
var EmployeeEntity = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeeEntity, _super);
    function EmployeeEntity() {
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
    ], EmployeeEntity.prototype, "id", void 0);
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
    ], EmployeeEntity.prototype, "version", void 0);
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
                    constraints: [1000],
                    message: '最大长度为1000',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "code", void 0);
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
                    constraints: [1000],
                    message: '最大长度为1000',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Remark',
            dataField: 'remark',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Remark',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [1000],
                    message: '最大长度为1000',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'State',
            dataField: 'state',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'State',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [22],
                    message: '最大长度为22',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "state", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Organization',
            dataField: 'organization',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Organization',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "organization", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Gender',
            dataField: 'gender',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Gender',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [22],
                    message: '最大长度为22',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'CountryOrArea',
            dataField: 'countryOrArea',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'CountryOrArea',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [22],
                    message: '最大长度为22',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "countryOrArea", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Location',
            dataField: 'location',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Location',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [22],
                    message: '最大长度为22',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "location", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'PostID',
            dataField: 'postID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'PostID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "postID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Category',
            dataField: 'category',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Category',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "category", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'DisplayName',
            dataField: 'displayName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'DisplayName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "displayName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Telephone',
            dataField: 'telephone',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Telephone',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [20],
                    message: '最大长度为20',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "telephone", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Secret',
            dataField: 'secret',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Secret',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [10],
                    message: '最大长度为10',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "secret", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Mailbox',
            dataField: 'mailbox',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Mailbox',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EmployeeEntity.prototype, "mailbox", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'jobInfos',
            originalDataField: '',
            type: JobInfoEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], EmployeeEntity.prototype, "jobInfos", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'eduInfos',
            originalDataField: '',
            type: EduInfoEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], EmployeeEntity.prototype, "eduInfos", void 0);
    EmployeeEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Employee",
            nodeCode: "employees"
        })
    ], EmployeeEntity);
    return EmployeeEntity;
}(Entity));
export { EmployeeEntity };
