import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { LookupGridComponent } from '@farris/ui-lookup';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { TeacherRepository } from '../../models/teacherrepository';
import { LangService } from '../../lang/lang-pipe';
import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';
var BasicFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormComponent, _super);
    function BasicFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, componentManagerService, sanitizer, injector) {
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
        _this.componentManagerService = componentManagerService;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-struct-wrapper ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectionbasicformsectionMainTitle = _this.langService.transform("Section/basic-form-section/mainTitle", _this.lang, "基本信息");
        _this.SectionbasicformsectionSubTitle = _this.langService.transform("Section/basic-form-section/subTitle", _this.lang, "");
        _this.LookupEditnamea9df9e1exgj5DialogTitle = _this.langService.transform("LookupEdit/name_a9df9e1e_xgj5/dialogTitle", _this.lang, "");
        _this.name_a9df9e1e_xgj5_PlaceHolder = _this.langService.transform("LookupEdit/name_a9df9e1e_xgj5/placeHolder", _this.lang, "");
        _this.name_a9df9e1e_xgj5QuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.department_6a312a92_bvcdEnumData = [
            {
                "name": _this.langService.transform("EnumField/department_6a312a92_bvcd/enumData/cs", _this.lang, "计算机学院"),
                "value": "cs",
                "disabled": false
            },
            {
                "name": _this.langService.transform("EnumField/department_6a312a92_bvcd/enumData/math", _this.lang, "数学学院"),
                "value": "math",
                "disabled": false
            },
            {
                "name": _this.langService.transform("EnumField/department_6a312a92_bvcd/enumData/Chinese", _this.lang, "中文学院"),
                "value": "Chinese",
                "disabled": false
            },
            {
                "name": _this.langService.transform("EnumField/department_6a312a92_bvcd/enumData/falv", _this.lang, "法学院"),
                "value": "falv",
                "disabled": false
            }
        ];
        _this.department_6a312a92_bvcd_PlaceHolder = _this.langService.transform("EnumField/department_6a312a92_bvcd/placeHolder", _this.lang, "");
        _this.teacher_id_16fb257e_h2az_PlaceHolder = _this.langService.transform("TextBox/teacher_id_16fb257e_h2az/placeHolder", _this.lang, "");
        _this.password_2e41f9ab_xzbn_PlaceHolder = _this.langService.transform("TextBox/password_2e41f9ab_xzbn/placeHolder", _this.lang, "");
        _this.email_Email_c4dc35f2_i5zn_PlaceHolder = _this.langService.transform("TextBox/email_Email_c4dc35f2_i5zn/placeHolder", _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusInvalidInput(verifyInformations, _this.rootElement);
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
    BasicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.onFormLoad();
    };
    BasicFormComponent.prototype.ngAfterViewInit = function () {
        this.componentManagerService.appendControl('name_a9df9e1e_xgj5', this.name_a9df9e1e_xgj5);
    };
    BasicFormComponent.prototype.ngOnDestroy = function () {
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
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    BasicFormComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    BasicFormComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('name_a9df9e1e_xgj5'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], BasicFormComponent.prototype, "name_a9df9e1e_xgj5", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], BasicFormComponent.prototype, "cls", void 0);
    BasicFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-basicformcomponent',
            templateUrl: './basicformcomponent.html',
            styleUrls: ['./basicformcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'basic-form-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: TeacherRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: BasicFormViewmodelForm },
                { provide: UIState, useClass: BasicFormViewmodelUIState },
                { provide: ViewModel, useClass: BasicFormViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
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
            ComponentManagerService,
            DomSanitizer,
            Injector])
    ], BasicFormComponent);
    return BasicFormComponent;
}(FrameComponent));
export { BasicFormComponent };
