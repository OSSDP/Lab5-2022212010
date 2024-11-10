import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var EmailF184Entity = /** @class */ (function (_super) {
    tslib_1.__extends(EmailF184Entity, _super);
    function EmailF184Entity() {
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
    ], EmailF184Entity.prototype, "email", void 0);
    EmailF184Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "email",
            nodeCode: "email"
        })
    ], EmailF184Entity);
    return EmailF184Entity;
}(Entity));
export { EmailF184Entity };
