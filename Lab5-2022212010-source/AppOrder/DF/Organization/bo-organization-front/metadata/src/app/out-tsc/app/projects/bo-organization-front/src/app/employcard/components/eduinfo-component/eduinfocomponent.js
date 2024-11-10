import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { EditorTypes } from '@farris/ui-datagrid-editors';
import { DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { EduinfoComponentViewmodel } from '../../viewmodels/eduinfocomponentviewmodel';
import { EmployeeRepository } from '../../models/employeerepository';
import { LangService } from '../../lang/lang-pipe';
import { EduinfoComponentViewmodelForm } from '../../viewmodels/form/eduinfocomponentviewmodelform';
import { EduinfoComponentViewmodelUIState } from '../../viewmodels/uistate/eduinfocomponentviewmodeluistate';
import { eduinfoAddItem1Handler } from '../../viewmodels/handlers/eduinfoadditem1handler';
import { eduinfoRemoveItem1Handler } from '../../viewmodels/handlers/eduinforemoveitem1handler';
var EduinfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EduinfoComponent, _super);
    function EduinfoComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.focusInvalidService = focusInvalidService;
        _this.farrisGridUtils = farrisGridUtils;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.dataGrid_eduinfoColumns = [];
        _this.cls = 'f-struct-is-subgrid ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.dataGrid_eduinfolineNumberTitle = _this.langService.transform("DataGrid/dataGrid_eduinfo/lineNumberTitle", _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_eduinfoDataGrid);
        });
        if (_this.frmI18nSettingService) {
            var i18nSetting = _this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach(function (item) {
                    _this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            }
            else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
        return _this;
    }
    EduinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGrid_eduinfoColumns = [
            [
                {
                    id: 'empolyeeID_54068d87_wp5l',
                    field: 'empolyeeID',
                    width: 120,
                    title: this.langService.transform("empolyeeID_54068d87_wp5l", this.lang, "人员ID"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "empolyeeID_54068d87_3ng2", "title": "人员ID", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'schoolName_3100ddda_di17',
                    field: 'schoolName',
                    width: 120,
                    title: this.langService.transform("schoolName_3100ddda_di17", this.lang, "学校名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "schoolName_3100ddda_liee", "title": "学校名称", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'timeInterval_556dd1d1_8rcf',
                    field: 'timeInterval',
                    width: 120,
                    title: this.langService.transform("timeInterval_556dd1d1_8rcf", this.lang, "时间区间"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "timeInterval_556dd1d1_emfg", "title": "时间区间", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'studyType_2f896fda_h66a',
                    field: 'studyType',
                    width: 120,
                    title: this.langService.transform("studyType_2f896fda_h66a", this.lang, "学习形式"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "studyType_2f896fda_6ykx", "title": "学习形式", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'major_5e64f7eb_fdno',
                    field: 'major',
                    width: 120,
                    title: this.langService.transform("major_5e64f7eb_fdno", this.lang, "专业"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "major_5e64f7eb_zaln", "title": "专业", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'education_f8b3b3e8_azw8',
                    field: 'education',
                    width: 120,
                    title: this.langService.transform("education_f8b3b3e8_azw8", this.lang, "学历"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "education_f8b3b3e8_nuyg", "title": "学历", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'eduSystem_50d4bac9_bhm8',
                    field: 'eduSystem',
                    width: 120,
                    title: this.langService.transform("eduSystem_50d4bac9_bhm8", this.lang, "学制"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "eduSystem_50d4bac9_xq7h", "title": "学制", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'degree_304819a8_wsms',
                    field: 'degree',
                    width: 120,
                    title: this.langService.transform("degree_304819a8_wsms", this.lang, "学位"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "degree_304819a8_chb3", "title": "学位", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'isFirstDegree_d1e3393b_3ncw',
                    field: 'isFirstDegree',
                    width: 120,
                    title: this.langService.transform("isFirstDegree_d1e3393b_3ncw", this.lang, "是否第一学历"),
                    dataType: 'boolean',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.CHECKBOX,
                        options: { "id": "isFirstDegree_d1e3393b_waxw", "title": "是否第一学历", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.CHECKBOX" }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {
                        "type": "boolean",
                        "options": {
                            "trueText": this.langService.transform("GridField/isFirstDegree_d1e3393b_3ncw/formatter/trueText", this.lang, "是"),
                            "falseText": this.langService.transform("GridField/isFirstDegree_d1e3393b_3ncw/formatter/falseText", this.lang, "否"),
                        }
                    }
                },
                {
                    id: 'isHighest_290b3ac4_z4oq',
                    field: 'isHighest',
                    width: 120,
                    title: this.langService.transform("isHighest_290b3ac4_z4oq", this.lang, "是否最高学历"),
                    dataType: 'boolean',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.CHECKBOX,
                        options: { "id": "isHighest_290b3ac4_8259", "title": "是否最高学历", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.CHECKBOX" }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {
                        "type": "boolean",
                        "options": {
                            "trueText": this.langService.transform("GridField/isHighest_290b3ac4_z4oq/formatter/trueText", this.lang, "是"),
                            "falseText": this.langService.transform("GridField/isHighest_290b3ac4_z4oq/formatter/falseText", this.lang, "否"),
                        }
                    }
                }
            ]
        ];
        this.viewModel.dataGrid_eduinfoColumns = this.dataGrid_eduinfoColumns;
        this.viewModel.dataGridColumnsName = "dataGrid_eduinfoColumns";
        this.onFormLoad();
    };
    EduinfoComponent.prototype.ngAfterViewInit = function () {
    };
    EduinfoComponent.prototype.ngOnDestroy = function () {
        // 增加表单的自我销毁
        this.context.dispose && this.context.dispose();
        this.context = null;
        this.subscription = null;
        this.declaration = null;
        this.wizardSer = null;
        this.keybindingService = null;
        this.langService = null;
        this.route = null;
        this.router = null;
        this.rootElement = null;
        this.localizationService = null;
        this.frmI18nSettingService = null;
        this.focusInvalidService = null;
        this.farrisGridUtils = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    EduinfoComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    EduinfoComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGrid_eduinfoDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], EduinfoComponent.prototype, "dataGrid_eduinfoDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], EduinfoComponent.prototype, "cls", void 0);
    EduinfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-eduinfocomponent',
            templateUrl: './eduinfocomponent.html',
            styleUrls: ['./eduinfocomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'eduinfo-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: EmployeeRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: EduinfoComponentViewmodelForm },
                { provide: UIState, useClass: EduinfoComponentViewmodelUIState },
                { provide: ViewModel, useClass: EduinfoComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: eduinfoAddItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: eduinfoRemoveItem1Handler, multi: true },
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [WizardService,
            KeybindingService,
            LangService,
            ActivatedRoute,
            Router,
            ElementRef,
            LocalizationService,
            FrmI18nSettingService,
            FocusInvalidService,
            CommonUtils,
            DomSanitizer,
            Injector])
    ], EduinfoComponent);
    return EduinfoComponent;
}(FrameComponent));
export { EduinfoComponent };
