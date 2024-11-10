
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "phone",
    nodeCode: "phone"
})
export class PhoneNumber46c7Entity extends Entity {

    @NgField({
        originalDataField: 'PhoneNumber',
        dataField: 'phoneNumber',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'phone.PhoneNumber',

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
    phoneNumber: string;

}