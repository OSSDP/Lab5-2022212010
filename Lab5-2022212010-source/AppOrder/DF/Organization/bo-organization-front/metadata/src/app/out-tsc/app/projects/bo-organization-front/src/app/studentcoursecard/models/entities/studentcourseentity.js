import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var StudentCourseEntity = /** @class */ (function (_super) {
    tslib_1.__extends(StudentCourseEntity, _super);
    function StudentCourseEntity() {
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
    ], StudentCourseEntity.prototype, "id", void 0);
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
    ], StudentCourseEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'student_id',
            dataField: 'student_id',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'student_id',
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
    ], StudentCourseEntity.prototype, "student_id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'course_id',
            dataField: 'course_id',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'course_id',
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
    ], StudentCourseEntity.prototype, "course_id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'State',
            dataField: 'state',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'xz',
            path: 'State',
        }),
        tslib_1.__metadata("design:type", Object)
    ], StudentCourseEntity.prototype, "state", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'grade',
            dataField: 'grade',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'grade',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", Object)
    ], StudentCourseEntity.prototype, "grade", void 0);
    StudentCourseEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "StudentCourse",
            nodeCode: "studentCourses"
        })
    ], StudentCourseEntity);
    return StudentCourseEntity;
}(Entity));
export { StudentCourseEntity };
