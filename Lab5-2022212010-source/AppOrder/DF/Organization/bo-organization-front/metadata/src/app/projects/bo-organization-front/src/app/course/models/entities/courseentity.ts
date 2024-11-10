
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Course",
    nodeCode: "courses",
    allowEmpty: true
})
export class CourseEntity extends Entity {

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
    })
    courseId: string;

    @NgField({
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
    })
    course_name: string;

    @NgField({
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
    })
    credits: string;

    @NgField({
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
    })
    teacher_id: string;

    @NgField({
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
    })
    max_students: string;

    @NgField({
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
    })
    semester: string;

    @NgField({
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
    })
    schedule: string;

    @NgField({
        originalDataField: 'State',
        dataField: 'state',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'jxz',
        path: 'State',
    })
    state: any;

}