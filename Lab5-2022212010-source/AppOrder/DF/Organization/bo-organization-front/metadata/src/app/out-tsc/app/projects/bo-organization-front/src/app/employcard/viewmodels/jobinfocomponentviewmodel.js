import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var JobinfoComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(JobinfoComponentViewmodel, _super);
    function JobinfoComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/jobInfos';
        _this.dom = {
            "dataGrid_jobinfo": {
                "type": "DataGrid",
                "resourceId": "dataGrid_jobinfo",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid_jobinfo",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "company_420c3a35_2gnr",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "company_420c3a35_2gnr",
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
                            "path": "company",
                            "fullPath": "Company",
                            "isExpression": false,
                            "value": "company"
                        },
                        "dataField": "company",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "工作单位",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "company_420c3a35_5vy3",
                            "defaultI18nValue": "工作单位",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "company_420c3a35_5vy3",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "company",
                                "isExpression": false,
                                "value": "company"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                        "resourceId": "timeInterval_c1c46d6f_edm7",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "timeInterval_c1c46d6f_edm7",
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
                            "path": "timeInterval",
                            "fullPath": "TimeInterval",
                            "isExpression": false,
                            "value": "timeInterval"
                        },
                        "dataField": "timeInterval",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "时间区间",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "timeInterval_c1c46d6f_tybt",
                            "defaultI18nValue": "时间区间",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "timeInterval_c1c46d6f_tybt",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "timeInterval",
                                "isExpression": false,
                                "value": "timeInterval"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                        "resourceId": "position_c51cd3a1_v04x",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "position_c51cd3a1_v04x",
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
                            "path": "position",
                            "fullPath": "Position",
                            "isExpression": false,
                            "value": "position"
                        },
                        "dataField": "position",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "岗位",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "position_c51cd3a1_d3o9",
                            "defaultI18nValue": "岗位",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "position_c51cd3a1_d3o9",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "position",
                                "isExpression": false,
                                "value": "position"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                        "resourceId": "salary_3b56eedf_okgp",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "salary_3b56eedf_okgp",
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
                            "path": "salary",
                            "fullPath": "Salary",
                            "isExpression": false,
                            "value": "salary"
                        },
                        "dataField": "salary",
                        "dataType": "boolean",
                        "multiLanguage": false,
                        "caption": "薪资",
                        "editor": {
                            "type": "CheckBox",
                            "resourceId": "salary_3b56eedf_023p",
                            "defaultI18nValue": "薪资",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "salary_3b56eedf_023p",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "salary",
                                "isExpression": false,
                                "value": "salary"
                            },
                            "disable": false
                        },
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
                        "updateOn": "change",
                        "formatter": {
                            "type": "boolean",
                            "trueText": "是",
                            "falseText": "否"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "certifier_2688290d_h8l0",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "certifier_2688290d_h8l0",
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
                            "path": "certifier",
                            "fullPath": "Certifier",
                            "isExpression": false,
                            "value": "certifier"
                        },
                        "dataField": "certifier",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "证明人",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "certifier_2688290d_36qa",
                            "defaultI18nValue": "证明人",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "certifier_2688290d_36qa",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "certifier",
                                "isExpression": false,
                                "value": "certifier"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                        "resourceId": "telephone_8ff4aeca_vykt",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "telephone_8ff4aeca_vykt",
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
                            "path": "telephone",
                            "fullPath": "Telephone",
                            "isExpression": false,
                            "value": "telephone"
                        },
                        "dataField": "telephone",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "证明人联系方式",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "telephone_8ff4aeca_scfx",
                            "defaultI18nValue": "证明人联系方式",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "telephone_8ff4aeca_scfx",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "telephone",
                                "isExpression": false,
                                "value": "telephone"
                            },
                            "disable": false,
                            "maxLength": 20,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                    }
                ],
                "multiSelect": false,
                "editable": "viewModel.stateMachine['editable']",
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
    JobinfoComponentViewmodel.prototype.jobinfoAddItem1 = function (commandParam) { return; };
    JobinfoComponentViewmodel.prototype.jobinfoRemoveItem1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'jobinfoAddItem1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], JobinfoComponentViewmodel.prototype, "jobinfoAddItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'jobinfoRemoveItem1',
            params: {
                id: '{DATA~/#{jobinfo-component}/jobInfos/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], JobinfoComponentViewmodel.prototype, "jobinfoRemoveItem1", null);
    JobinfoComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], JobinfoComponentViewmodel);
    return JobinfoComponentViewmodel;
}(ViewModel));
export { JobinfoComponentViewmodel };
export { ɵ0 };
