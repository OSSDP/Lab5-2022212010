import * as tslib_1 from "tslib";
import { Component, Injector, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { DetailFormComponentViewmodel } from '../../viewmodels/detailformcomponentviewmodel';
import { OrganizationRepository } from '../../models/organizationrepository';
import { LangService } from '../../lang/lang-pipe';
import { DetailFormComponentViewmodelForm } from '../../viewmodels/form/detailformcomponentviewmodelform';
import { DetailFormComponentViewmodelUIState } from '../../viewmodels/uistate/detailformcomponentviewmodeluistate';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Save1Handler } from '../../viewmodels/handlers/save1handler';
import { Cancel1Handler } from '../../viewmodels/handlers/cancel1handler';
var DetailFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponent, _super);
    function DetailFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, sanitizer, injector) {
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
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-struct-wrapper ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectiondetailformsectionMainTitle = _this.langService.transform("Section/detail-form-section/mainTitle", _this.lang, "基本信息");
        _this.SectiondetailformsectionSubTitle = _this.langService.transform("Section/detail-form-section/subTitle", _this.lang, "");
        _this.dutyLevel_125fb816_uixhEnumData = [
            {
                "name": _this.langService.transform("EnumField/dutyLevel_125fb816_uixh/enumData/01", _this.lang, "单位"),
                "value": "01"
            },
            {
                "name": _this.langService.transform("EnumField/dutyLevel_125fb816_uixh/enumData/02", _this.lang, "部门"),
                "value": "02"
            }
        ];
        _this.dutyLevel_125fb816_uixh_PlaceHolder = _this.langService.transform("EnumField/dutyLevel_125fb816_uixh/placeHolder", _this.lang, "");
        _this.currency_3cd5ae49_ir1eEnumData = [
            {
                "name": _this.langService.transform("EnumField/currency_3cd5ae49_ir1e/enumData/rmb", _this.lang, "人民币"),
                "value": "rmb"
            },
            {
                "name": _this.langService.transform("EnumField/currency_3cd5ae49_ir1e/enumData/dollar", _this.lang, "美元"),
                "value": "dollar"
            },
            {
                "name": _this.langService.transform("EnumField/currency_3cd5ae49_ir1e/enumData/euro", _this.lang, "欧元"),
                "value": "euro"
            },
            {
                "name": _this.langService.transform("EnumField/currency_3cd5ae49_ir1e/enumData/yen", _this.lang, "日元"),
                "value": "yen"
            },
            {
                "name": _this.langService.transform("EnumField/currency_3cd5ae49_ir1e/enumData/other", _this.lang, "其他"),
                "value": "other"
            }
        ];
        _this.currency_3cd5ae49_ir1e_PlaceHolder = _this.langService.transform("EnumField/currency_3cd5ae49_ir1e/placeHolder", _this.lang, "");
        _this.code_2a2ef993_3f3b_PlaceHolder = _this.langService.transform("TextBox/code_2a2ef993_3f3b/placeHolder", _this.lang, "");
        _this.shortName_c85c7df9_03wl_PlaceHolder = _this.langService.transform("TextBox/shortName_c85c7df9_03wl/placeHolder", _this.lang, "");
        _this.leader_a9cc51db_sy5i_PlaceHolder = _this.langService.transform("TextBox/leader_a9cc51db_sy5i/placeHolder", _this.lang, "");
        _this.owner_1659abe1_k0qx_PlaceHolder = _this.langService.transform("TextBox/owner_1659abe1_k0qx/placeHolder", _this.lang, "");
        _this.area_922add7f_m7et_PlaceHolder = _this.langService.transform("TextBox/area_922add7f_m7et/placeHolder", _this.lang, "");
        _this.summary_30eb4bb2_w7ia_PlaceHolder = _this.langService.transform("TextBox/summary_30eb4bb2_w7ia/placeHolder", _this.lang, "");
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
    DetailFormComponent.prototype.ngOnInit = function () {
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
    DetailFormComponent.prototype.ngAfterViewInit = function () {
    };
    DetailFormComponent.prototype.ngOnDestroy = function () {
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
    DetailFormComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    DetailFormComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], DetailFormComponent.prototype, "cls", void 0);
    DetailFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-detailformcomponent',
            templateUrl: './detailformcomponent.html',
            styleUrls: ['./detailformcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'detail-form-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: OrganizationRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: DetailFormComponentViewmodelForm },
                { provide: UIState, useClass: DetailFormComponentViewmodelUIState },
                { provide: ViewModel, useClass: DetailFormComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
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
            DomSanitizer,
            Injector])
    ], DetailFormComponent);
    return DetailFormComponent;
}(FrameComponent));
export { DetailFormComponent };
