
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

import { FocusInvalidService } from '@farris/command-services';

import { EditorTypes } from '@farris/ui-datagrid-editors';
import { CalculationType, DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { DataGridComponentViewmodel } from '../../viewmodels/datagridcomponentviewmodel';
import { CourseRepository } from '../../models/courserepository';
import { LangService } from '../../lang/lang-pipe';

import { DataGridComponentViewmodelForm } from '../../viewmodels/form/datagridcomponentviewmodelform';
import { DataGridComponentViewmodelUIState } from '../../viewmodels/uistate/datagridcomponentviewmodeluistate';
import { ChangePage1Handler } from '../../viewmodels/handlers/changepage1handler';
import { datagridEdit1Handler } from '../../viewmodels/handlers/datagridedit1handler';
import { datagridRemove1Handler } from '../../viewmodels/handlers/datagridremove1handler';

@Component({
    selector: 'app-datagridcomponent',
    templateUrl: './datagridcomponent.html',
    styleUrls: ['./datagridcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'data-grid-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: CourseRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },        
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: DataGridComponentViewmodelForm },
        { provide: UIState, useClass: DataGridComponentViewmodelUIState },
        { provide: ViewModel, useClass: DataGridComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridEdit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridRemove1Handler, multi: true },
        ]
})
export class DataGridComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGridDataGrid')
    dataGridDataGrid: DatagridComponent;
    dataGridColumns =[];
    @ViewChild('dataGridmanageTemplate') dataGridmanageTemplate: TemplateRef<any>;

    @HostBinding('class')
    cls = 'f-struct-wrapper f-utils-fill-flex-column ';
    public viewModel: DataGridComponentViewmodel;
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
        private focusInvalidService: FocusInvalidService,
        private farrisGridUtils: CommonUtils,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGridDataGrid);
        });

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
        this.dataGridColumns =[
            [
                {
                    id: 'courseId_f727a729_2l2j',
                    field: 'courseId',
                    width: 120,
                    title: this.langService.transform("courseId_f727a729_2l2j", this.lang, "课程编号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'course_name_0fe03859_zolf',
                    field: 'course_name',
                    width: 120,
                    title: this.langService.transform("course_name_0fe03859_zolf", this.lang, "课程名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'credits_94b90941_e0xq',
                    field: 'credits',
                    width: 120,
                    title: this.langService.transform("credits_94b90941_e0xq", this.lang, "课程学分"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'teacher_id_15e20fea_lxuh',
                    field: 'teacher_id',
                    width: 120,
                    title: this.langService.transform("teacher_id_15e20fea_lxuh", this.lang, "授课教师"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'max_students_3b170260_6s75',
                    field: 'max_students',
                    width: 120,
                    title: this.langService.transform("max_students_3b170260_6s75", this.lang, "最大选课人数"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'semester_72076de8_1eqr',
                    field: 'semester',
                    width: 120,
                    title: this.langService.transform("semester_72076de8_1eqr", this.lang, "课程学期"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'schedule_58813dc6_8qob',
                    field: 'schedule',
                    width: 120,
                    title: this.langService.transform("schedule_58813dc6_8qob", this.lang, "课程安排"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'state_4663043d_cg5t',
                    field: 'state',
                    width: 120,
                    title: this.langService.transform("state_4663043d_cg5t", this.lang, "课程状态"),
                    dataType: 'enum',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "jxz",
                                    "name": this.langService.transform("GridField/state_4663043d_cg5t/enumData/jxz", this.lang, "进行中")
                                },
                                {
                                    "value": "yjs",
                                    "name": this.langService.transform("GridField/state_4663043d_cg5t/enumData/yjs", this.lang, "已结束")
                                }]
                        }
                    }
                },
                {
                    id: 'dataGrid_caozuolie',
                    width: 120,
                    title: this.langService.transform("DataGrid/dataGrid/OperateColumn", this.lang, "操作"),
                    dataType: 'string',
                    template: this.dataGridmanageTemplate,
                    align: 'center',
                    halign: 'center',
                    isMultilingualField: false,
                    fixed: 'right',
                    visible: () => { return true;},
                    filter: false,
                }
            ]
        ]; 
        this.viewModel.dataGridColumns= this.dataGridColumns;
        this.viewModel.dataGridColumnsName= "dataGridColumns";
        this.onFormLoad(); 
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
        
        this.focusInvalidService = null;
        this.farrisGridUtils = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectiondatagridsectionMainTitle = this.langService.transform("Section/data-grid-section/mainTitle", this.lang, "");
    SectiondatagridsectionSubTitle = this.langService.transform("Section/data-grid-section/subTitle", this.lang, "");
    dataGridlineNumberTitle = this.langService.transform("DataGrid/dataGrid/lineNumberTitle", this.lang, "");
}