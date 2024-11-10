
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
import { CourseRepository } from '../../models/courserepository';
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
import { CourseProxy } from '../../models/courseproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: CourseRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },        
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: StateMachine, useClass: RootViewmodelStateMachine },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        CourseProxy,
        CourseRepository,
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
        { provide: FORM_ID, useValue: "c2dd87db-465f-456d-b634-e1618020d675" },
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
            "id": "ece48b07-a07e-4516-824e-ef9cdaf87405",
            "labelCode": "ID",
            "code": "ID",
            "name": this.langService.transform("QueryScheme/query-scheme-1/ece48b07-a07e-4516-824e-ef9cdaf87405", this.lang, "主键"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/ece48b07-a07e-4516-824e-ef9cdaf87405/placeHolder", this.lang, ""),
            "control": {"id":"ece48b07-a07e-4516-824e-ef9cdaf87405","controltype":"text","require":false,"className":""}
        },
        {
            "id": "2caadeea-35e0-4efa-ac2d-3a6a5529a6c8",
            "labelCode": "Version",
            "code": "Version",
            "name": this.langService.transform("QueryScheme/query-scheme-1/2caadeea-35e0-4efa-ac2d-3a6a5529a6c8", this.lang, "版本"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/2caadeea-35e0-4efa-ac2d-3a6a5529a6c8/placeHolder", this.lang, ""),
            "control": {"id":"2caadeea-35e0-4efa-ac2d-3a6a5529a6c8","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false,"startFieldCode":"Version","endFieldCode":"Version"}
        },
        {
            "id": "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
            "labelCode": "courseId",
            "code": "courseId",
            "name": this.langService.transform("QueryScheme/query-scheme-1/f727a729-a38a-43a9-b08e-c9b9e2c806f8", this.lang, "课程编号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/f727a729-a38a-43a9-b08e-c9b9e2c806f8/placeHolder", this.lang, ""),
            "control": {"id":"f727a729-a38a-43a9-b08e-c9b9e2c806f8","controltype":"text","require":false,"className":""}
        },
        {
            "id": "0fe03859-e264-42ea-bf7c-036bbbf86549",
            "labelCode": "course_name",
            "code": "course_name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/0fe03859-e264-42ea-bf7c-036bbbf86549", this.lang, "课程名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/0fe03859-e264-42ea-bf7c-036bbbf86549/placeHolder", this.lang, ""),
            "control": {"id":"0fe03859-e264-42ea-bf7c-036bbbf86549","controltype":"text","require":false,"className":""}
        },
        {
            "id": "94b90941-beef-473f-acdf-8ee16183ae31",
            "labelCode": "credits",
            "code": "credits",
            "name": this.langService.transform("QueryScheme/query-scheme-1/94b90941-beef-473f-acdf-8ee16183ae31", this.lang, "课程学分"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/94b90941-beef-473f-acdf-8ee16183ae31/placeHolder", this.lang, ""),
            "control": {"id":"94b90941-beef-473f-acdf-8ee16183ae31","controltype":"text","require":false,"className":""}
        },
        {
            "id": "15e20fea-976b-407f-be36-2b1c23615cdd",
            "labelCode": "teacher_id",
            "code": "teacher_id",
            "name": this.langService.transform("QueryScheme/query-scheme-1/15e20fea-976b-407f-be36-2b1c23615cdd", this.lang, "授课教师"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/15e20fea-976b-407f-be36-2b1c23615cdd/placeHolder", this.lang, ""),
            "control": {"id":"15e20fea-976b-407f-be36-2b1c23615cdd","controltype":"text","require":false,"className":""}
        },
        {
            "id": "3b170260-120d-4d54-9969-ab8e81748093",
            "labelCode": "max_students",
            "code": "max_students",
            "name": this.langService.transform("QueryScheme/query-scheme-1/3b170260-120d-4d54-9969-ab8e81748093", this.lang, "最大选课人数"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/3b170260-120d-4d54-9969-ab8e81748093/placeHolder", this.lang, ""),
            "control": {"id":"3b170260-120d-4d54-9969-ab8e81748093","controltype":"text","require":false,"className":""}
        },
        {
            "id": "72076de8-d624-4799-8c56-225c35c38dfe",
            "labelCode": "semester",
            "code": "semester",
            "name": this.langService.transform("QueryScheme/query-scheme-1/72076de8-d624-4799-8c56-225c35c38dfe", this.lang, "课程学期"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/72076de8-d624-4799-8c56-225c35c38dfe/placeHolder", this.lang, ""),
            "control": {"id":"72076de8-d624-4799-8c56-225c35c38dfe","controltype":"text","require":false,"className":""}
        },
        {
            "id": "58813dc6-0046-49c8-8269-4becf6337d9c",
            "labelCode": "schedule",
            "code": "schedule",
            "name": this.langService.transform("QueryScheme/query-scheme-1/58813dc6-0046-49c8-8269-4becf6337d9c", this.lang, "课程安排"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/58813dc6-0046-49c8-8269-4becf6337d9c/placeHolder", this.lang, ""),
            "control": {"id":"58813dc6-0046-49c8-8269-4becf6337d9c","controltype":"text","require":false,"className":""}
        },
        {
            "id": "4663043d-914b-44ad-89e4-091a013e0505",
            "labelCode": "State",
            "code": "State",
            "name": this.langService.transform("QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505", this.lang, "课程状态"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "jxz",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505/control/enumValues/jxz", this.lang, "进行中")
                    },
                    {
                        "value": "yjs",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505/control/enumValues/yjs", this.lang, "已结束")
                    }]
            }
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
            "labelCode": "courseId",
            "code": "courseId",
            "name": this.langService.transform("QueryScheme/query-scheme-1/f727a729-a38a-43a9-b08e-c9b9e2c806f8", this.lang, "课程编号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/f727a729-a38a-43a9-b08e-c9b9e2c806f8/placeHolder", this.lang, ""),
            "control": {"id":"f727a729-a38a-43a9-b08e-c9b9e2c806f8","controltype":"text","require":false,"className":""}
        },
        {
            "id": "0fe03859-e264-42ea-bf7c-036bbbf86549",
            "labelCode": "course_name",
            "code": "course_name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/0fe03859-e264-42ea-bf7c-036bbbf86549", this.lang, "课程名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/0fe03859-e264-42ea-bf7c-036bbbf86549/placeHolder", this.lang, ""),
            "control": {"id":"0fe03859-e264-42ea-bf7c-036bbbf86549","controltype":"text","require":false,"className":""}
        },
        {
            "id": "94b90941-beef-473f-acdf-8ee16183ae31",
            "labelCode": "credits",
            "code": "credits",
            "name": this.langService.transform("QueryScheme/query-scheme-1/94b90941-beef-473f-acdf-8ee16183ae31", this.lang, "课程学分"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/94b90941-beef-473f-acdf-8ee16183ae31/placeHolder", this.lang, ""),
            "control": {"id":"94b90941-beef-473f-acdf-8ee16183ae31","controltype":"text","require":false,"className":""}
        },
        {
            "id": "15e20fea-976b-407f-be36-2b1c23615cdd",
            "labelCode": "teacher_id",
            "code": "teacher_id",
            "name": this.langService.transform("QueryScheme/query-scheme-1/15e20fea-976b-407f-be36-2b1c23615cdd", this.lang, "授课教师"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/15e20fea-976b-407f-be36-2b1c23615cdd/placeHolder", this.lang, ""),
            "control": {"id":"15e20fea-976b-407f-be36-2b1c23615cdd","controltype":"text","require":false,"className":""}
        },
        {
            "id": "72076de8-d624-4799-8c56-225c35c38dfe",
            "labelCode": "semester",
            "code": "semester",
            "name": this.langService.transform("QueryScheme/query-scheme-1/72076de8-d624-4799-8c56-225c35c38dfe", this.lang, "课程学期"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/72076de8-d624-4799-8c56-225c35c38dfe/placeHolder", this.lang, ""),
            "control": {"id":"72076de8-d624-4799-8c56-225c35c38dfe","controltype":"text","require":false,"className":""}
        }]
                
                
}