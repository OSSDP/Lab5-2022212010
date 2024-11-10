import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var EduinfoComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(EduinfoComponentViewmodel, _super);
    function EduinfoComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/eduInfos';
        _this.dom = {
            "dataGrid_eduinfo": {
                "type": "DataGrid",
                "resourceId": "dataGrid_eduinfo",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid_eduinfo",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "empolyeeID_54068d87_wp5l",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "empolyeeID_54068d87_wp5l",
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
                            "path": "empolyeeID",
                            "fullPath": "EmpolyeeID",
                            "isExpression": false,
                            "value": "empolyeeID"
                        },
                        "dataField": "empolyeeID",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "人员ID",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "empolyeeID_54068d87_3ng2",
                            "defaultI18nValue": "人员ID",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "empolyeeID_54068d87_3ng2",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "empolyeeID",
                                "isExpression": false,
                                "value": "empolyeeID"
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
                        "resourceId": "schoolName_3100ddda_di17",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "schoolName_3100ddda_di17",
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
                            "path": "schoolName",
                            "fullPath": "SchoolName",
                            "isExpression": false,
                            "value": "schoolName"
                        },
                        "dataField": "schoolName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "学校名称",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "schoolName_3100ddda_liee",
                            "defaultI18nValue": "学校名称",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "schoolName_3100ddda_liee",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "schoolName",
                                "isExpression": false,
                                "value": "schoolName"
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
                        "resourceId": "timeInterval_556dd1d1_8rcf",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "timeInterval_556dd1d1_8rcf",
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
                            "resourceId": "timeInterval_556dd1d1_emfg",
                            "defaultI18nValue": "时间区间",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "timeInterval_556dd1d1_emfg",
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
                        "resourceId": "studyType_2f896fda_h66a",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "studyType_2f896fda_h66a",
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
                            "path": "studyType",
                            "fullPath": "StudyType",
                            "isExpression": false,
                            "value": "studyType"
                        },
                        "dataField": "studyType",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "学习形式",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "studyType_2f896fda_6ykx",
                            "defaultI18nValue": "学习形式",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "studyType_2f896fda_6ykx",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "studyType",
                                "isExpression": false,
                                "value": "studyType"
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
                        "resourceId": "major_5e64f7eb_fdno",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "major_5e64f7eb_fdno",
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
                            "path": "major",
                            "fullPath": "Major",
                            "isExpression": false,
                            "value": "major"
                        },
                        "dataField": "major",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "专业",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "major_5e64f7eb_zaln",
                            "defaultI18nValue": "专业",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "major_5e64f7eb_zaln",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "major",
                                "isExpression": false,
                                "value": "major"
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
                        "resourceId": "education_f8b3b3e8_azw8",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "education_f8b3b3e8_azw8",
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
                            "path": "education",
                            "fullPath": "Education",
                            "isExpression": false,
                            "value": "education"
                        },
                        "dataField": "education",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "学历",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "education_f8b3b3e8_nuyg",
                            "defaultI18nValue": "学历",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "education_f8b3b3e8_nuyg",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "education",
                                "isExpression": false,
                                "value": "education"
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
                        "resourceId": "eduSystem_50d4bac9_bhm8",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "eduSystem_50d4bac9_bhm8",
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
                            "path": "eduSystem",
                            "fullPath": "EduSystem",
                            "isExpression": false,
                            "value": "eduSystem"
                        },
                        "dataField": "eduSystem",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "学制",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "eduSystem_50d4bac9_xq7h",
                            "defaultI18nValue": "学制",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "eduSystem_50d4bac9_xq7h",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "eduSystem",
                                "isExpression": false,
                                "value": "eduSystem"
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
                        "resourceId": "degree_304819a8_wsms",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "degree_304819a8_wsms",
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
                            "path": "degree",
                            "fullPath": "Degree",
                            "isExpression": false,
                            "value": "degree"
                        },
                        "dataField": "degree",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "学位",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "degree_304819a8_chb3",
                            "defaultI18nValue": "学位",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "degree_304819a8_chb3",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "degree",
                                "isExpression": false,
                                "value": "degree"
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
                        "resourceId": "isFirstDegree_d1e3393b_3ncw",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "isFirstDegree_d1e3393b_3ncw",
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
                            "path": "isFirstDegree",
                            "fullPath": "IsFirstDegree",
                            "isExpression": false,
                            "value": "isFirstDegree"
                        },
                        "dataField": "isFirstDegree",
                        "dataType": "boolean",
                        "multiLanguage": false,
                        "caption": "是否第一学历",
                        "editor": {
                            "type": "CheckBox",
                            "resourceId": "isFirstDegree_d1e3393b_waxw",
                            "defaultI18nValue": "是否第一学历",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "isFirstDegree_d1e3393b_waxw",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "isFirstDegree",
                                "isExpression": false,
                                "value": "isFirstDegree"
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
                        "resourceId": "isHighest_290b3ac4_z4oq",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "isHighest_290b3ac4_z4oq",
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
                            "path": "isHighest",
                            "fullPath": "IsHighest",
                            "isExpression": false,
                            "value": "isHighest"
                        },
                        "dataField": "isHighest",
                        "dataType": "boolean",
                        "multiLanguage": false,
                        "caption": "是否最高学历",
                        "editor": {
                            "type": "CheckBox",
                            "resourceId": "isHighest_290b3ac4_8259",
                            "defaultI18nValue": "是否最高学历",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "isHighest_290b3ac4_8259",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "isHighest",
                                "isExpression": false,
                                "value": "isHighest"
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
    EduinfoComponentViewmodel.prototype.eduinfoAddItem1 = function (commandParam) { return; };
    EduinfoComponentViewmodel.prototype.eduinfoRemoveItem1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'eduinfoAddItem1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], EduinfoComponentViewmodel.prototype, "eduinfoAddItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'eduinfoRemoveItem1',
            params: {
                id: '{DATA~/#{eduinfo-component}/eduInfos/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], EduinfoComponentViewmodel.prototype, "eduinfoRemoveItem1", null);
    EduinfoComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], EduinfoComponentViewmodel);
    return EduinfoComponentViewmodel;
}(ViewModel));
export { EduinfoComponentViewmodel };
export { ɵ0 };
