import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { PhoneNumber46c7Entity } from './phonenumber46c7entity';
import { Email503cEntity } from './email503centity';
var StudentEntity = /** @class */ (function (_super) {
    tslib_1.__extends(StudentEntity, _super);
    function StudentEntity() {
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
    ], StudentEntity.prototype, "id", void 0);
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
    ], StudentEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'student_id',
            dataField: 'student_id',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'student_id',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentEntity.prototype, "student_id", void 0);
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
    ], StudentEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'gender',
            dataField: 'gender',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'man',
            path: 'gender',
        }),
        tslib_1.__metadata("design:type", Object)
    ], StudentEntity.prototype, "gender", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'password',
            dataField: 'password',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'password',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentEntity.prototype, "password", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'birth',
            dataField: 'birth',
            originalDataFieldType: 'Date',
            initValue: '0001-01-01T00:00:00',
            path: 'birth',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], StudentEntity.prototype, "birth", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'major',
            dataField: 'major',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'cs',
            path: 'major',
        }),
        tslib_1.__metadata("design:type", Object)
    ], StudentEntity.prototype, "major", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'State',
            dataField: 'state',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'zc',
            path: 'State',
        }),
        tslib_1.__metadata("design:type", Object)
    ], StudentEntity.prototype, "state", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'phone',
            originalDataField: 'phone',
            type: PhoneNumber46c7Entity
        }),
        tslib_1.__metadata("design:type", PhoneNumber46c7Entity)
    ], StudentEntity.prototype, "phone", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'email',
            originalDataField: 'Email',
            type: Email503cEntity
        }),
        tslib_1.__metadata("design:type", Email503cEntity)
    ], StudentEntity.prototype, "email", void 0);
    StudentEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Student",
            nodeCode: "students",
            allowEmpty: true
        })
    ], StudentEntity);
    return StudentEntity;
}(Entity));
export { StudentEntity };
