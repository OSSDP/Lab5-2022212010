import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var CourseEntity = /** @class */ (function (_super) {
    tslib_1.__extends(CourseEntity, _super);
    function CourseEntity() {
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
    ], CourseEntity.prototype, "id", void 0);
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
    ], CourseEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'courseId',
            dataField: 'courseId',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'courseId',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], CourseEntity.prototype, "courseId", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'course_name',
            dataField: 'course_name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'course_name',
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
    ], CourseEntity.prototype, "course_name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'credits',
            dataField: 'credits',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'credits',
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
    ], CourseEntity.prototype, "credits", void 0);
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
    ], CourseEntity.prototype, "teacher_id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'max_students',
            dataField: 'max_students',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'max_students',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], CourseEntity.prototype, "max_students", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'semester',
            dataField: 'semester',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'semester',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], CourseEntity.prototype, "semester", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'schedule',
            dataField: 'schedule',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'schedule',
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
    ], CourseEntity.prototype, "schedule", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'State',
            dataField: 'state',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'jxz',
            path: 'State',
        }),
        tslib_1.__metadata("design:type", Object)
    ], CourseEntity.prototype, "state", void 0);
    CourseEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Course",
            nodeCode: "courses"
        })
    ], CourseEntity);
    return CourseEntity;
}(Entity));
export { CourseEntity };
