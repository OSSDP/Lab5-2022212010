import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var JobInfoEntity = /** @class */ (function (_super) {
    tslib_1.__extends(JobInfoEntity, _super);
    function JobInfoEntity() {
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
    ], JobInfoEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ParentID',
            dataField: 'parentID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ParentID',
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
    ], JobInfoEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Company',
            dataField: 'company',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Company',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], JobInfoEntity.prototype, "company", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TimeInterval',
            dataField: 'timeInterval',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'TimeInterval',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], JobInfoEntity.prototype, "timeInterval", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Position',
            dataField: 'position',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Position',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], JobInfoEntity.prototype, "position", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Salary',
            dataField: 'salary',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'Salary',
        }),
        tslib_1.__metadata("design:type", Object)
    ], JobInfoEntity.prototype, "salary", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Certifier',
            dataField: 'certifier',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Certifier',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], JobInfoEntity.prototype, "certifier", void 0);
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
    ], JobInfoEntity.prototype, "telephone", void 0);
    JobInfoEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "JobInfo",
            nodeCode: "jobInfos"
        })
    ], JobInfoEntity);
    return JobInfoEntity;
}(Entity));
export { JobInfoEntity };
