
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "email",
    nodeCode: "email"
})
export class EmailD61DEntity extends Entity {

    @NgField({
        originalDataField: 'Email',
        dataField: 'email',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'email.Email',

        validRules: [
            {
                type: 'maxLength',
                constraints: [500],
                message: '最大长度为500',
            }
        ]
    })
    email: string;

}