import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var EduInfoEntity = /** @class */ (function (_super) {
    tslib_1.__extends(EduInfoEntity, _super);
    function EduInfoEntity() {
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
    ], EduInfoEntity.prototype, "id", void 0);
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
    ], EduInfoEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'EmpolyeeID',
            dataField: 'empolyeeID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'EmpolyeeID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EduInfoEntity.prototype, "empolyeeID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SchoolName',
            dataField: 'schoolName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'SchoolName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EduInfoEntity.prototype, "schoolName", void 0);
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
    ], EduInfoEntity.prototype, "timeInterval", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'StudyType',
            dataField: 'studyType',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'StudyType',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EduInfoEntity.prototype, "studyType", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Major',
            dataField: 'major',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Major',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EduInfoEntity.prototype, "major", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Education',
            dataField: 'education',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Education',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EduInfoEntity.prototype, "education", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'EduSystem',
            dataField: 'eduSystem',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'EduSystem',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EduInfoEntity.prototype, "eduSystem", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Degree',
            dataField: 'degree',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Degree',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], EduInfoEntity.prototype, "degree", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'IsFirstDegree',
            dataField: 'isFirstDegree',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'IsFirstDegree',
        }),
        tslib_1.__metadata("design:type", Object)
    ], EduInfoEntity.prototype, "isFirstDegree", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'IsHighest',
            dataField: 'isHighest',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'IsHighest',
        }),
        tslib_1.__metadata("design:type", Object)
    ], EduInfoEntity.prototype, "isHighest", void 0);
    EduInfoEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "EduInfo",
            nodeCode: "eduInfos",
            allowEmpty: true
        })
    ], EduInfoEntity);
    return EduInfoEntity;
}(Entity));
export { EduInfoEntity };
