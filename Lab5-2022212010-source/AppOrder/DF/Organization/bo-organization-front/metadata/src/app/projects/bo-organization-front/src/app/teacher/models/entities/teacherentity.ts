
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { EmailD61DEntity } from './emaild61dentity';

@NgEntity({
    originalCode: "Teacher",
    nodeCode: "teachers",
    allowEmpty: true
})
export class TeacherEntity extends Entity {

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
        originalDataField: 'department',
        dataField: 'department',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'cs',
        path: 'department',
    })
    department: any;

    @NgField({
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
    })
    password: string;

    @NgObject({
        dataField: 'email',
        originalDataField: 'email',
        type: EmailD61DEntity
    })
    email: EmailD61DEntity;
}