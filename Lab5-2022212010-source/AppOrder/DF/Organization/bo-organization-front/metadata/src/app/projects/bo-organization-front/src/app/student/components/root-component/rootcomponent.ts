
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
import { StudentRepository } from '../../models/studentrepository';
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
import { rootAdd1Handler } from '../../viewmodels/handlers/rootadd1handler';
import { rootEdit1Handler } from '../../viewmodels/handlers/rootedit1handler';
import { rootView1Handler } from '../../viewmodels/handlers/rootview1handler';
import { rootRemoveRows1Handler } from '../../viewmodels/handlers/rootremoverows1handler';
import { rootRemove1Handler } from '../../viewmodels/handlers/rootremove1handler';
import { rootRemove2Handler } from '../../viewmodels/handlers/rootremove2handler';
import { rootRemoveRows2Handler } from '../../viewmodels/handlers/rootremoverows2handler';
import { rootRemove3Handler } from '../../viewmodels/handlers/rootremove3handler';
import { StudentProxy } from '../../models/studentproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: StudentRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },        
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: StateMachine, useClass: RootViewmodelStateMachine },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        StudentProxy,
        StudentRepository,
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
        { provide: FORM_ID, useValue: "2378b78c-87a2-48c3-9173-35ddfa1d85d8" },
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
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootAdd1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootEdit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootView1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootRemoveRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootRemove1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootRemove2Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootRemoveRows2Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootRemove3Handler, multi: true },
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
                this.viewModel.rootAdd1(args);
                break;
            case 'button-edit': 
                this.viewModel.rootEdit1(args);
                break;
            case 'button-view': 
                this.viewModel.rootView1(args);
                break;
            case 'button-delete': 
                this.viewModel.rootRemove3(args);
                break;
        }
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    querySchemeContainerO1fj = {
        position: 'inHead',
        contents: [
        ]
    }
    Sectionqueryschemecontainero1fjMainTitle = this.langService.transform("Section/query-scheme-container-o1fj/mainTitle", this.lang, "");
    Sectionqueryschemecontainero1fjSubTitle = this.langService.transform("Section/query-scheme-container-o1fj/subTitle", this.lang, "");
    filterTextqueryschemeo1fj = this.langService.transform("QueryScheme/query-scheme-o1fj/filterText", this.lang, "筛选");
    QuerySolutionqueryschemeo1fj = this.langService.transform("query-scheme-o1fj", this.lang, "默认筛选方案"); 
    fieldConfigsqueryschemeo1fj = [
        {
            "id": "187b1ada-deb6-4bbf-b454-ae2f03019104",
            "labelCode": "student_id",
            "code": "student_id",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/187b1ada-deb6-4bbf-b454-ae2f03019104", this.lang, "学号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/187b1ada-deb6-4bbf-b454-ae2f03019104/placeHolder", this.lang, ""),
            "control": {"id":"187b1ada-deb6-4bbf-b454-ae2f03019104","controltype":"text","require":false}
        },
        {
            "id": "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
            "labelCode": "name",
            "code": "name",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/cd4d8a2b-4696-434b-b3d6-ec4ee806a138", this.lang, "姓名"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/cd4d8a2b-4696-434b-b3d6-ec4ee806a138/placeHolder", this.lang, ""),
            "control": {"id":"cd4d8a2b-4696-434b-b3d6-ec4ee806a138","controltype":"text","require":false}
        },
        {
            "id": "b09c1344-806c-4f91-82f5-54dd31c279aa",
            "labelCode": "gender",
            "code": "gender",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa", this.lang, "性别"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "man",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/man", this.lang, "男")
                    },
                    {
                        "value": "woman",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/woman", this.lang, "女")
                    }]
            }
        },
        {
            "id": "99cae752-386f-4b3f-be5e-e7291871d419",
            "labelCode": "birth",
            "code": "birth",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/99cae752-386f-4b3f-be5e-e7291871d419", this.lang, "生日"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/99cae752-386f-4b3f-be5e-e7291871d419/placeHolder", this.lang, ""),
            "control": {"id":"99cae752-386f-4b3f-be5e-e7291871d419","controltype":"date","require":false,"format":"yyyy-MM-dd","returnFormat":"yyyy-MM-dd","weekSelect":false,"startFieldCode":"birth","endFieldCode":"birth"}
        },
        {
            "id": "615161ef-a709-431a-b0b7-77a0dec433d9",
            "labelCode": "major",
            "code": "major",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9", this.lang, "专业名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "cs",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/cs", this.lang, "计算机")
                    },
                    {
                        "value": "math",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/math", this.lang, "数学")
                    },
                    {
                        "value": "Chinese",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/Chinese", this.lang, "中文")
                    },
                    {
                        "value": "falv",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/falv", this.lang, "法律")
                    }]
            }
        }]
    presetFieldConfigsqueryschemeo1fj = [
        {
            "id": "187b1ada-deb6-4bbf-b454-ae2f03019104",
            "labelCode": "student_id",
            "code": "student_id",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/187b1ada-deb6-4bbf-b454-ae2f03019104", this.lang, "学号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/187b1ada-deb6-4bbf-b454-ae2f03019104/placeHolder", this.lang, ""),
            "control": {"id":"187b1ada-deb6-4bbf-b454-ae2f03019104","controltype":"text","require":false}
        },
        {
            "id": "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
            "labelCode": "name",
            "code": "name",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/cd4d8a2b-4696-434b-b3d6-ec4ee806a138", this.lang, "姓名"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/cd4d8a2b-4696-434b-b3d6-ec4ee806a138/placeHolder", this.lang, ""),
            "control": {"id":"cd4d8a2b-4696-434b-b3d6-ec4ee806a138","controltype":"text","require":false}
        },
        {
            "id": "b09c1344-806c-4f91-82f5-54dd31c279aa",
            "labelCode": "gender",
            "code": "gender",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa", this.lang, "性别"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "man",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/man", this.lang, "男")
                    },
                    {
                        "value": "woman",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/woman", this.lang, "女")
                    }]
            }
        },
        {
            "id": "99cae752-386f-4b3f-be5e-e7291871d419",
            "labelCode": "birth",
            "code": "birth",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/99cae752-386f-4b3f-be5e-e7291871d419", this.lang, "生日"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/99cae752-386f-4b3f-be5e-e7291871d419/placeHolder", this.lang, ""),
            "control": {"id":"99cae752-386f-4b3f-be5e-e7291871d419","controltype":"date","require":false,"format":"yyyy-MM-dd","returnFormat":"yyyy-MM-dd","weekSelect":false,"startFieldCode":"birth","endFieldCode":"birth"}
        },
        {
            "id": "615161ef-a709-431a-b0b7-77a0dec433d9",
            "labelCode": "major",
            "code": "major",
            "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9", this.lang, "专业名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "cs",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/cs", this.lang, "计算机")
                    },
                    {
                        "value": "math",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/math", this.lang, "数学")
                    },
                    {
                        "value": "Chinese",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/Chinese", this.lang, "中文")
                    },
                    {
                        "value": "falv",
                        "name": this.langService.transform("QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/falv", this.lang, "法律")
                    }]
            }
        }]
                
                
}