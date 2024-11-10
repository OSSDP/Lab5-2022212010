import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var DataGridComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodel, _super);
    function DataGridComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {
            "dataGrid": {
                "type": "DataGrid",
                "resourceId": "dataGrid",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "student_id_c8a96a10_ug84",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "student_id_c8a96a10_ug84",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "student_id",
                            "fullPath": "student_id",
                            "isExpression": false,
                            "value": "student_id"
                        },
                        "dataField": "student_id",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "学生ID",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "course_id_4d647003_prh6",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "course_id_4d647003_prh6",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "course_id",
                            "fullPath": "course_id",
                            "isExpression": false,
                            "value": "course_id"
                        },
                        "dataField": "course_id",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "课程ID",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "state_d3117fe5_13d1",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "state_d3117fe5_13d1",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "state",
                            "fullPath": "State",
                            "isExpression": false,
                            "value": "state"
                        },
                        "dataField": "state",
                        "dataType": "enum",
                        "multiLanguage": false,
                        "caption": "选课状态",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "enumData": [
                            {
                                "disabled": false,
                                "name": "已选中",
                                "value": "xz"
                            },
                            {
                                "disabled": false,
                                "name": "异常",
                                "value": "yc"
                            }
                        ],
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "change",
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "grade_c87e9cd9_v6jm",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "grade_c87e9cd9_v6jm",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "grade",
                            "fullPath": "grade",
                            "isExpression": false,
                            "value": "grade"
                        },
                        "dataField": "grade",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "学生成绩",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "number",
                            "precision": 2,
                            "thousand": ",",
                            "decimal": "."
                        }
                    }
                ],
                "multiSelect": false,
                "showLineNumber": false,
                "lineNumberTitle": "#",
                "groupTotalText": "Total",
                "filterable": false,
                "groupable": false,
                "rowClass": ""
            }
        };
        return _this;
    }
    DataGridComponentViewmodel.prototype.ChangePage1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.datagridEdit1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.datagridRemove1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangePage1',
            params: {
                loadCommandName: 'Filter1',
                loadCommandFrameId: '#{root-component}'
            },
            paramDescriptions: {
                loadCommandName: { type: 'string' },
                loadCommandFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "ChangePage1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'datagridEdit1',
            params: {
                url: '7cf0def1-9a29-44c7-a7bd-e6d33e6b0d43',
                params: '{"action":"LoadAndEdit1", "id":"{DATA~/#{data-grid-component}/id}"}',
                idToEdit: '',
                enableRefresh: '',
                tabName: '',
                destructuring: ''
            },
            paramDescriptions: {
                url: { type: 'string' },
                params: { type: 'string' },
                idToEdit: { type: 'string' },
                enableRefresh: { type: 'string' },
                tabName: { type: 'string' },
                destructuring: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "datagridEdit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'datagridRemove1',
            params: {
                id: '{DATA~/#{root-component}/id}',
                refreshCommandName: 'Filter1',
                refreshCommandFrameId: '#{root-component}',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ0,
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "datagridRemove1", null);
    DataGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DataGridComponentViewmodel);
    return DataGridComponentViewmodel;
}(ViewModel));
export { DataGridComponentViewmodel };
export { ɵ0 };
