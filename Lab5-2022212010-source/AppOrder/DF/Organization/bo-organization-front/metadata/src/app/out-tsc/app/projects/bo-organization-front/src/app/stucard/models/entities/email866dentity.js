import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Email866dEntity = /** @class */ (function (_super) {
    tslib_1.__extends(Email866dEntity, _super);
    function Email866dEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], Email866dEntity.prototype, "email", void 0);
    Email866dEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Email",
            nodeCode: "email"
        })
    ], Email866dEntity);
    return Email866dEntity;
}(Entity));
export { Email866dEntity };
