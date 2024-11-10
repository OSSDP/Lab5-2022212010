
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { PhoneNumberFdbdEntity } from './phonenumberfdbdentity';
import { Email866dEntity } from './email866dentity';

@NgEntity({
    originalCode: "Student",
    nodeCode: "students"
})
export class StudentEntity extends Entity {

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
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    student_id: string;

    @NgField({
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
    })
    name: string;

    @NgField({
        originalDataField: 'gender',
        dataField: 'gender',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'man',
        path: 'gender',
    })
    gender: any;

    @NgField({
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
    })
    password: string;

    @NgField({
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
    })
    birth: string;

    @NgField({
        originalDataField: 'major',
        dataField: 'major',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'cs',
        path: 'major',
    })
    major: any;

    @NgField({
        originalDataField: 'State',
        dataField: 'state',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'zc',
        path: 'State',
    })
    state: any;

    @NgObject({
        dataField: 'phone',
        originalDataField: 'phone',
        type: PhoneNumberFdbdEntity
    })
    phone: PhoneNumberFdbdEntity;
    @NgObject({
        dataField: 'email',
        originalDataField: 'Email',
        type: Email866dEntity
    })
    email: Email866dEntity;
}