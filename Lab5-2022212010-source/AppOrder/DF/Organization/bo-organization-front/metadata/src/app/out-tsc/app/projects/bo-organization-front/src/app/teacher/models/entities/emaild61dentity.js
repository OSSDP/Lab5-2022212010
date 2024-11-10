import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var EmailD61DEntity = /** @class */ (function (_super) {
    tslib_1.__extends(EmailD61DEntity, _super);
    function EmailD61DEntity() {
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
    ], EmailD61DEntity.prototype, "email", void 0);
    EmailD61DEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "email",
            nodeCode: "email"
        })
    ], EmailD61DEntity);
    return EmailD61DEntity;
}(Entity));
export { EmailD61DEntity };
