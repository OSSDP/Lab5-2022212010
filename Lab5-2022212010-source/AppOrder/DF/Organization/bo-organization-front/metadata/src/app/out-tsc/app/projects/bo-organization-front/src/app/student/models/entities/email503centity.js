import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Email503cEntity = /** @class */ (function (_super) {
    tslib_1.__extends(Email503cEntity, _super);
    function Email503cEntity() {
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
    ], Email503cEntity.prototype, "email", void 0);
    Email503cEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Email",
            nodeCode: "email"
        })
    ], Email503cEntity);
    return Email503cEntity;
}(Entity));
export { Email503cEntity };
