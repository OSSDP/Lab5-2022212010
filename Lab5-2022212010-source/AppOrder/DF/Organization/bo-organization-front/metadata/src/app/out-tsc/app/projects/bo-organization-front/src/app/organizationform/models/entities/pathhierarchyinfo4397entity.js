import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PathHierarchyInfo4397Entity = /** @class */ (function (_super) {
    tslib_1.__extends(PathHierarchyInfo4397Entity, _super);
    function PathHierarchyInfo4397Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Path',
            dataField: 'path',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'TreeInfo.Path',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], PathHierarchyInfo4397Entity.prototype, "path", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Layer',
            dataField: 'layer',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'TreeInfo.Layer',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PathHierarchyInfo4397Entity.prototype, "layer", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'IsDetail',
            dataField: 'isDetail',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'TreeInfo.IsDetail',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PathHierarchyInfo4397Entity.prototype, "isDetail", void 0);
    PathHierarchyInfo4397Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "TreeInfo",
            nodeCode: "treeInfo"
        })
    ], PathHierarchyInfo4397Entity);
    return PathHierarchyInfo4397Entity;
}(Entity));
export { PathHierarchyInfo4397Entity };
