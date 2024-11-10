import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var EmailC4dCEntity = /** @class */ (function (_super) {
    tslib_1.__extends(EmailC4dCEntity, _super);
    function EmailC4dCEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], EmailC4dCEntity.prototype, "email", void 0);
    EmailC4dCEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "email",
            nodeCode: "email"
        })
    ], EmailC4dCEntity);
    return EmailC4dCEntity;
}(Entity));
export { EmailC4dCEntity };
