
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Email",
    nodeCode: "email"
})
export class Email503cEntity extends Entity {

    @NgField({
        originalDataField: 'Email',
        dataField: 'email',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Email.Email',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [500],
                message: '最大长度为500',
            }
        ]
    })
    email: string;

}