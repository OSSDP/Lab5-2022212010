import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PhoneNumber46c7Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneNumber46c7Entity, _super);
    function PhoneNumber46c7Entity() {
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
    ], PhoneNumber46c7Entity.prototype, "phoneNumber", void 0);
    PhoneNumber46c7Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "phone",
            nodeCode: "phone"
        })
    ], PhoneNumber46c7Entity);
    return PhoneNumber46c7Entity;
}(Entity));
export { PhoneNumber46c7Entity };
