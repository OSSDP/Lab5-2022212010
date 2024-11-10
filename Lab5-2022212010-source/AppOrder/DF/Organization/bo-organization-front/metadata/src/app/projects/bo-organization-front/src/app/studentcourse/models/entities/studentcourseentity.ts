
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "StudentCourse",
    nodeCode: "studentCourses",
    allowEmpty: true
})
export class StudentCourseEntity extends Entity {

    @NgField({
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
    })
    id: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
        enableTimeZone: true,
    })
    version: string;

    @NgField({
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
    })
    student_id: string;

    @NgField({
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
    })
    course_id: string;

    @NgField({
        originalDataField: 'State',
        dataField: 'state',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'xz',
        path: 'State',
    })
    state: any;

    @NgField({
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
    })
    grade: any;

}