import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumberFdbdEntity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumberFdbdEntity, _super);
    function PhoneNumberFdbdEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], PhoneNumberFdbdEntity.prototype, "phoneNumber", void 0);
    PhoneNumberFdbdEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "phone",
            nodeCode: "phone"
        })
    ], PhoneNumberFdbdEntity);
    return PhoneNumberFdbdEntity;
}(Entity));
export { PhoneNumberFdbdEntity };
