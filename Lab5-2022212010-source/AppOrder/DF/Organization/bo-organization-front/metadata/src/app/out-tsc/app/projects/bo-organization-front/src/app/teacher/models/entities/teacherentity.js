import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { EmailD61DEntity } from './emaild61dentity';
var TeacherEntity = /** @class */ (function (_super) {
    tslib_1.__extends(TeacherEntity, _super);
    function TeacherEntity() {
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
    ], TeacherEntity.prototype, "id", void 0);
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
    ], TeacherEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'teacher_id',
            dataField: 'teacher_id',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'teacher_id',
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
    ], TeacherEntity.prototype, "teacher_id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'name',
            dataField: 'name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'name',
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
    ], TeacherEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'department',
            dataField: 'department',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'cs',
            path: 'department',
        }),
        tslib_1.__metadata("design:type", Object)
    ], TeacherEntity.prototype, "department", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'password',
            dataField: 'password',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'password',
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
    ], TeacherEntity.prototype, "password", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'email',
            originalDataField: 'email',
            type: EmailD61DEntity
        }),
        tslib_1.__metadata("design:type", EmailD61DEntity)
    ], TeacherEntity.prototype, "email", void 0);
    TeacherEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Teacher",
            nodeCode: "teachers",
            allowEmpty: true
        })
    ], TeacherEntity);
    return TeacherEntity;
}(Entity));
export { TeacherEntity };
