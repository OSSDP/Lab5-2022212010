
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { WEBAPI_PREFIX_TOKEN } from '@farris/ui-common';

import { ExceptionHandler } from '@farris/command-services';
import { FrameworkSessionService, UriService } from '@farris/bef';
import { FrameworkService } from '@gsp-sys/rtf-common';
import { ApplicationParamService } from '@farris/command-services';
import { EventDeclaration } from '../../events/event';
import { FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS} from '@farris/devkit';
import { GSPFrameworkCommonService, resolveBasePath } from '@farris/rtf';
import { ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN } from '@farris/devkit';
import { WFSubmiteService } from '@gsp-wf/rtdevkit';
import { CloudprintService } from '@gsp-svc/cloudprint';
import { WFFlowchartService } from '@gsp-wf/ui-flowchart';

import { CHANGE_SET_POLICY_TOKEN } from '@farris/devkit';
import { TranslateToken, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS } from '@farris/devkit';
import { VerifyDetailService } from '@farris/ui-verify-detail';
import { AppContext, FORM_ID,  PARAM_TYPE_TRANSFORM_TOKEN } from '@farris/devkit';
import { BE_SESSION_HANDLING_STRATEGY_TOKEN } from '@farris/bef';
import { BACK_END_MESSAGE_HANDLER_TOKEN } from '@farris/devkit';
import { BackEndMessageHandler } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { TeacherRepository } from '../../models/teacherrepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { Search1Handler } from '../../viewmodels/handlers/search1handler';
import { RemoveRows1Handler } from '../../viewmodels/handlers/removerows1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { View1Handler } from '../../viewmodels/handlers/view1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { Filter1Handler } from '../../viewmodels/handlers/filter1handler';
import { TeacherProxy } from '../../models/teacherproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: TeacherRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },        
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: StateMachine, useClass: RootViewmodelStateMachine },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        TeacherProxy,
        TeacherRepository,
        { provide: ViewModel, useClass: RootViewmodel },
        { provide: Declaration, useClass: EventDeclaration },
        { provide: TranslateToken, useExisting: LangService },
        { provide: ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, useValue: false},
        { provide: WEBAPI_PREFIX_TOKEN, useFactory: resolveBasePath, deps:[ GSPFrameworkCommonService ] },
        VerifyDetailService,
        { provide: WFSubmiteService, useClass: WFSubmiteService },
        { provide: CloudprintService, useClass: CloudprintService },
        { provide: WFFlowchartService, useClass: WFFlowchartService },
        FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,

        AppContext,
        ComponentManagerService,
        { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
        { provide: FORM_ID, useValue: "055c1cdc-6f76-4149-b8f3-dc8987878467" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Search1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: RemoveRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: View1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Filter1Handler, multi: true },
        ]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-page-root  ';
    public viewModel: RootViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
    constructor(
        private wizardSer: WizardService,
        private keybindingService: KeybindingService,
        private langService: LangService,
        private route: ActivatedRoute,
        private router: Router,
        private rootElement: ElementRef,
        private localizationService: LocalizationService,
        private frmI18nSettingService: FrmI18nSettingService,
        private frameworkService: FrameworkService,
        private applicationParamsService: ApplicationParamService,
        private verifyService: VerifyDetailService,
        private stateMachine: StateMachine,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        if (this.frmI18nSettingService) {
            const i18nSetting = this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach((item) => {
                    this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            } else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                this.enabledLanguageList.push({ "code": "en", "name": "English" });
                this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
    }
    ngOnInit() {
            
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach((keyBinding, method) => {
                this.keybindingService.register(keyBinding, () => {
                    return this.viewModel[method]();
                });
            });
        }
        this.viewModel.verifycationChanged.subscribe((verifyInformations) => {
            if (verifyInformations.length) {
                this.verifyService.createVerify({
                    'parent': this.rootElement,
                    'verifyList': verifyInformations,
                    'showType': 'all',
                    'showList': true
                });
            } else {
                this.verifyService.clear();
            }
        });
        this.stateMachine.stateChange.subscribe(() => {
            const pageHeaderToolbarToolbarItemsstates = {
                'button-add': !this.viewModel.stateMachine['canAdd'],
                'button-edit': !this.viewModel.stateMachine['canEdit'],
                'button-view': !this.viewModel.stateMachine['canView'],
                'button-delete': !this.viewModel.stateMachine['canRemove'],
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
            'button-add': true,
            'button-edit': true,
            'button-view': true,
            'button-delete': true,
        }
            this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
    });

        this.pageHeaderToolbarToolbarItems.forEach((toolbarItem) => {
            
            const transformText = this.langService.transform(toolbarItem.resourceId, this.lang, toolbarItem.text);
            if (transformText) {
                toolbarItem.text = transformText;
            }
        });
        this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, () => {
            this.onFormLoad();
        })
                
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
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
        
        this.frameworkService = null;
        this.applicationParamsService = null;
        this.verifyService.clear();
        this.verifyService = null;
        this.stateMachine = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
        this.viewModel.Filter1(); 
    } 
    pageHeaderToolbarToolbarItems = [{
        "id": "button-add",
        "text": this.langService.transform("button-add", this.lang, "新增"),
        "resourceId": "button-add",
        "isDP": false,
        "class": "btn-primary",
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-edit",
        "text": this.langService.transform("button-edit", this.lang, "编辑"),
        "resourceId": "button-edit",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-view",
        "text": this.langService.transform("button-view", this.lang, "查看"),
        "resourceId": "button-view",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-delete",
        "text": this.langService.transform("button-delete", this.lang, "删除"),
        "resourceId": "button-delete",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        }
    ]; 

    pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
    pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});

    pageHeaderToolbarClickHandler (args) {
        
        switch (args.id) {

            case 'button-add': 
                this.viewModel.Add1(args);
                break;
            case 'button-edit': 
                this.viewModel.Edit1(args);
                break;
            case 'button-view': 
                this.viewModel.View1(args);
                break;
            case 'button-delete': 
                this.viewModel.Remove1(args);
                break;
        }
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    querySchemeSection = {
        position: 'inHead',
        contents: [
        ]
    }
    SectionqueryschemesectionMainTitle = this.langService.transform("Section/query-scheme-section/mainTitle", this.lang, "主标题");
    SectionqueryschemesectionSubTitle = this.langService.transform("Section/query-scheme-section/subTitle", this.lang, "");
    filterTextqueryscheme1 = this.langService.transform("QueryScheme/query-scheme-1/filterText", this.lang, "筛选");
    QuerySolutionqueryscheme1 = this.langService.transform("query-scheme-1", this.lang, "默认筛选方案"); 
    fieldConfigsqueryscheme1 = [
        {
            "id": "639d2693-04b3-4336-94e3-248184d67e3e",
            "labelCode": "ID",
            "code": "ID",
            "name": this.langService.transform("QueryScheme/query-scheme-1/639d2693-04b3-4336-94e3-248184d67e3e", this.lang, "主键"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/639d2693-04b3-4336-94e3-248184d67e3e/placeHolder", this.lang, ""),
            "control": {"id":"639d2693-04b3-4336-94e3-248184d67e3e","controltype":"text","require":false,"className":""}
        },
        {
            "id": "b6d4bea7-4076-404c-af84-5a70c7cf9278",
            "labelCode": "Version",
            "code": "Version",
            "name": this.langService.transform("QueryScheme/query-scheme-1/b6d4bea7-4076-404c-af84-5a70c7cf9278", this.lang, "版本"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/b6d4bea7-4076-404c-af84-5a70c7cf9278/placeHolder", this.lang, ""),
            "control": {"id":"b6d4bea7-4076-404c-af84-5a70c7cf9278","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false,"startFieldCode":"Version","endFieldCode":"Version"}
        },
        {
            "id": "e14b3b80-8ee4-4949-815f-4a7bac162052",
            "labelCode": "teacher_id",
            "code": "teacher_id",
            "name": this.langService.transform("QueryScheme/query-scheme-1/e14b3b80-8ee4-4949-815f-4a7bac162052", this.lang, "教师工号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/e14b3b80-8ee4-4949-815f-4a7bac162052/placeHolder", this.lang, ""),
            "control": {"id":"e14b3b80-8ee4-4949-815f-4a7bac162052","controltype":"text","require":false,"className":""}
        },
        {
            "id": "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
            "labelCode": "name",
            "code": "name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/c8912fac-99d5-4d1b-8e2c-b97f5bd07503", this.lang, "教师姓名"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/c8912fac-99d5-4d1b-8e2c-b97f5bd07503/placeHolder", this.lang, ""),
            "control": {"id":"c8912fac-99d5-4d1b-8e2c-b97f5bd07503","controltype":"text","require":false,"className":""}
        },
        {
            "id": "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
            "labelCode": "department",
            "code": "department",
            "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a", this.lang, "所在院系"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "cs",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/cs", this.lang, "计算机学院")
                    },
                    {
                        "value": "math",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/math", this.lang, "数学学院")
                    },
                    {
                        "value": "Chinese",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/Chinese", this.lang, "中文学院")
                    },
                    {
                        "value": "falv",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/falv", this.lang, "法学院")
                    }]
            }
        },
        {
            "id": "dc6f345c-3c31-4feb-9921-11cace685d87",
            "labelCode": "password",
            "code": "password",
            "name": this.langService.transform("QueryScheme/query-scheme-1/dc6f345c-3c31-4feb-9921-11cace685d87", this.lang, "密码"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/dc6f345c-3c31-4feb-9921-11cace685d87/placeHolder", this.lang, ""),
            "control": {"id":"dc6f345c-3c31-4feb-9921-11cace685d87","controltype":"text","require":false,"className":""}
        },
        {
            "id": "d61de382-fa0f-456c-9c58-7ab52433e9b2",
            "labelCode": "email.Email",
            "code": "Email",
            "name": this.langService.transform("QueryScheme/query-scheme-1/d61de382-fa0f-456c-9c58-7ab52433e9b2", this.lang, "邮箱"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/d61de382-fa0f-456c-9c58-7ab52433e9b2/placeHolder", this.lang, ""),
            "control": {"id":"d61de382-fa0f-456c-9c58-7ab52433e9b2","controltype":"text","require":false,"className":""}
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
            "labelCode": "name",
            "code": "name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/c8912fac-99d5-4d1b-8e2c-b97f5bd07503", this.lang, "教师姓名"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/c8912fac-99d5-4d1b-8e2c-b97f5bd07503/placeHolder", this.lang, ""),
            "control": {"id":"c8912fac-99d5-4d1b-8e2c-b97f5bd07503","controltype":"text","require":false,"className":""}
        },
        {
            "id": "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
            "labelCode": "department",
            "code": "department",
            "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a", this.lang, "所在院系"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "cs",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/cs", this.lang, "计算机学院")
                    },
                    {
                        "value": "math",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/math", this.lang, "数学学院")
                    },
                    {
                        "value": "Chinese",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/Chinese", this.lang, "中文学院")
                    },
                    {
                        "value": "falv",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/falv", this.lang, "法学院")
                    }]
            }
        }]
                
                
}