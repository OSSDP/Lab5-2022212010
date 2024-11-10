/*! UPDATE TIME: 2024/11/8 15:30:16 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/rtf', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@farris/ui-common', '@farris/ui-common/date', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@angular/router', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-forms/farris-ui-forms.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-search-box/farris-ui-search-box.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-enum-editor/farris-ui-enum-editor.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@farris/component-querycondition', '@farris/ui-modal', '@farris/ui-locale', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@farris/ui-dialog', '@gsp-wf/wf-task-handler', '@progress/kendo-angular-dialog', '@progress/kendo-angular-l10n', '@farris/ui-common/number', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-pagination', '@farris/ui-popover', '@farris/ui-common/column', '@progress/kendo-angular-popup', '@gsp-wf/wf-approval-logs', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-filter-condition', '@progress/kendo-angular-resize-sensor', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@farris/ui-perfect-scrollbar', '@farris/ui-area-response', '@farris/ui-datatable', '@farris/ui-datalist', '@farris/ui-layout', '@farris/ui-dropdown', '@farris/ui-search-box', '@farris/ui-filter-panel', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-enum-editor', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-organization-selector', '@farris/ui-tree'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, Component, ElementRef, NgModule, ViewChild, TemplateRef, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, ɵprd, ApplicationRef, ɵnov, ɵpid, ɵqud, ɵand, ɵted, ɵppd, ɵunv, NgZone, Renderer2, ɵpad, Inject, InjectionToken, PLATFORM_ID, RendererFactory2, ErrorHandler, __decorate, __metadata, __extends, CommonModule, NgIf, DOCUMENT, isPlatformBrowser, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, FormControl, FormsModule, ReactiveFormsModule, FormGroupDirective, ControlContainer, NgControlStatusGroup, ɵangular_packages_forms_forms_j, FormBuilder, ɵangular_packages_forms_forms_bc, DateConverter, KendoBindingModule, SectionComponentRefDirective, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, DatagridComponentRefDirective, FarrisQuerySolutionEventBindDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, FlexLayoutModule, FarrisFormsModule, FormMessageModule, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, switchMap, catchError, HttpClient, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientModule, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, DomSanitizer, EventManager, BasePathService, GSPFrameworkCommonService, resolveBasePath, FarrisRTFModule, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgList, EntityList, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, StateMachine, NgParam, UIState, NgCommandHandler, CommandHandler, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, CHANGE_SET_POLICY_TOKEN, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, FrameContext, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, ChangeItemService, ListDataService, FilterService, DataGridService, NavigationMiddlewareService, NavigationService, DataCheckService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, CommandService, FocusInvalidService, CommandServicesModule, ValidationService, FormNotifyService, LanguageService, UIStateService, StateMachineService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, FormMessageService, FormLoadingService, FormErrorService, FilterConditionService, TreeDataService, SubTreeDataService, CardDataService, RuntimeFrameworkService, SubListDataService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, NavigationEventService, MenuStateService, QuerystringService, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService, RouterService, AuthorityService, ɵb, ɵc, EndEditService, BatchEditService, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, PaginationService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, EventService, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, SessionService, HttpService, LanguageService$1, CacheStorageAbstract, CacheMemoryStorage, CacheService, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, GridModule, GridComponent, BrowserSupportService, SelectionService, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService$1, PDFService, ResponsiveService, ExcelService, ScrollSyncService, DomEventsService, ColumnResizingService, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, NavigationService$2, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, TOUCH_ENABLED, touchEnabled, WEBAPI_PREFIX_TOKEN, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, OverLayHiddenService, DateHelperModule, DateTimeHelperService, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupModule, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, ɵa$1, ɵb$2, QuerySolutionComponent, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, SplitterModule, ListNavModule, TextModule, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, ComboServerSideToken, ComboListModule, ComboLocaleService, FarrisHtmlEditorModule, ɵb$4, defaultModules, CloudprintService, CloudPrintModule, ɵa, ɵb$1, ɵc$1, ɵe, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$3, ɵc$2, ɵd$1, ɵe$1, ɵf$1, ɵg$1, ɵh$1, ɵi, ɵj$1, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, ViewChangeService, ViewChangeManageService, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$2, ConvertorService$1, SolutionService$1, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, ComboLookupModule, ScrollspyModule, FarrisScrollSpyService, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf, ɵh, ɵbe, ɵg, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, SingleListComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, SearchPanelComponentNgFactory, SearchFieldPanelComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, LookupAdvancedLayoutComponentNgFactory, LookupFilterBarComponentNgFactory, FilterPanelComponentNgFactory, NgbTooltipWindowNgFactory, ɵaNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, View_QuerySolutionComponent_0, RenderType_QuerySolutionComponent, ɵcNgFactory$2, ɵeNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, NewHeaderFormComponentNgFactory, SetColumnsComponentNgFactory, PreviewMultiHeadersComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, ConvertorService, SolutionService, StateService, QueryConditionModule, BsModalService, ModalModule, LocaleService, FARRIS_LOCAL_CUSTOM_DATA, LocaleModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, View_DatagridComponent_0, RenderType_DatagridComponent, DialogService$1, FarrisDialogModule, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$2, WindowModule, DialogModule, LocalizationService$1, NumberHelperService, NumberHelperModule, PositioningService, ComponentLoaderFactory, PaginationService$1, PaginationModule, PopoverConfig, PopoverModule, ColumnFormatService, DataColumnModule, PopupService, POPUP_CONTAINER, PopupModule, WfApprovalLogsService, WfApprovalLogsModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService, QuerySolutionService, FilterConditionModule, ResizeBatchService, ResizeSensorModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, PerfectScrollbarModule, FAreaResponseModule, DataTableModule, DatalistModule, LayoutModule$1, FDropdownDirectiveTypeModule, SearchBoxModule, FilterPanelModule, TaskImplApiModule, WfSignModule, EnumEditorModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, OrganizationSelectorModule, TreeModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            HostBinding = module.HostBinding;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
            ViewChild = module.ViewChild;
            TemplateRef = module.TemplateRef;
            LOCALE_ID = module.LOCALE_ID;
            ɵcmf = module.ɵcmf;
            ɵmod = module.ɵmod;
            ɵmpd = module.ɵmpd;
            ComponentFactoryResolver = module.ComponentFactoryResolver;
            ɵCodegenComponentFactoryResolver = module.ɵCodegenComponentFactoryResolver;
            NgModuleRef = module.NgModuleRef;
            ɵcrt = module.ɵcrt;
            ɵccf = module.ɵccf;
            ɵvid = module.ɵvid;
            ɵeld = module.ɵeld;
            ɵdid = module.ɵdid;
            ViewContainerRef = module.ViewContainerRef;
            ChangeDetectorRef = module.ChangeDetectorRef;
            ɵprd = module.ɵprd;
            ApplicationRef = module.ApplicationRef;
            ɵnov = module.ɵnov;
            ɵpid = module.ɵpid;
            ɵqud = module.ɵqud;
            ɵand = module.ɵand;
            ɵted = module.ɵted;
            ɵppd = module.ɵppd;
            ɵunv = module.ɵunv;
            NgZone = module.NgZone;
            Renderer2 = module.Renderer2;
            ɵpad = module.ɵpad;
            Inject = module.Inject;
            InjectionToken = module.InjectionToken;
            PLATFORM_ID = module.PLATFORM_ID;
            RendererFactory2 = module.RendererFactory2;
            ErrorHandler = module.ErrorHandler;
        }, function (module) {
            __decorate = module.__decorate;
            __metadata = module.__metadata;
            __extends = module.__extends;
        }, function (module) {
            CommonModule = module.CommonModule;
            NgIf = module.NgIf;
            DOCUMENT = module.DOCUMENT;
            isPlatformBrowser = module.isPlatformBrowser;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ɵangular_packages_common_common_a = module.ɵangular_packages_common_common_a;
        }, function (module) {
            FormControl = module.FormControl;
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
            FormGroupDirective = module.FormGroupDirective;
            ControlContainer = module.ControlContainer;
            NgControlStatusGroup = module.NgControlStatusGroup;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            FormBuilder = module.FormBuilder;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
        }, function (module) {
            DateConverter = module.DateConverter;
            KendoBindingModule = module.KendoBindingModule;
            SectionComponentRefDirective = module.SectionComponentRefDirective;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            DatagridComponentRefDirective = module.DatagridComponentRefDirective;
            FarrisQuerySolutionEventBindDirective = module.FarrisQuerySolutionEventBindDirective;
            FarrisKendoGridFormatService = module.FarrisKendoGridFormatService;
            FarrisTreetableFormatService = module.FarrisTreetableFormatService;
        }, function (module) {
            LayoutModule = module.LayoutModule;
            PanelBarModule = module.PanelBarModule;
            SplitterModule$1 = module.SplitterModule;
            TabStripModule = module.TabStripModule;
        }, function (module) {
            FlexLayoutModule = module.FlexLayoutModule;
        }, function (module) {
            FarrisFormsModule = module.FarrisFormsModule;
        }, function (module) {
            FormMessageModule = module.FormMessageModule;
        }, function (module) {
            LoadingModule = module.LoadingModule;
            LoadingService = module.LoadingService;
            LOADING_DEFAULT_CONFIG = module.LOADING_DEFAULT_CONFIG;
            loaddingDefaultConfig = module.loaddingDefaultConfig;
        }, function (module) {
            MessagerModule = module.MessagerModule;
            MessagerService = module.MessagerService;
            MESSAGER_DEFAULT_CONFIG = module.MESSAGER_DEFAULT_CONFIG;
            MessagerDefaultConfig = module.MessagerDefaultConfig;
        }, function (module) {
            NotifyModule = module.NotifyModule;
            NotifyService = module.NotifyService;
        }, function (module) {
            FResponseToolbarModule = module.FResponseToolbarModule;
            ResponseToolbarComponent = module.ResponseToolbarComponent;
        }, function (module) {
            UriService = module.UriService;
            BefProxy = module.BefProxy;
            BefRepository = module.BefRepository;
            BefLookupRestService = module.BefLookupRestService;
            DefaultComboHttpService = module.DefaultComboHttpService;
            FrameworkSessionService = module.FrameworkSessionService;
            BE_SESSION_HANDLING_STRATEGY_TOKEN = module.BE_SESSION_HANDLING_STRATEGY_TOKEN;
            BE_SERVER_URI_TOKEN = module.BE_SERVER_URI_TOKEN;
        }, function (module) {
            TranslateService = module.TranslateService;
            TranslateModule = module.TranslateModule;
            TranslateLoader = module.TranslateLoader;
            MissingTranslationHandler = module.MissingTranslationHandler;
            TranslateStore = module.TranslateStore;
            TranslateCompiler = module.TranslateCompiler;
            TranslateFakeCompiler = module.TranslateFakeCompiler;
            TranslateParser = module.TranslateParser;
            TranslateDefaultParser = module.TranslateDefaultParser;
            USE_DEFAULT_LANG = module.USE_DEFAULT_LANG;
            USE_STORE = module.USE_STORE;
        }, function (module) {
            TranslateHttpLoader = module.TranslateHttpLoader;
        }, function (module) {
            of = module.of;
            Observable = module.Observable;
            BehaviorSubject = module.BehaviorSubject;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
        }, function (module) {
            HttpClient = module.HttpClient;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
            HttpClientModule = module.HttpClientModule;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
        }, function (module) {
            DomSanitizer = module.DomSanitizer;
            EventManager = module.EventManager;
        }, function (module) {
            BasePathService = module.BasePathService;
            GSPFrameworkCommonService = module.GSPFrameworkCommonService;
            resolveBasePath = module.resolveBasePath;
            FarrisRTFModule = module.FarrisRTFModule;
        }, function (module) {
            Declaration = module.Declaration;
            NgCommand = module.NgCommand;
            ViewModel = module.ViewModel;
            NgField = module.NgField;
            NgEntity = module.NgEntity;
            Entity = module.Entity;
            NgList = module.NgList;
            EntityList = module.EntityList;
            NgRepository = module.NgRepository;
            NgValidateForm = module.NgValidateForm;
            Form = module.Form;
            NgState = module.NgState;
            State = module.State;
            NgRenderState = module.NgRenderState;
            StateMachine = module.StateMachine;
            NgParam = module.NgParam;
            UIState = module.UIState;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            FARRIS_DEVKIT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_FRAME_PROVIDERS;
            FRAME_ID = module.FRAME_ID;
            BindingData = module.BindingData;
            Repository = module.Repository;
            NAMESPACE = module.NAMESPACE;
            TranslateToken = module.TranslateToken;
            ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN = module.ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN;
            FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS;
            AppContext = module.AppContext;
            PARAM_TYPE_TRANSFORM_TOKEN = module.PARAM_TYPE_TRANSFORM_TOKEN;
            FORM_ID = module.FORM_ID;
            EXCEPTION_HANDLER = module.EXCEPTION_HANDLER;
            CHANGE_SET_POLICY_TOKEN = module.CHANGE_SET_POLICY_TOKEN;
            BACK_END_MESSAGE_HANDLER_TOKEN = module.BACK_END_MESSAGE_HANDLER_TOKEN;
            COMMAND_HANDLERS_TOKEN = module.COMMAND_HANDLERS_TOKEN;
            FrameComponent = module.FrameComponent;
            NgFormControl = module.NgFormControl;
            FARRIS_DEVKIT_APP_PROVIDERS = module.FARRIS_DEVKIT_APP_PROVIDERS;
            FORM_PATH_TOKEN = module.FORM_PATH_TOKEN;
            CommandHandlerRegistry = module.CommandHandlerRegistry;
            CommandHandlerExtenderRegistry = module.CommandHandlerExtenderRegistry;
            COMMAND_HANDLER_EXTENDERS_TOKEN = module.COMMAND_HANDLER_EXTENDERS_TOKEN;
            CommandHandlerFactory = module.CommandHandlerFactory;
            FrameContext = module.FrameContext;
            VariableParseService = module.VariableParseService;
            CommandBus = module.CommandBus;
            RouterParamService = module.RouterParamService;
            ResolveService = module.ResolveService;
            ExpressionExecutor = module.ExpressionExecutor;
            FORM_MANIFEST_SERVICE_TOKEN = module.FORM_MANIFEST_SERVICE_TOKEN;
            FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN = module.FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN;
            MESSAGE_SERVICE_TOKEN = module.MESSAGE_SERVICE_TOKEN;
            NOTIFY_SERVICE_TOKEN = module.NOTIFY_SERVICE_TOKEN;
            FRAME_COMPONENT_INIT_HANDLER_TOKEN = module.FRAME_COMPONENT_INIT_HANDLER_TOKEN;
            UserSettingsToken = module.UserSettingsToken;
            AppContextManager = module.AppContextManager;
            RESOLVER_TOKEN = module.RESOLVER_TOKEN;
            EntityDependencyResolver = module.EntityDependencyResolver;
            StateDependencyResolver = module.StateDependencyResolver;
            CommentDependencyResolver = module.CommentDependencyResolver;
            ResolverRegistry = module.ResolverRegistry;
            LISTENER_TOKEN = module.LISTENER_TOKEN;
            UIStateChangeListener = module.UIStateChangeListener;
            RepositoryChangeListener = module.RepositoryChangeListener;
            BindingDataChangeListener = module.BindingDataChangeListener;
            EFFECTOR_TOKEN = module.EFFECTOR_TOKEN;
            RepositoryEffector = module.RepositoryEffector;
            UIStateEffector = module.UIStateEffector;
            ReadonlyEffector = module.ReadonlyEffector;
            DependencyEffector = module.DependencyEffector;
            RelativeEffector = module.RelativeEffector;
            ValidateEffector = module.ValidateEffector;
            RequiredEffector = module.RequiredEffector;
            VisibleEffector = module.VisibleEffector;
            ListenerRegistry = module.ListenerRegistry;
            Listeners = module.Listeners;
            EffectorRegistry = module.EffectorRegistry;
            EffectorFactory = module.EffectorFactory;
            ExpressionRegistry = module.ExpressionRegistry;
            ExpressionEventEmitter = module.ExpressionEventEmitter;
            ExpressionResult = module.ExpressionResult;
            ExpressionManager = module.ExpressionManager;
            ExpressionResultFactory = module.ExpressionResultFactory;
            EVENT_HANDLER_TOKEN = module.EVENT_HANDLER_TOKEN;
            RepositoryAddEntityEventHandler = module.RepositoryAddEntityEventHandler;
            RepositoryRemoveEntityEventHandler = module.RepositoryRemoveEntityEventHandler;
            EntityValueChangedEventHandler = module.EntityValueChangedEventHandler;
            StateValueChangedEventHandler = module.StateValueChangedEventHandler;
            RepositoryLoadEventHandler = module.RepositoryLoadEventHandler;
            EntityUpdateEventHandler = module.EntityUpdateEventHandler;
            BindingDataAppendObjectEventHandler = module.BindingDataAppendObjectEventHandler;
            BindingDataValueChangeEventHandler = module.BindingDataValueChangeEventHandler;
            BindingDataRemoveObjectEventHandler = module.BindingDataRemoveObjectEventHandler;
            BindingDataLoadEventHandler = module.BindingDataLoadEventHandler;
            BindingDataSelectionChangedEventHandler = module.BindingDataSelectionChangedEventHandler;
            EventHandlerRegistry = module.EventHandlerRegistry;
            ExpressionEngineImpl = module.ExpressionEngineImpl;
            FrameEventBus = module.FrameEventBus;
            EventBus = module.EventBus;
            Subscription = module.Subscription;
            RestfulService = module.RestfulService;
            VARIABLE_PARSERS = module.VARIABLE_PARSERS;
            FrameIdVariableParser = module.FrameIdVariableParser;
            ɵa$3 = module.ɵa;
            EventParamVariableParser = module.EventParamVariableParser;
            DataVariableParser = module.DataVariableParser;
            UIStateVariableParser = module.UIStateVariableParser;
            StateMachineVariableParser = module.StateMachineVariableParser;
            CommandVariableParser = module.CommandVariableParser;
        }, function (module) {
            ChangeItemService = module.ChangeItemService;
            ListDataService = module.ListDataService;
            FilterService = module.FilterService;
            DataGridService = module.DataGridService;
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            NavigationService = module.NavigationService;
            DataCheckService = module.DataCheckService;
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            CommandService = module.CommandService;
            FocusInvalidService = module.FocusInvalidService;
            CommandServicesModule = module.CommandServicesModule;
            ValidationService = module.ValidationService;
            FormNotifyService = module.FormNotifyService;
            LanguageService = module.LanguageService;
            UIStateService = module.UIStateService;
            StateMachineService = module.StateMachineService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            FormMessageService = module.FormMessageService;
            FormLoadingService = module.FormLoadingService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
            TreeDataService = module.TreeDataService;
            SubTreeDataService = module.SubTreeDataService;
            CardDataService = module.CardDataService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
            SubListDataService = module.SubListDataService;
            RemoveDataService = module.RemoveDataService;
            SaveDataService = module.SaveDataService;
            EditDataService = module.EditDataService;
            FilterConditionDataService = module.FilterConditionDataService;
            RemoteSummaryService = module.RemoteSummaryService;
            BeActionService = module.BeActionService;
            ApproveService = module.ApproveService;
            PrintService = module.PrintService;
            AttachmentDataService = module.AttachmentDataService;
            AttachmentService = module.AttachmentService;
            FileService = module.FileService;
            NavigationEventService = module.NavigationEventService;
            MenuStateService = module.MenuStateService;
            QuerystringService = module.QuerystringService;
            GridMiddlewareService = module.GridMiddlewareService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ɵb = module.ɵb;
            ɵc = module.ɵc;
            EndEditService = module.EndEditService;
            BatchEditService = module.BatchEditService;
            DiscussionGroupService = module.DiscussionGroupService;
            FormAttentionService = module.FormAttentionService;
            FeatureDataService = module.FeatureDataService;
            FeatureRepository = module.FeatureRepository;
            FeatureEditService = module.FeatureEditService;
            ExpressionService = module.ExpressionService;
            PopUpService = module.PopUpService;
            DirtyCheckingService = module.DirtyCheckingService;
            FormService = module.FormService;
            ViewModelService = module.ViewModelService;
            PaginationService = module.PaginationService;
            FormManifestService = module.FormManifestService;
            FormExpressionManifestService = module.FormExpressionManifestService;
            WorkFlowMessageHandler = module.WorkFlowMessageHandler;
            WorkFlowMessageService = module.WorkFlowMessageService;
            WorkFlowMessage = module.WorkFlowMessage;
            BindingPathService = module.BindingPathService;
            FormControlService = module.FormControlService;
            FrameContextService = module.FrameContextService;
            HideEventService = module.HideEventService;
            FormWizardService = module.FormWizardService;
            CheckService = module.CheckService;
            EventService = module.EventService;
            ParamService = module.ParamService;
            UserSettingsService = module.UserSettingsService;
        }, function (module) {
            VerifyDetailService = module.VerifyDetailService;
            VerifyDetailModule = module.VerifyDetailModule;
        }, function (module) {
            FrmCommonModule = module.FrmCommonModule;
            SessionService = module.SessionService;
            HttpService = module.HttpService;
            LanguageService$1 = module.LanguageService;
            CacheStorageAbstract = module.CacheStorageAbstract;
            CacheMemoryStorage = module.CacheMemoryStorage;
            CacheService = module.CacheService;
            WindowVariableService = module.WindowVariableService;
            TabEntityService = module.TabEntityService;
        }, function (module) {
            FrmI18nSettingService = module.FrmI18nSettingService;
            FrameworkService = module.FrameworkService;
            FrameworkVariableService = module.FrameworkVariableService;
            AppService = module.AppService;
            FrmEventBus = module.FrmEventBus;
            FuncsService = module.FuncsService;
            LoadingService$1 = module.LoadingService;
            CommonSharedModule = module.CommonSharedModule;
        }, function (module) {
            FarrisTooltipModule = module.FarrisTooltipModule;
            AttentionService = module.AttentionService;
        }, function (module) {
            GridModule = module.GridModule;
            GridComponent = module.GridComponent;
            BrowserSupportService = module.BrowserSupportService;
            SelectionService = module.SelectionService;
            GroupInfoService = module.GroupInfoService;
            GroupsService = module.GroupsService;
            ChangeNotificationService = module.ChangeNotificationService;
            DetailsService = module.DetailsService;
            EditService$1 = module.EditService$1;
            FilterService$1 = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ScrollSyncService = module.ScrollSyncService;
            DomEventsService = module.DomEventsService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            NavigationService$1 = module.NavigationService;
            SortService = module.SortService;
            SharedModule = module.SharedModule;
            DragAndDropModule = module.DragAndDropModule;
            GroupModule = module.GroupModule;
            BodyModule = module.BodyModule;
            SharedFilterModule = module.SharedFilterModule;
            RowFilterModule = module.RowFilterModule;
            FilterMenuModule = module.FilterMenuModule;
            ColumnMenuModule = module.ColumnMenuModule;
            HeaderModule = module.HeaderModule;
            FooterModule = module.FooterModule;
            PagerModule = module.PagerModule;
        }, function (module) {
            DateInputsModule = module.DateInputsModule;
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            NavigationService$2 = module.NavigationService;
            BusViewService = module.BusViewService;
            DOMService$1 = module.DOMService$1;
            HoursService = module.HoursService;
            MinutesService = module.MinutesService;
            SecondsService = module.SecondsService;
            DayPeriodService = module.DayPeriodService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule$1 = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            MultiViewCalendarModule = module.MultiViewCalendarModule;
            CalendarsModule = module.CalendarsModule;
            TimePickerModule$1 = module.TimePickerModule;
            DateRangeModule = module.DateRangeModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
        }, function (module) {
            WEBAPI_PREFIX_TOKEN = module.WEBAPI_PREFIX_TOKEN;
            CommonUtils = module.CommonUtils;
            FarrisCommonModule = module.FarrisCommonModule;
            RuntimeStateService = module.RuntimeStateService;
            IdService = module.IdService;
            OverLayHiddenService = module.OverLayHiddenService;
        }, function (module) {
            DateHelperModule = module.DateHelperModule;
            DateTimeHelperService = module.DateTimeHelperService;
        }, function (module) {
            DropDownsModule = module.DropDownsModule;
            SharedDirectivesModule = module.SharedDirectivesModule;
            SharedModule$1 = module.SharedModule;
            DropDownListModule = module.DropDownListModule;
            AutoCompleteModule = module.AutoCompleteModule;
            ComboBoxModule = module.ComboBoxModule;
            MultiSelectModule$1 = module.MultiSelectModule;
            TOUCH_ENABLED$1 = module.TOUCH_ENABLED;
            touchEnabled$1 = module.touchEnabled;
        }, function (module) {
            ButtonsModule = module.ButtonsModule;
            ButtonModule = module.ButtonModule;
            ButtonGroupModule = module.ButtonGroupModule;
            ListModule = module.ListModule;
            SplitButtonModule = module.SplitButtonModule;
            DropDownButtonModule = module.DropDownButtonModule;
        }, function (module) {
            InputsModule = module.InputsModule;
            EventsModule = module.EventsModule;
            NumericTextBoxModule = module.NumericTextBoxModule;
            TextBoxModule = module.TextBoxModule;
            DraggableModule = module.DraggableModule;
            SliderModule = module.SliderModule;
            SwitchModule$1 = module.SwitchModule;
            MaskedTextBoxModule = module.MaskedTextBoxModule;
        }, function (module) {
            IntlModule = module.IntlModule;
            IntlService = module.IntlService;
            CldrIntlService = module.CldrIntlService;
        }, function () {}, function (module) {
            ServerSideToken = module.ServerSideToken;
            LookupModule = module.LookupModule;
        }, function (module) {
            TreeTableModule = module.TreeTableModule;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
        }, function (module) {
            FarrisTabsModule = module.FarrisTabsModule;
            NgbDropdownConfig = module.NgbDropdownConfig;
            NgbTooltipConfig = module.NgbTooltipConfig;
            TabService = module.TabService;
            TabConfig = module.TabConfig;
            NgbDropdownModule = module.NgbDropdownModule;
            NgbTooltipModule = module.NgbTooltipModule;
        }, function (module) {
            FarrisTagModule = module.FarrisTagModule;
        }, function (module) {
            FarrisSidebarModule = module.FarrisSidebarModule;
            FarrisSidebarService = module.FarrisSidebarService;
        }, function (module) {
            UploadDialogMoudle = module.UploadDialogMoudle;
            UploadDialogService = module.UploadDialogService;
            DownloadService = module.DownloadService;
            UploadService = module.UploadService;
            UploadModule = module.UploadModule;
        }, function (module) {
            FarrisSectionModule = module.FarrisSectionModule;
            FarrisSectionComponent = module.FarrisSectionComponent;
        }, function (module) {
            FarrisDatePickerModule = module.FarrisDatePickerModule;
        }, function (module) {
            FarrisTimeSpinnerModule = module.FarrisTimeSpinnerModule;
        }, function (module) {
            DatagridComponent = module.DatagridComponent;
            GRID_SETTINGS_HTTP = module.GRID_SETTINGS_HTTP;
            DatagridModule = module.DatagridModule;
            DatagridSmartFilterService = module.DatagridSmartFilterService;
            DatagridFacadeService = module.DatagridFacadeService;
            DatagridService = module.DatagridService;
            ɵt = module.ɵt;
            ValidatorMessagerService = module.ValidatorMessagerService;
            GRID_SETTINGS_SERVICE = module.GRID_SETTINGS_SERVICE;
            NgxPaginationModule = module.NgxPaginationModule;
            ScrollbarModule = module.ScrollbarModule;
            DatagridSmartFilterModule = module.DatagridSmartFilterModule;
            SCROLLBAR_CONFIG = module.SCROLLBAR_CONFIG;
            GRID_EDITORS = module.GRID_EDITORS;
            GRID_FILTER_ROW = module.GRID_FILTER_ROW;
        }, function (module) {
            WizardService = module.WizardService;
            WizardModule = module.WizardModule;
        }, function (module) {
            QuerySolutionModule = module.QuerySolutionModule;
            QUERYSOLUTION_HANDLER_TOKEN = module.QUERYSOLUTION_HANDLER_TOKEN;
            ɵa$1 = module.ɵa;
            ɵb$2 = module.ɵb;
            QuerySolutionComponent = module.QuerySolutionComponent;
        }, function (module) {
            FarrisButtonModule = module.FarrisButtonModule;
        }, function (module) {
            ListViewModule = module.ListViewModule;
        }, function (module) {
            TimePickerModule = module.TimePickerModule;
        }, function (module) {
            AngularDraggableModule = module.AngularDraggableModule;
        }, function (module) {
            SplitterModule = module.SplitterModule;
        }, function (module) {
            ListNavModule = module.ListNavModule;
        }, function (module) {
            TextModule = module.TextModule;
        }, function (module) {
            WFSubmiteService = module.WFSubmiteService;
            WFRuntimeModule = module.WFRuntimeModule;
            I18nService$1 = module.I18nService;
            TaskService$1 = module.TaskService;
            UserService = module.UserService;
        }, function (module) {
            MultiSelectModule = module.MultiSelectModule;
        }, function (module) {
            InputGroupModule = module.InputGroupModule;
        }, function (module) {
            ComboServerSideToken = module.ComboServerSideToken;
            ComboListModule = module.ComboListModule;
            ComboLocaleService = module.ComboLocaleService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ɵb$4 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa = module.ɵa;
            ɵb$1 = module.ɵb;
            ɵc$1 = module.ɵc;
            ɵe = module.ɵe;
        }, function (module) {
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$4 = module.ɵa;
            ɵb$3 = module.ɵb;
            ɵc$2 = module.ɵc;
            ɵd$1 = module.ɵd;
            ɵe$1 = module.ɵe;
            ɵf$1 = module.ɵf;
            ɵg$1 = module.ɵg;
            ɵh$1 = module.ɵh;
            ɵi = module.ɵi;
            ɵj$1 = module.ɵj;
            ɵk = module.ɵk;
            DatagridEnumEditorComponent = module.DatagridEnumEditorComponent;
            DatagridFilterEditorComponent = module.DatagridFilterEditorComponent;
            DatagridSortEditorComponent = module.DatagridSortEditorComponent;
        }, function (module) {
            ViewChangeModule = module.ViewChangeModule;
            ViewChangeService = module.ViewChangeService;
            ViewChangeManageService = module.ViewChangeManageService;
        }, function (module) {
            SwitchModule = module.SwitchModule;
            SWITCH_OPTIONS = module.SWITCH_OPTIONS;
        }, function (module) {
            ListFilterModule = module.ListFilterModule;
            LISTFILTER_HANDLER_TOKEN = module.LISTFILTER_HANDLER_TOKEN;
            ConvertorService$2 = module.ConvertorService;
            SolutionService$2 = module.SolutionService;
            QuerySolutionService$1 = module.QuerySolutionService;
        }, function (module) {
            SimpleFilterModule = module.SimpleFilterModule;
            FilterService$2 = module.FilterService;
            ConvertorService$1 = module.ConvertorService;
            SolutionService$1 = module.SolutionService;
        }, function (module) {
            AvatarModule = module.AvatarModule;
        }, function (module) {
            CalendarModule = module.CalendarModule;
        }, function (module) {
            WFFlowchartService = module.WFFlowchartService;
            UiFlowchartModule = module.UiFlowchartModule;
            UiFlowchartService = module.UiFlowchartService;
        }, function (module) {
            NumberSpinnerModule = module.NumberSpinnerModule;
        }, function (module) {
            ComboLookupModule = module.ComboLookupModule;
        }, function (module) {
            ScrollspyModule = module.ScrollspyModule;
            FarrisScrollSpyService = module.FarrisScrollSpyService;
        }, function (module) {
            FileListModule = module.FileListModule;
            FileViewerService = module.FileViewerService;
            ɵj = module.ɵj;
            ɵs = module.ɵs;
            ɵn = module.ɵn;
            ɵu = module.ɵu;
            ɵv = module.ɵv;
            ɵo = module.ɵo;
            ɵz = module.ɵz;
            ɵd = module.ɵd;
            ɵa$2 = module.ɵa;
            ɵy = module.ɵy;
            ɵf = module.ɵf;
            ɵh = module.ɵh;
            ɵbe = module.ɵbe;
            ɵg = module.ɵg;
            ɵt$1 = module.ɵt;
            ɵbg = module.ɵbg;
            ɵbh = module.ɵbh;
        }, function (module) {
            LanguageTextboxModule = module.LanguageTextboxModule;
        }, function (module) {
            DynamicControlGroupModule = module.DynamicControlGroupModule;
        }, function (module) {
            BatchEditDialogModule = module.BatchEditDialogModule;
            BatchEditDialogService = module.BatchEditDialogService;
        }, function (module) {
            DatagridFilterRowModule = module.DatagridFilterRowModule;
            FilterRowComponent = module.FilterRowComponent;
        }, function (module) {
            DatagridSettingsModule = module.DatagridSettingsModule;
            DatagridSettingsService = module.DatagridSettingsService;
        }, function (module) {
            FarrisFooterModule = module.FarrisFooterModule;
        }, function (module) {
            DiscussionGroupModule = module.DiscussionGroupModule;
            DiscussionListService = module.DiscussionListService;
        }, function (module) {
            NavModule = module.NavModule;
        }, function (module) {
            TagsModule = module.TagsModule;
        }, function (module) {
            EditorModule = module.EditorModule;
            EditorService = module.EditorService;
            TINYMCE_SCRIPT_SRC = module.TINYMCE_SCRIPT_SRC;
        }, function (module) {
            FfileuploadAdaptUnifileModule = module.FfileuploadAdaptUnifileModule;
            FFileUploadAdaptUnifileConfigService = module.FFileUploadAdaptUnifileConfigService;
            FFileUploadAdaptUnifileConfigToken = module.FFileUploadAdaptUnifileConfigToken;
            FfileuploadAdaptUnifileService = module.FfileuploadAdaptUnifileService;
            FfilepreviewAdaptUnifileService = module.FfilepreviewAdaptUnifileService;
        }, function (module) {
            FEHeaderFooterModule = module.FEHeaderFooterModule;
        }, function (module) {
            FEPageModalModule = module.FEPageModalModule;
            FEPageModalService = module.FEPageModalService;
        }, function (module) {
            FeatureEditorModule = module.FeatureEditorModule;
            FeatureEditorService = module.FeatureEditorService;
            I18nService = module.I18nService;
        }, function (module) {
            FEScrollCollapsibleAreaModule = module.FEScrollCollapsibleAreaModule;
            FEScrollCollapsibleAreaService = module.FEScrollCollapsibleAreaService;
        }, function (module) {
            ActivatedRoute = module.ActivatedRoute;
            Router = module.Router;
            RouterModule = module.RouterModule;
            ɵangular_packages_router_router_a = module.ɵangular_packages_router_router_a;
            ɵEmptyOutletComponent = module.ɵEmptyOutletComponent;
            RouterOutlet = module.RouterOutlet;
            ChildrenOutletContexts = module.ChildrenOutletContexts;
            ROUTES = module.ROUTES;
        }, function (module) {
            LoadingComponentNgFactory = module.LoadingComponentNgFactory;
        }, function (module) {
            TooltipComponentNgFactory = module.TooltipComponentNgFactory;
        }, function (module) {
            ModalBackdropComponentNgFactory = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory = module.ModalContainerComponentNgFactory;
        }, function (module) {
            MessagerComponentNgFactory = module.MessagerComponentNgFactory;
        }, function (module) {
            NotifyContainerComponentNgFactory = module.NotifyContainerComponentNgFactory;
        }, function (module) {
            PopoverContainerComponentNgFactory = module.PopoverContainerComponentNgFactory;
        }, function (module) {
            SingleListComponentNgFactory = module.SingleListComponentNgFactory;
        }, function (module) {
            PopupComponentNgFactory = module.PopupComponentNgFactory;
        }, function (module) {
            ɵbNgFactory = module.ɵbNgFactory;
            ɵiNgFactory = module.ɵiNgFactory;
            ɵwNgFactory = module.ɵwNgFactory;
            ɵbfNgFactory = module.ɵbfNgFactory;
            ɵcNgFactory = module.ɵcNgFactory;
            ɵeNgFactory = module.ɵeNgFactory;
            ɵbbNgFactory = module.ɵbbNgFactory;
            ɵbcNgFactory = module.ɵbcNgFactory;
            FileListComponentNgFactory = module.FileListComponentNgFactory;
        }, function (module) {
            WfApprovalLogsComponentNgFactory = module.WfApprovalLogsComponentNgFactory;
        }, function (module) {
            TimePickerPanelComponentNgFactory = module.TimePickerPanelComponentNgFactory;
        }, function (module) {
            CalendarComponentNgFactory = module.CalendarComponentNgFactory;
        }, function (module) {
            FarrisContextMenuComponentNgFactory = module.FarrisContextMenuComponentNgFactory;
        }, function (module) {
            SearchPanelComponentNgFactory = module.SearchPanelComponentNgFactory;
            SearchFieldPanelComponentNgFactory = module.SearchFieldPanelComponentNgFactory;
        }, function (module) {
            DataTableComponentNgFactory = module.DataTableComponentNgFactory;
        }, function (module) {
            TreeTableComponentNgFactory = module.TreeTableComponentNgFactory;
        }, function (module) {
            LookupLeftComponentNgFactory = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory = module.LookupTabsComponentNgFactory;
            LookupQuickSelectPanelComponentNgFactory = module.LookupQuickSelectPanelComponentNgFactory;
            LookupAdvancedLayoutComponentNgFactory = module.LookupAdvancedLayoutComponentNgFactory;
            LookupFilterBarComponentNgFactory = module.LookupFilterBarComponentNgFactory;
        }, function (module) {
            FilterPanelComponentNgFactory = module.FilterPanelComponentNgFactory;
        }, function (module) {
            NgbTooltipWindowNgFactory = module.NgbTooltipWindowNgFactory;
        }, function (module) {
            ɵaNgFactory = module.ɵaNgFactory;
        }, function (module) {
            UIFlowchartComponentNgFactory = module.UIFlowchartComponentNgFactory;
        }, function (module) {
            LanguageTextPanelComponentNgFactory = module.LanguageTextPanelComponentNgFactory;
        }, function (module) {
            EnumEditorComponentNgFactory = module.EnumEditorComponentNgFactory;
        }, function (module) {
            FilterEditorComponentNgFactory = module.FilterEditorComponentNgFactory;
        }, function (module) {
            SortEditorComponentNgFactory = module.SortEditorComponentNgFactory;
        }, function (module) {
            ɵlNgFactory = module.ɵlNgFactory;
            DatagridTextboxComponentNgFactory = module.DatagridTextboxComponentNgFactory;
            DatagridTextareaComponentNgFactory = module.DatagridTextareaComponentNgFactory;
            ɵaNgFactory$1 = module.ɵaNgFactory;
            ɵbNgFactory$1 = module.ɵbNgFactory;
            ɵcNgFactory$1 = module.ɵcNgFactory;
            ɵdNgFactory = module.ɵdNgFactory;
            ɵeNgFactory$1 = module.ɵeNgFactory;
            ɵfNgFactory = module.ɵfNgFactory;
            ɵgNgFactory = module.ɵgNgFactory;
            ɵhNgFactory = module.ɵhNgFactory;
            ɵiNgFactory$1 = module.ɵiNgFactory;
            ɵjNgFactory = module.ɵjNgFactory;
            ɵkNgFactory = module.ɵkNgFactory;
            DatagridEnumEditorComponentNgFactory = module.DatagridEnumEditorComponentNgFactory;
            DatagridSortEditorComponentNgFactory = module.DatagridSortEditorComponentNgFactory;
            DatagridFilterEditorComponentNgFactory = module.DatagridFilterEditorComponentNgFactory;
        }, function (module) {
            TaskExecuteComponentNgFactory = module.TaskExecuteComponentNgFactory;
            TaskAssigninfoComponentNgFactory = module.TaskAssigninfoComponentNgFactory;
            ProcessSelectorComponentNgFactory = module.ProcessSelectorComponentNgFactory;
            AssigneeInfoComponentNgFactory = module.AssigneeInfoComponentNgFactory;
            TaskCommentComponentNgFactory = module.TaskCommentComponentNgFactory;
            CommentManageComponentNgFactory = module.CommentManageComponentNgFactory;
        }, function (module) {
            VerifyDetailComponentNgFactory = module.VerifyDetailComponentNgFactory;
        }, function (module) {
            StringFilterCellComponentNgFactory = module.StringFilterCellComponentNgFactory;
            NumericFilterCellComponentNgFactory = module.NumericFilterCellComponentNgFactory;
            BooleanFilterCellComponentNgFactory = module.BooleanFilterCellComponentNgFactory;
            DateFilterCellComponentNgFactory = module.DateFilterCellComponentNgFactory;
            StringFilterMenuComponentNgFactory = module.StringFilterMenuComponentNgFactory;
            NumericFilterMenuComponentNgFactory = module.NumericFilterMenuComponentNgFactory;
            DateFilterMenuComponentNgFactory = module.DateFilterMenuComponentNgFactory;
            BooleanFilterMenuComponentNgFactory = module.BooleanFilterMenuComponentNgFactory;
        }, function (module) {
            FileUploadComponentNgFactory = module.FileUploadComponentNgFactory;
            UploadDialogComponentNgFactory = module.UploadDialogComponentNgFactory;
        }, function (module) {
            ɵbNgFactory$2 = module.ɵbNgFactory;
            QueryConditionComponentNgFactory = module.QueryConditionComponentNgFactory;
        }, function (module) {
            OrganizationSelectorComponentNgFactory = module.OrganizationSelectorComponentNgFactory;
            GridOrganizationSelectorComponentNgFactory = module.GridOrganizationSelectorComponentNgFactory;
        }, function (module) {
            View_QuerySolutionComponent_0 = module.View_QuerySolutionComponent_0;
            RenderType_QuerySolutionComponent = module.RenderType_QuerySolutionComponent;
            ɵcNgFactory$2 = module.ɵcNgFactory;
            ɵeNgFactory$2 = module.ɵeNgFactory;
        }, function (module) {
            ProcessSelectorComponentNgFactory$1 = module.ProcessSelectorComponentNgFactory;
            WfWorkitemHandleComponentNgFactory = module.WfWorkitemHandleComponentNgFactory;
            UserHelperComponentNgFactory = module.UserHelperComponentNgFactory;
            TaskAssignComponentNgFactory = module.TaskAssignComponentNgFactory;
            TaskSignaddComponentNgFactory = module.TaskSignaddComponentNgFactory;
            TaskTransferComponentNgFactory = module.TaskTransferComponentNgFactory;
            ɵaNgFactory$2 = module.ɵaNgFactory;
        }, function (module) {
            WindowComponentNgFactory = module.WindowComponentNgFactory;
            WindowTitleBarComponentNgFactory = module.WindowTitleBarComponentNgFactory;
            DialogComponentNgFactory = module.DialogComponentNgFactory;
            DialogTitleBarComponentNgFactory = module.DialogTitleBarComponentNgFactory;
        }, function (module) {
            ɵdNgFactory$1 = module.ɵdNgFactory;
            ɵfNgFactory$1 = module.ɵfNgFactory;
            ɵgNgFactory$1 = module.ɵgNgFactory;
            ɵhNgFactory$1 = module.ɵhNgFactory;
        }, function (module) {
            ɵbNgFactory$3 = module.ɵbNgFactory;
            ɵcNgFactory$3 = module.ɵcNgFactory;
            ɵdNgFactory$2 = module.ɵdNgFactory;
            ɵeNgFactory$3 = module.ɵeNgFactory;
            ɵfNgFactory$2 = module.ɵfNgFactory;
            ɵgNgFactory$2 = module.ɵgNgFactory;
            ɵhNgFactory$2 = module.ɵhNgFactory;
        }, function (module) {
            BatchEditDialogComponentNgFactory = module.BatchEditDialogComponentNgFactory;
            ResultConfirmComponentNgFactory = module.ResultConfirmComponentNgFactory;
        }, function (module) {
            DiscussionPersonnelComponentNgFactory = module.DiscussionPersonnelComponentNgFactory;
        }, function (module) {
            MultiDownloadInfoComponentNgFactory = module.MultiDownloadInfoComponentNgFactory;
        }, function (module) {
            FilterRowComponentNgFactory = module.FilterRowComponentNgFactory;
            FilterTextboxComponentNgFactory = module.FilterTextboxComponentNgFactory;
            FilterCheckboxComponentNgFactory = module.FilterCheckboxComponentNgFactory;
            ConditionEditorComponentNgFactory = module.ConditionEditorComponentNgFactory;
            FilterDatalistComponentNgFactory = module.FilterDatalistComponentNgFactory;
            FilterRowPanelComponentNgFactory = module.FilterRowPanelComponentNgFactory;
            FilterRowEditorComponentNgFactory = module.FilterRowEditorComponentNgFactory;
            FilterSelectComponentNgFactory = module.FilterSelectComponentNgFactory;
        }, function (module) {
            DatagridSettingsComponentNgFactory = module.DatagridSettingsComponentNgFactory;
            SimpleColumnsComponentNgFactory = module.SimpleColumnsComponentNgFactory;
            NewSchemeComponentNgFactory = module.NewSchemeComponentNgFactory;
            SchemeListComponentNgFactory = module.SchemeListComponentNgFactory;
            NewHeaderFormComponentNgFactory = module.NewHeaderFormComponentNgFactory;
            SetColumnsComponentNgFactory = module.SetColumnsComponentNgFactory;
            PreviewMultiHeadersComponentNgFactory = module.PreviewMultiHeadersComponentNgFactory;
        }, function (module) {
            FEPageModalComponentNgFactory = module.FEPageModalComponentNgFactory;
            FEModalBackdropComponentNgFactory = module.FEModalBackdropComponentNgFactory;
            ɵaNgFactory$3 = module.ɵaNgFactory;
        }, function (module) {
            FeatureEditorComponentNgFactory = module.FeatureEditorComponentNgFactory;
        }, function (module) {
            ConvertorService = module.ConvertorService;
            SolutionService = module.SolutionService;
            StateService = module.StateService;
            QueryConditionModule = module.QueryConditionModule;
        }, function (module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }, function (module) {
            LocaleService = module.LocaleService;
            FARRIS_LOCAL_CUSTOM_DATA = module.FARRIS_LOCAL_CUSTOM_DATA;
            LocaleModule = module.LocaleModule;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            View_DatagridComponent_0 = module.View_DatagridComponent_0;
            RenderType_DatagridComponent = module.RenderType_DatagridComponent;
        }, function (module) {
            DialogService$1 = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
        }, function (module) {
            WfTaskHandlerService = module.WfTaskHandlerService;
            TaskService = module.TaskService;
            I18nService$2 = module.I18nService;
            WfTaskHandlerModule = module.WfTaskHandlerModule;
        }, function (module) {
            WindowService = module.WindowService;
            WindowContainerService = module.WindowContainerService;
            DialogContainerService = module.DialogContainerService;
            DialogService$2 = module.DialogService;
            SharedModule$2 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
        }, function (module) {
            LocalizationService$1 = module.LocalizationService;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }, function (module) {
            PositioningService = module.PositioningService;
        }, function (module) {
            ComponentLoaderFactory = module.ComponentLoaderFactory;
        }, function (module) {
            PaginationService$1 = module.PaginationService;
            PaginationModule = module.PaginationModule;
        }, function (module) {
            PopoverConfig = module.PopoverConfig;
            PopoverModule = module.PopoverModule;
        }, function (module) {
            ColumnFormatService = module.ColumnFormatService;
            DataColumnModule = module.DataColumnModule;
        }, function (module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }, function (module) {
            WfApprovalLogsService = module.WfApprovalLogsService;
            WfApprovalLogsModule = module.WfApprovalLogsModule;
        }, function (module) {
            FarrisContextMenuService = module.FarrisContextMenuService;
            FarrisContextMenuModule = module.FarrisContextMenuModule;
        }, function (module) {
            ResizeService = module.ResizeService;
        }, function (module) {
            QuerySolutionService = module.QuerySolutionService;
            FilterConditionModule = module.FilterConditionModule;
        }, function (module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }, function (module) {
            TaskCommentService = module.TaskCommentService;
            TaskCommentUIState = module.TaskCommentUIState;
            TaskCommentViewModel = module.TaskCommentViewModel;
            I18nService$3 = module.I18nService;
            TaskCommentRepository = module.TaskCommentRepository;
            WFCommentModule = module.WFCommentModule;
        }, function (module) {
            UploadServerService = module.UploadServerService;
            FFileUploaderService = module.FFileUploaderService;
            FFileUploadModule = module.FFileUploadModule;
            FFileUploadAPIServiceToken = module.FFileUploadAPIServiceToken;
        }, function (module) {
            PerfectScrollbarModule = module.PerfectScrollbarModule;
        }, function (module) {
            FAreaResponseModule = module.FAreaResponseModule;
        }, function (module) {
            DataTableModule = module.DataTableModule;
        }, function (module) {
            DatalistModule = module.DatalistModule;
        }, function (module) {
            LayoutModule$1 = module.LayoutModule;
        }, function (module) {
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }, function (module) {
            SearchBoxModule = module.SearchBoxModule;
        }, function (module) {
            FilterPanelModule = module.FilterPanelModule;
        }, function (module) {
            TaskImplApiModule = module.TaskImplApiModule;
        }, function (module) {
            WfSignModule = module.WfSignModule;
        }, function (module) {
            EnumEditorModule = module.EnumEditorModule;
        }, function (module) {
            FilterModule = module.FilterModule;
        }, function (module) {
            SorterModule = module.SorterModule;
        }, function (module) {
            ProgressModule = module.ProgressModule;
        }, function (module) {
            ProgressStepModule = module.ProgressStepModule;
        }, function (module) {
            OrganizationSelectorModule = module.OrganizationSelectorModule;
        }, function (module) {
            TreeModule = module.TreeModule;
        }],
        execute: function () {

            function createTranslateLoader(http, version) {
                var versionSuffix = "";
                if (version) {
                    versionSuffix = "?v=" + version;
                }
                return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/employcard11/i18n/'), '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/filterText": "筛选", "QueryScheme/query-scheme-1/e793c221-c461-43d0-a89c-ed3d4aa890e2": "主键", "QueryScheme/query-scheme-1/e793c221-c461-43d0-a89c-ed3d4aa890e2/placeHolder": "", "QueryScheme/query-scheme-1/9eb823f7-a566-40cd-a685-24caa8401d76": "版本", "QueryScheme/query-scheme-1/9eb823f7-a566-40cd-a685-24caa8401d76/placeHolder": "", "QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91": "编号", "QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91/placeHolder": "", "QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2": "名称", "QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2/placeHolder": "", "QueryScheme/query-scheme-1/f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10": "备注", "QueryScheme/query-scheme-1/f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10/placeHolder": "", "QueryScheme/query-scheme-1/3a5365bd-e608-4e44-b138-df32027577f5": "状态", "QueryScheme/query-scheme-1/3a5365bd-e608-4e44-b138-df32027577f5/placeHolder": "", "QueryScheme/query-scheme-1/e473ce45-685c-47ce-8c1e-e57269039ab8": "组织", "QueryScheme/query-scheme-1/e473ce45-685c-47ce-8c1e-e57269039ab8/placeHolder": "", "QueryScheme/query-scheme-1/58fd9314-f103-44e3-ab45-5d8b5400c8f5": "性别", "QueryScheme/query-scheme-1/58fd9314-f103-44e3-ab45-5d8b5400c8f5/placeHolder": "", "QueryScheme/query-scheme-1/d74fa6c7-e51b-4678-b308-6c6d49adc446": "所属国家或地区", "QueryScheme/query-scheme-1/d74fa6c7-e51b-4678-b308-6c6d49adc446/placeHolder": "", "QueryScheme/query-scheme-1/38a3f824-a04a-4fbe-b99c-df6b721a3239": "常驻地", "QueryScheme/query-scheme-1/38a3f824-a04a-4fbe-b99c-df6b721a3239/placeHolder": "", "QueryScheme/query-scheme-1/fe7c6d11-15ce-496a-b182-7244c051eca7": "职级", "QueryScheme/query-scheme-1/fe7c6d11-15ce-496a-b182-7244c051eca7/placeHolder": "", "QueryScheme/query-scheme-1/13aa1e37-647e-4318-81c9-70f03ffdc334": "人员类别", "QueryScheme/query-scheme-1/13aa1e37-647e-4318-81c9-70f03ffdc334/placeHolder": "", "QueryScheme/query-scheme-1/cf08e0f6-9f84-48fd-9096-df45d9b929d4": "显示姓名", "QueryScheme/query-scheme-1/cf08e0f6-9f84-48fd-9096-df45d9b929d4/placeHolder": "", "QueryScheme/query-scheme-1/03cb4977-efe7-4229-9dfa-a98f33a5c18c": "联系电话", "QueryScheme/query-scheme-1/03cb4977-efe7-4229-9dfa-a98f33a5c18c/placeHolder": "", "QueryScheme/query-scheme-1/fb560c3d-00b1-4021-a52d-717ef9cfd0f0": "密级", "QueryScheme/query-scheme-1/fb560c3d-00b1-4021-a52d-717ef9cfd0f0/placeHolder": "", "QueryScheme/query-scheme-1/ca7ab15d-af8f-41c9-8fed-377471d36f31": "邮箱", "QueryScheme/query-scheme-1/ca7ab15d-af8f-41c9-8fed-377471d36f31/placeHolder": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "111", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "id_e793c221_1nzc": "主键", "version_9eb823f7_sasv": "版本", "code_60bea67e_49il": "编号", "name_316a9d3c_4tqx": "名称", "remark_f1b6442a_yhbi": "备注", "state_3a5365bd_kvai": "状态", "organization_e473ce45_t1cl": "组织", "gender_58fd9314_3uve": "性别", "countryOrArea_d74fa6c7_uuzf": "所属国家或地区", "location_38a3f824_lq1v": "常驻地", "postID_fe7c6d11_pzus": "职级", "category_13aa1e37_gpkh": "人员类别", "displayName_cf08e0f6_f64n": "显示姓名", "telephone_03cb4977_ilcq": "联系电话", "secret_fb560c3d_r80g": "密级", "mailbox_ca7ab15d_acak": "邮箱" } };
            var LangPipe = /** @class */ (function () {
                function LangPipe(translate, http) {
                    this.translate = translate;
                    this.http = http;
                }
                LangPipe.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangPipe = __decorate([
                    Pipe({ name: 'lang' }),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], LangPipe);
                return LangPipe;
            }());
            var SafeHtmlPipe = /** @class */ (function () {
                function SafeHtmlPipe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                SafeHtmlPipe.prototype.transform = function (url) {
                    if (!url) {
                        url = "";
                    }
                    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
                };
                SafeHtmlPipe = __decorate([
                    Pipe({ name: 'safeHtml' }),
                    __metadata("design:paramtypes", [DomSanitizer])
                ], SafeHtmlPipe);
                return SafeHtmlPipe;
            }());
            var LangService = /** @class */ (function () {
                function LangService(translate) {
                    this.translate = translate;
                }
                LangService.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangService.prototype.getCurrentLanguage = function () {
                    return this.translate.currentLang;
                };
                LangService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService])
                ], LangService);
                return LangService;
            }());
            var TranslateResolveService = /** @class */ (function () {
                function TranslateResolveService(translate, http) {
                    this.translate = translate;
                    this.http = http;
                    translate.defaultLang = 'zh-CHS';
                    translate.setTranslation('zh-CHS', lang['zh-CHS']);
                }
                TranslateResolveService.prototype.resolve = function (route, state) {
                    var _this = this;
                    var langCode = localStorage.getItem('languageCode');
                    if (!langCode) {
                        langCode = "zh-CHS";
                    }
                    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http, null))) {
                        this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
                        return of(this.translate[langCode]);
                    }
                    else {
                        var httpOb = this.http.get(BasePathService.getBasePath() + "/apps/apporder/df/web/bo-organization-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                            var currentVersion = null;
                            if (data instanceof Array) {
                                var versionKey_1 = "employcard11/" + langCode + ".json";
                                data.forEach(function (item) {
                                    if (item.category == "i18n" && item.key == versionKey_1) {
                                        currentVersion = item.value;
                                    }
                                });
                            }
                            _this.translate.defaultLang = langCode;
                            _this.translate.currentLang = langCode;
                            _this.translate.currentLoader = createTranslateLoader(_this.http, currentVersion);
                            var tran = _this.translate.getTranslation(langCode).pipe(catchError(function (err) {
                                console.error("read resource file failed,please check!!! " + err);
                                return of(err);
                            }));
                            return tran;
                        }));
                        return httpOb;
                    }
                };
                TranslateResolveService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], TranslateResolveService);
                return TranslateResolveService;
            }());

            var EventDeclaration = /** @class */ (function (_super) {
                __extends(EventDeclaration, _super);
                function EventDeclaration() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EventDeclaration = __decorate([
                    Injectable()
                ], EventDeclaration);
                return EventDeclaration;
            }(Declaration));

            var ɵ0 = { type: 'string' };
            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'DataGridComponentViewmodel': 'dataGridComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel.prototype.Load1 = function (commandParam) { return; };
                RootViewmodel.prototype.Search1 = function (commandParam) { return; };
                RootViewmodel.prototype.RemoveRows1 = function (commandParam) { return; };
                RootViewmodel.prototype.Add1 = function (commandParam) { return; };
                RootViewmodel.prototype.View1 = function (commandParam) { return; };
                RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Remove1 = function (commandParam) { return; };
                RootViewmodel.prototype.Filter1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'Load1',
                        params: {
                            filter: '',
                            sort: ''
                        },
                        paramDescriptions: {
                            filter: { type: 'string' },
                            sort: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Load1", null);
                __decorate([
                    NgCommand({
                        name: 'Search1',
                        params: {
                            filter: '',
                            sort: '',
                            pageSize: '',
                            pageIndex: ''
                        },
                        paramDescriptions: {
                            filter: { type: 'string' },
                            sort: { type: 'string' },
                            pageSize: { type: 'int' },
                            pageIndex: { type: 'int' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Search1", null);
                __decorate([
                    NgCommand({
                        name: 'RemoveRows1',
                        params: {
                            ids: '{UISTATE~/#{data-grid-component}/ids}'
                        },
                        paramDescriptions: {
                            ids: { type: 'decimal' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "RemoveRows1", null);
                __decorate([
                    NgCommand({
                        name: 'Add1',
                        params: {
                            url: 'eebc5670-896d-4176-9044-b95a09fef5fb',
                            params: '{"action":"LoadAndAdd1"}',
                            enableRefresh: '',
                            tabName: '',
                            destructuring: ''
                        },
                        paramDescriptions: {
                            url: { type: 'string' },
                            params: { type: 'string' },
                            enableRefresh: { type: 'string' },
                            tabName: { type: 'string' },
                            destructuring: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Add1", null);
                __decorate([
                    NgCommand({
                        name: 'View1',
                        params: {
                            url: 'eebc5670-896d-4176-9044-b95a09fef5fb',
                            params: '{"action":"LoadAndView1", "id":"{DATA~/#{data-grid-component}/id}"}',
                            idToView: '{DATA~/#{data-grid-component}/id}',
                            enableRefresh: '',
                            tabName: '',
                            destructuring: ''
                        },
                        paramDescriptions: {
                            url: { type: 'string' },
                            params: { type: 'string' },
                            idToView: { type: 'string' },
                            enableRefresh: { type: 'string' },
                            tabName: { type: 'string' },
                            destructuring: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "View1", null);
                __decorate([
                    NgCommand({
                        name: 'Edit1',
                        params: {
                            url: 'eebc5670-896d-4176-9044-b95a09fef5fb',
                            params: '{"action":"LoadAndEdit1", "id":"{DATA~/#{data-grid-component}/id}"}',
                            idToEdit: '{DATA~/#{data-grid-component}/id}',
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
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Edit1", null);
                __decorate([
                    NgCommand({
                        name: 'Remove1',
                        params: {
                            id: '{DATA~/#{data-grid-component}/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Remove1", null);
                __decorate([
                    NgCommand({
                        name: 'Filter1',
                        params: {
                            filter: '{UISTATE~/#{root-component}/originalFilterConditionList}',
                            sort: ''
                        },
                        paramDescriptions: {
                            filter: { type: 'string' },
                            sort: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Filter1", null);
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var JobInfoEntity = /** @class */ (function (_super) {
                __extends(JobInfoEntity, _super);
                function JobInfoEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], JobInfoEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ParentID',
                        dataField: 'parentID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ParentID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], JobInfoEntity.prototype, "parentID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Company',
                        dataField: 'company',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Company',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], JobInfoEntity.prototype, "company", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'TimeInterval',
                        dataField: 'timeInterval',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'TimeInterval',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], JobInfoEntity.prototype, "timeInterval", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Position',
                        dataField: 'position',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Position',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], JobInfoEntity.prototype, "position", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Salary',
                        dataField: 'salary',
                        originalDataFieldType: 'Boolean',
                        initValue: false,
                        path: 'Salary',
                    }),
                    __metadata("design:type", Object)
                ], JobInfoEntity.prototype, "salary", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Certifier',
                        dataField: 'certifier',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Certifier',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], JobInfoEntity.prototype, "certifier", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Telephone',
                        dataField: 'telephone',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Telephone',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [20],
                                message: '最大长度为20',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], JobInfoEntity.prototype, "telephone", void 0);
                JobInfoEntity = __decorate([
                    NgEntity({
                        originalCode: "JobInfo",
                        nodeCode: "jobInfos"
                    })
                ], JobInfoEntity);
                return JobInfoEntity;
            }(Entity));

            var EduInfoEntity = /** @class */ (function (_super) {
                __extends(EduInfoEntity, _super);
                function EduInfoEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ParentID',
                        dataField: 'parentID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ParentID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "parentID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'EmpolyeeID',
                        dataField: 'empolyeeID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'EmpolyeeID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "empolyeeID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'SchoolName',
                        dataField: 'schoolName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'SchoolName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "schoolName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'TimeInterval',
                        dataField: 'timeInterval',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'TimeInterval',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "timeInterval", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'StudyType',
                        dataField: 'studyType',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'StudyType',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "studyType", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Major',
                        dataField: 'major',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Major',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "major", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Education',
                        dataField: 'education',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Education',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "education", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'EduSystem',
                        dataField: 'eduSystem',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'EduSystem',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "eduSystem", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Degree',
                        dataField: 'degree',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Degree',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EduInfoEntity.prototype, "degree", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'IsFirstDegree',
                        dataField: 'isFirstDegree',
                        originalDataFieldType: 'Boolean',
                        initValue: false,
                        path: 'IsFirstDegree',
                    }),
                    __metadata("design:type", Object)
                ], EduInfoEntity.prototype, "isFirstDegree", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'IsHighest',
                        dataField: 'isHighest',
                        originalDataFieldType: 'Boolean',
                        initValue: false,
                        path: 'IsHighest',
                    }),
                    __metadata("design:type", Object)
                ], EduInfoEntity.prototype, "isHighest", void 0);
                EduInfoEntity = __decorate([
                    NgEntity({
                        originalCode: "EduInfo",
                        nodeCode: "eduInfos"
                    })
                ], EduInfoEntity);
                return EduInfoEntity;
            }(Entity));

            var EmployeeEntity = /** @class */ (function (_super) {
                __extends(EmployeeEntity, _super);
                function EmployeeEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Version',
                        dataField: 'version',
                        originalDataFieldType: 'DateTime',
                        initValue: '0001-01-01T00:00:00',
                        path: 'Version',
                        enableTimeZone: true,
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "version", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Code',
                        dataField: 'code',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Code',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [1000],
                                message: '最大长度为1000',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "code", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Name',
                        dataField: 'name',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Name',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [1000],
                                message: '最大长度为1000',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "name", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Remark',
                        dataField: 'remark',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Remark',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [1000],
                                message: '最大长度为1000',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "remark", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'State',
                        dataField: 'state',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'State',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [22],
                                message: '最大长度为22',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "state", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Organization',
                        dataField: 'organization',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Organization',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "organization", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Gender',
                        dataField: 'gender',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Gender',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [22],
                                message: '最大长度为22',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "gender", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'CountryOrArea',
                        dataField: 'countryOrArea',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'CountryOrArea',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [22],
                                message: '最大长度为22',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "countryOrArea", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Location',
                        dataField: 'location',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Location',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [22],
                                message: '最大长度为22',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "location", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'PostID',
                        dataField: 'postID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'PostID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "postID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Category',
                        dataField: 'category',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Category',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "category", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'DisplayName',
                        dataField: 'displayName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'DisplayName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "displayName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Telephone',
                        dataField: 'telephone',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Telephone',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [20],
                                message: '最大长度为20',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "telephone", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Secret',
                        dataField: 'secret',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Secret',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [10],
                                message: '最大长度为10',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "secret", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Mailbox',
                        dataField: 'mailbox',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Mailbox',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], EmployeeEntity.prototype, "mailbox", void 0);
                __decorate([
                    NgList({
                        dataField: 'jobInfos',
                        originalDataField: '',
                        type: JobInfoEntity
                    }),
                    __metadata("design:type", EntityList)
                ], EmployeeEntity.prototype, "jobInfos", void 0);
                __decorate([
                    NgList({
                        dataField: 'eduInfos',
                        originalDataField: '',
                        type: EduInfoEntity
                    }),
                    __metadata("design:type", EntityList)
                ], EmployeeEntity.prototype, "eduInfos", void 0);
                EmployeeEntity = __decorate([
                    NgEntity({
                        originalCode: "Employee",
                        nodeCode: "employees",
                        allowEmpty: true
                    })
                ], EmployeeEntity);
                return EmployeeEntity;
            }(Entity));

            var EmployeeProxy = /** @class */ (function (_super) {
                __extends(EmployeeProxy, _super);
                function EmployeeProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/apporder/df/v1.0/employcard11_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                EmployeeProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], EmployeeProxy);
                return EmployeeProxy;
            }(BefProxy));

            var EmployeeRepository = /** @class */ (function (_super) {
                __extends(EmployeeRepository, _super);
                function EmployeeRepository(injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.name = 'EmployeeRepository';
                    _this.paginationInfo = {
                        EmployeeEntity: {
                            pageSize: 20,
                        }
                    };
                    _this.proxy = injector.get(EmployeeProxy, null);
                    return _this;
                }
                EmployeeRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/apporder/df/v1.0/employcard11_frm',
                        entityType: EmployeeEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], EmployeeRepository);
                return EmployeeRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '行政人员',
                        enableValidate: false
                    }),
                    Injectable()
                ], RootViewmodelForm);
                return RootViewmodelForm;
            }(Form));

            var ɵ0$1 = function (context) { return context.state === 'init'; }, ɵ1 = function (context) { return context.state === 'init'; }, ɵ2 = function (context) { return context.state === 'init'; }, ɵ3 = function (context) { return context.state === 'init'; };
            var RootViewmodelStateMachine = /** @class */ (function (_super) {
                __extends(RootViewmodelStateMachine, _super);
                function RootViewmodelStateMachine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgState({
                        initialState: true,
                        name: "初始"
                    }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "init", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ0$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canView", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ2
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ3
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
                RootViewmodelStateMachine = __decorate([
                    Injectable()
                ], RootViewmodelStateMachine);
                return RootViewmodelStateMachine;
            }(StateMachine));

            var RootViewmodelUIState = /** @class */ (function (_super) {
                __extends(RootViewmodelUIState, _super);
                function RootViewmodelUIState() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.originalFilterConditionList = '';
                    return _this;
                }
                __decorate([
                    NgParam({ originalDataType: "String", category: "locale" }),
                    __metadata("design:type", String)
                ], RootViewmodelUIState.prototype, "originalFilterConditionList", void 0);
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var Load1Handler = /** @class */ (function (_super) {
                __extends(Load1Handler, _super);
                function Load1Handler(_ChangeItemService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                Load1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'load', args, context);
                    });
                    this.addTask('setRepository', function (context) {
                        var args = [];
                        return _this.invoke(_this._ChangeItemService1, 'setRepository', args, context);
                    });
                    this.addLink('load', 'setRepository', "1==1");
                };
                Load1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Load1'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        ListDataService])
                ], Load1Handler);
                return Load1Handler;
            }(CommandHandler));

            var Search1Handler = /** @class */ (function (_super) {
                __extends(Search1Handler, _super);
                function Search1Handler(_ListDataService1, _FilterService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._FilterService1 = _FilterService1;
                    return _this;
                }
                Search1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('stripFiltersWithSpecialValue', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/specialFilterValues}'
                        ];
                        return _this.invoke(_this._FilterService1, 'stripFiltersWithSpecialValue', args, context);
                    });
                    this.addTask('query', function (context) {
                        var args = [
                            '{COMMAND~/results/stripFiltersWithSpecialValue}',
                            '{COMMAND~/params/sort}',
                            '{COMMAND~/params/pageSize}',
                            '{COMMAND~/params/pageIndex}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'query', args, context);
                    });
                    this.addLink('stripFiltersWithSpecialValue', 'query', "1==1");
                };
                Search1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Search1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        FilterService])
                ], Search1Handler);
                return Search1Handler;
            }(CommandHandler));

            var RemoveRows1Handler = /** @class */ (function (_super) {
                __extends(RemoveRows1Handler, _super);
                function RemoveRows1Handler(_DataGridService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                RemoveRows1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('removeRows', function (context) {
                        var args = [
                            '{COMMAND~/params/ids}',
                            '',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'removeRows', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/ids}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addTask('refreshAfterRemoving', function (context) {
                        var args = [
                            '{COMMAND~/params/refreshCommandName}',
                            '{COMMAND~/params/refreshCommandFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refreshAfterRemoving', args, context);
                    });
                    this.addLink('removeRows', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'refreshAfterRemoving', "1==1");
                };
                RemoveRows1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'RemoveRows1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        ListDataService])
                ], RemoveRows1Handler);
                return RemoveRows1Handler;
            }(CommandHandler));

            var Add1Handler = /** @class */ (function (_super) {
                __extends(Add1Handler, _super);
                function Add1Handler(_NavigationMiddlewareService1, _NavigationService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._NavigationService1 = _NavigationService1;
                    return _this;
                }
                Add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('getTabId', function (context) {
                        var args = [
                            '{COMMAND~/params/params}',
                            ''
                        ];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'getTabId', args, context);
                    });
                    this.addTask('openMenu', function (context) {
                        var args = [
                            '{COMMAND~/results/getTabId}',
                            '{COMMAND~/params/url}',
                            '{COMMAND~/params/params}',
                            '',
                            '{COMMAND~/params/enableRefresh}',
                            '{COMMAND~/params/tabName}',
                            '{COMMAND~/params/destructuring}'
                        ];
                        return _this.invoke(_this._NavigationService1, 'openMenu', args, context);
                    });
                    this.addLink('getTabId', 'openMenu', "1==1");
                };
                Add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Add1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        NavigationService])
                ], Add1Handler);
                return Add1Handler;
            }(CommandHandler));

            var View1Handler = /** @class */ (function (_super) {
                __extends(View1Handler, _super);
                function View1Handler(_NavigationMiddlewareService1, _DataCheckService1, _NavigationService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._DataCheckService1 = _DataCheckService1;
                    _this._NavigationService1 = _NavigationService1;
                    return _this;
                }
                View1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('checkBeforeView', function (context) {
                        var args = [
                            '{COMMAND~/params/idToView}'
                        ];
                        return _this.invoke(_this._DataCheckService1, 'checkBeforeView', args, context);
                    });
                    this.addTask('getTabId', function (context) {
                        var args = [
                            '{COMMAND~/params/params}',
                            '{COMMAND~/params/idToView}'
                        ];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'getTabId', args, context);
                    });
                    this.addTask('openMenu', function (context) {
                        var args = [
                            '{COMMAND~/results/getTabId}',
                            '{COMMAND~/params/url}',
                            '{COMMAND~/params/params}',
                            '',
                            '{COMMAND~/params/enableRefresh}',
                            '{COMMAND~/params/tabName}',
                            '{COMMAND~/params/destructuring}'
                        ];
                        return _this.invoke(_this._NavigationService1, 'openMenu', args, context);
                    });
                    this.addLink('checkBeforeView', 'getTabId', "1==1");
                    this.addLink('getTabId', 'openMenu', "1==1");
                };
                View1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'View1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        DataCheckService,
                        NavigationService])
                ], View1Handler);
                return View1Handler;
            }(CommandHandler));

            var Edit1Handler = /** @class */ (function (_super) {
                __extends(Edit1Handler, _super);
                function Edit1Handler(_NavigationMiddlewareService1, _DataCheckService1, _NavigationService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._DataCheckService1 = _DataCheckService1;
                    _this._NavigationService1 = _NavigationService1;
                    return _this;
                }
                Edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('checkBeforeEdit', function (context) {
                        var args = [
                            '{COMMAND~/params/idToEdit}'
                        ];
                        return _this.invoke(_this._DataCheckService1, 'checkBeforeEdit', args, context);
                    });
                    this.addTask('getTabId', function (context) {
                        var args = [
                            '{COMMAND~/params/params}',
                            '{COMMAND~/params/idToEdit}'
                        ];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'getTabId', args, context);
                    });
                    this.addTask('openMenu', function (context) {
                        var args = [
                            '{COMMAND~/results/getTabId}',
                            '{COMMAND~/params/url}',
                            '{COMMAND~/params/params}',
                            '',
                            '{COMMAND~/params/enableRefresh}',
                            '{COMMAND~/params/tabName}',
                            '{COMMAND~/params/destructuring}'
                        ];
                        return _this.invoke(_this._NavigationService1, 'openMenu', args, context);
                    });
                    this.addLink('checkBeforeEdit', 'getTabId', "1==1");
                    this.addLink('getTabId', 'openMenu', "1==1");
                };
                Edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Edit1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        DataCheckService,
                        NavigationService])
                ], Edit1Handler);
                return Edit1Handler;
            }(CommandHandler));

            var Remove1Handler = /** @class */ (function (_super) {
                __extends(Remove1Handler, _super);
                function Remove1Handler(_DataGridService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                Remove1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            'true',
                            '{COMMAND~/params/successMsg}',
                            'true',
                            'true'
                        ];
                        return _this.invoke(_this._ListDataService1, 'remove', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addTask('refreshAfterRemoving', function (context) {
                        var args = [
                            '{COMMAND~/params/refreshCommandName}',
                            '{COMMAND~/params/refreshCommandFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refreshAfterRemoving', args, context);
                    });
                    this.addLink('remove', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'refreshAfterRemoving', "1==1");
                };
                Remove1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Remove1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        ListDataService])
                ], Remove1Handler);
                return Remove1Handler;
            }(CommandHandler));

            var Filter1Handler = /** @class */ (function (_super) {
                __extends(Filter1Handler, _super);
                function Filter1Handler(_ChangeItemService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                Filter1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('filter', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'filter', args, context);
                    });
                    this.addTask('setRepository', function (context) {
                        var args = [];
                        return _this.invoke(_this._ChangeItemService1, 'setRepository', args, context);
                    });
                    this.addLink('filter', 'setRepository', "1==1");
                };
                Filter1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Filter1'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        ListDataService])
                ], Filter1Handler);
                return Filter1Handler;
            }(CommandHandler));

            var ɵ0$2 = resolveBasePath;
            var RootComponent = /** @class */ (function (_super) {
                __extends(RootComponent, _super);
                function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, frameworkService, applicationParamsService, verifyService, stateMachine, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
                    _this.frameworkService = frameworkService;
                    _this.applicationParamsService = applicationParamsService;
                    _this.verifyService = verifyService;
                    _this.stateMachine = stateMachine;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.cls = 'f-page-root  ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.pageHeaderToolbarToolbarItems = [{
                            "id": "button-add",
                            "text": _this.langService.transform("button-add", _this.lang, "新增"),
                            "resourceId": "button-add",
                            "isDP": false,
                            "class": "btn-primary",
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-edit",
                            "text": _this.langService.transform("button-edit", _this.lang, "编辑"),
                            "resourceId": "button-edit",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-view",
                            "text": _this.langService.transform("button-view", _this.lang, "查看"),
                            "resourceId": "button-view",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-delete",
                            "text": _this.langService.transform("button-delete", _this.lang, "删除"),
                            "resourceId": "button-delete",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }
                    ];
                    _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
                    _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.sectionsToolbarStates = new BehaviorSubject({});
                    _this.sectionsToolbarVisibleStates = new BehaviorSubject({});
                    _this.querySchemeSection = {
                        position: 'inHead',
                        contents: []
                    };
                    _this.SectionqueryschemesectionMainTitle = _this.langService.transform("Section/query-scheme-section/mainTitle", _this.lang, "主标题");
                    _this.SectionqueryschemesectionSubTitle = _this.langService.transform("Section/query-scheme-section/subTitle", _this.lang, "");
                    _this.filterTextqueryscheme1 = _this.langService.transform("QueryScheme/query-scheme-1/filterText", _this.lang, "筛选");
                    _this.QuerySolutionqueryscheme1 = _this.langService.transform("query-scheme-1", _this.lang, "默认筛选方案");
                    _this.fieldConfigsqueryscheme1 = [
                        {
                            "id": "e793c221-c461-43d0-a89c-ed3d4aa890e2",
                            "labelCode": "ID",
                            "code": "ID",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/e793c221-c461-43d0-a89c-ed3d4aa890e2", _this.lang, "主键"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/e793c221-c461-43d0-a89c-ed3d4aa890e2/placeHolder", _this.lang, ""),
                            "control": { "id": "e793c221-c461-43d0-a89c-ed3d4aa890e2", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "9eb823f7-a566-40cd-a685-24caa8401d76",
                            "labelCode": "Version",
                            "code": "Version",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/9eb823f7-a566-40cd-a685-24caa8401d76", _this.lang, "版本"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/9eb823f7-a566-40cd-a685-24caa8401d76/placeHolder", _this.lang, ""),
                            "control": { "id": "9eb823f7-a566-40cd-a685-24caa8401d76", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false, "startFieldCode": "Version", "endFieldCode": "Version" }
                        },
                        {
                            "id": "60bea67e-f72a-43ad-af7d-2468028d5c91",
                            "labelCode": "Code",
                            "code": "Code",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91", _this.lang, "编号"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91/placeHolder", _this.lang, ""),
                            "control": { "id": "60bea67e-f72a-43ad-af7d-2468028d5c91", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "316a9d3c-bb76-4046-8b32-5fd16cfe41e2",
                            "labelCode": "Name",
                            "code": "Name",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2", _this.lang, "名称"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2/placeHolder", _this.lang, ""),
                            "control": { "id": "316a9d3c-bb76-4046-8b32-5fd16cfe41e2", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10",
                            "labelCode": "Remark",
                            "code": "Remark",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10", _this.lang, "备注"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10/placeHolder", _this.lang, ""),
                            "control": { "id": "f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "3a5365bd-e608-4e44-b138-df32027577f5",
                            "labelCode": "State",
                            "code": "State",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/3a5365bd-e608-4e44-b138-df32027577f5", _this.lang, "状态"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/3a5365bd-e608-4e44-b138-df32027577f5/placeHolder", _this.lang, ""),
                            "control": { "id": "3a5365bd-e608-4e44-b138-df32027577f5", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "e473ce45-685c-47ce-8c1e-e57269039ab8",
                            "labelCode": "Organization",
                            "code": "Organization",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/e473ce45-685c-47ce-8c1e-e57269039ab8", _this.lang, "组织"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/e473ce45-685c-47ce-8c1e-e57269039ab8/placeHolder", _this.lang, ""),
                            "control": { "id": "e473ce45-685c-47ce-8c1e-e57269039ab8", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "58fd9314-f103-44e3-ab45-5d8b5400c8f5",
                            "labelCode": "Gender",
                            "code": "Gender",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/58fd9314-f103-44e3-ab45-5d8b5400c8f5", _this.lang, "性别"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/58fd9314-f103-44e3-ab45-5d8b5400c8f5/placeHolder", _this.lang, ""),
                            "control": { "id": "58fd9314-f103-44e3-ab45-5d8b5400c8f5", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "d74fa6c7-e51b-4678-b308-6c6d49adc446",
                            "labelCode": "CountryOrArea",
                            "code": "CountryOrArea",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/d74fa6c7-e51b-4678-b308-6c6d49adc446", _this.lang, "所属国家或地区"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/d74fa6c7-e51b-4678-b308-6c6d49adc446/placeHolder", _this.lang, ""),
                            "control": { "id": "d74fa6c7-e51b-4678-b308-6c6d49adc446", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "38a3f824-a04a-4fbe-b99c-df6b721a3239",
                            "labelCode": "Location",
                            "code": "Location",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/38a3f824-a04a-4fbe-b99c-df6b721a3239", _this.lang, "常驻地"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/38a3f824-a04a-4fbe-b99c-df6b721a3239/placeHolder", _this.lang, ""),
                            "control": { "id": "38a3f824-a04a-4fbe-b99c-df6b721a3239", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "fe7c6d11-15ce-496a-b182-7244c051eca7",
                            "labelCode": "PostID",
                            "code": "PostID",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/fe7c6d11-15ce-496a-b182-7244c051eca7", _this.lang, "职级"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/fe7c6d11-15ce-496a-b182-7244c051eca7/placeHolder", _this.lang, ""),
                            "control": { "id": "fe7c6d11-15ce-496a-b182-7244c051eca7", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "13aa1e37-647e-4318-81c9-70f03ffdc334",
                            "labelCode": "Category",
                            "code": "Category",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/13aa1e37-647e-4318-81c9-70f03ffdc334", _this.lang, "人员类别"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/13aa1e37-647e-4318-81c9-70f03ffdc334/placeHolder", _this.lang, ""),
                            "control": { "id": "13aa1e37-647e-4318-81c9-70f03ffdc334", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "cf08e0f6-9f84-48fd-9096-df45d9b929d4",
                            "labelCode": "DisplayName",
                            "code": "DisplayName",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/cf08e0f6-9f84-48fd-9096-df45d9b929d4", _this.lang, "显示姓名"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/cf08e0f6-9f84-48fd-9096-df45d9b929d4/placeHolder", _this.lang, ""),
                            "control": { "id": "cf08e0f6-9f84-48fd-9096-df45d9b929d4", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "03cb4977-efe7-4229-9dfa-a98f33a5c18c",
                            "labelCode": "Telephone",
                            "code": "Telephone",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/03cb4977-efe7-4229-9dfa-a98f33a5c18c", _this.lang, "联系电话"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/03cb4977-efe7-4229-9dfa-a98f33a5c18c/placeHolder", _this.lang, ""),
                            "control": { "id": "03cb4977-efe7-4229-9dfa-a98f33a5c18c", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "fb560c3d-00b1-4021-a52d-717ef9cfd0f0",
                            "labelCode": "Secret",
                            "code": "Secret",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/fb560c3d-00b1-4021-a52d-717ef9cfd0f0", _this.lang, "密级"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/fb560c3d-00b1-4021-a52d-717ef9cfd0f0/placeHolder", _this.lang, ""),
                            "control": { "id": "fb560c3d-00b1-4021-a52d-717ef9cfd0f0", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "ca7ab15d-af8f-41c9-8fed-377471d36f31",
                            "labelCode": "Mailbox",
                            "code": "Mailbox",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/ca7ab15d-af8f-41c9-8fed-377471d36f31", _this.lang, "邮箱"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/ca7ab15d-af8f-41c9-8fed-377471d36f31/placeHolder", _this.lang, ""),
                            "control": { "id": "ca7ab15d-af8f-41c9-8fed-377471d36f31", "controltype": "text", "require": false, "className": "" }
                        }
                    ];
                    _this.presetFieldConfigsqueryscheme1 = [
                        {
                            "id": "60bea67e-f72a-43ad-af7d-2468028d5c91",
                            "labelCode": "Code",
                            "code": "Code",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91", _this.lang, "编号"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91/placeHolder", _this.lang, ""),
                            "control": { "id": "60bea67e-f72a-43ad-af7d-2468028d5c91", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "316a9d3c-bb76-4046-8b32-5fd16cfe41e2",
                            "labelCode": "Name",
                            "code": "Name",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2", _this.lang, "名称"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2/placeHolder", _this.lang, ""),
                            "control": { "id": "316a9d3c-bb76-4046-8b32-5fd16cfe41e2", "controltype": "text", "require": false, "className": "" }
                        }
                    ];
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
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
                RootComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        if (verifyInformations.length) {
                            _this.verifyService.createVerify({
                                'parent': _this.rootElement,
                                'verifyList': verifyInformations,
                                'showType': 'all',
                                'showList': true
                            });
                        }
                        else {
                            _this.verifyService.clear();
                        }
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsstates = {
                            'button-add': !_this.viewModel.stateMachine['canAdd'],
                            'button-edit': !_this.viewModel.stateMachine['canEdit'],
                            'button-view': !_this.viewModel.stateMachine['canView'],
                            'button-delete': !_this.viewModel.stateMachine['canRemove'],
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'button-edit': true,
                            'button-view': true,
                            'button-delete': true,
                        };
                        _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
                    });
                    this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
                        var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
                        if (transformText) {
                            toolbarItem.text = transformText;
                        }
                    });
                    this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, function () {
                        _this.onFormLoad();
                    });
                };
                RootComponent.prototype.ngAfterViewInit = function () {
                };
                RootComponent.prototype.ngOnDestroy = function () {
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
                };
                RootComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                RootComponent.prototype.onFormLoad = function () {
                    this.viewModel.Filter1();
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
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
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], RootComponent.prototype, "cls", void 0);
                RootComponent = __decorate([
                    Component({
                        selector: 'app-rootcomponent',
                        templateUrl: './rootcomponent.html',
                        styleUrls: ['./rootcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'root-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: EmployeeRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            FrameworkSessionService,
                            UriService,
                            EmployeeProxy,
                            EmployeeRepository,
                            { provide: ViewModel, useClass: RootViewmodel },
                            { provide: Declaration, useClass: EventDeclaration },
                            { provide: TranslateToken, useExisting: LangService },
                            { provide: ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, useValue: false },
                            { provide: WEBAPI_PREFIX_TOKEN, useFactory: ɵ0$2, deps: [GSPFrameworkCommonService] },
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
                            { provide: FORM_ID, useValue: "7f47424a-41f7-44d5-876a-e491116b2041" },
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
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        FrameworkService,
                        ApplicationParamService,
                        VerifyDetailService,
                        StateMachine,
                        DomSanitizer,
                        Injector])
                ], RootComponent);
                return RootComponent;
            }(FrameComponent));

            var routes = [
                {
                    path: '',
                    component: RootComponent,
                    children: [],
                    resolve: {
                        'translate': TranslateResolveService
                    }
                }
            ];
            var EmployCard11RoutingModule = /** @class */ (function () {
                function EmployCard11RoutingModule() {
                }
                EmployCard11RoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], EmployCard11RoutingModule);
                return EmployCard11RoutingModule;
            }());

            var DataGridComponentViewmodel = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodel, _super);
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
                                    "resourceId": "id_e793c221_1nzc",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "id_e793c221_1nzc",
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
                                        "path": "id",
                                        "fullPath": "ID",
                                        "isExpression": false,
                                        "value": "id"
                                    },
                                    "dataField": "id",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "主键",
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
                                    "resourceId": "version_9eb823f7_sasv",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "version_9eb823f7_sasv",
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
                                        "path": "version",
                                        "fullPath": "Version",
                                        "isExpression": false,
                                        "value": "version"
                                    },
                                    "dataField": "version",
                                    "dataType": "datetime",
                                    "multiLanguage": false,
                                    "caption": "版本",
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
                                        "type": "date",
                                        "dateFormat": "yyyy-MM-dd HH:mm:ss"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "code_60bea67e_49il",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "code_60bea67e_49il",
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
                                        "path": "code",
                                        "fullPath": "Code",
                                        "isExpression": false,
                                        "value": "code"
                                    },
                                    "dataField": "code",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "编号",
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
                                    "resourceId": "name_316a9d3c_4tqx",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "name_316a9d3c_4tqx",
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
                                        "path": "name",
                                        "fullPath": "Name",
                                        "isExpression": false,
                                        "value": "name"
                                    },
                                    "dataField": "name",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "名称",
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
                                    "resourceId": "remark_f1b6442a_yhbi",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "remark_f1b6442a_yhbi",
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
                                        "path": "remark",
                                        "fullPath": "Remark",
                                        "isExpression": false,
                                        "value": "remark"
                                    },
                                    "dataField": "remark",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "备注",
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
                                    "resourceId": "state_3a5365bd_kvai",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "state_3a5365bd_kvai",
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
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "状态",
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
                                    "resourceId": "organization_e473ce45_t1cl",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "organization_e473ce45_t1cl",
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
                                        "path": "organization",
                                        "fullPath": "Organization",
                                        "isExpression": false,
                                        "value": "organization"
                                    },
                                    "dataField": "organization",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "组织",
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
                                    "resourceId": "gender_58fd9314_3uve",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "gender_58fd9314_3uve",
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
                                        "path": "gender",
                                        "fullPath": "Gender",
                                        "isExpression": false,
                                        "value": "gender"
                                    },
                                    "dataField": "gender",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "性别",
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
                                    "resourceId": "countryOrArea_d74fa6c7_uuzf",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "countryOrArea_d74fa6c7_uuzf",
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
                                        "path": "countryOrArea",
                                        "fullPath": "CountryOrArea",
                                        "isExpression": false,
                                        "value": "countryOrArea"
                                    },
                                    "dataField": "countryOrArea",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "所属国家或地区",
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
                                    "resourceId": "location_38a3f824_lq1v",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "location_38a3f824_lq1v",
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
                                        "path": "location",
                                        "fullPath": "Location",
                                        "isExpression": false,
                                        "value": "location"
                                    },
                                    "dataField": "location",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "常驻地",
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
                                    "resourceId": "postID_fe7c6d11_pzus",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "postID_fe7c6d11_pzus",
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
                                        "path": "postID",
                                        "fullPath": "PostID",
                                        "isExpression": false,
                                        "value": "postID"
                                    },
                                    "dataField": "postID",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "职级",
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
                                    "resourceId": "category_13aa1e37_gpkh",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "category_13aa1e37_gpkh",
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
                                        "path": "category",
                                        "fullPath": "Category",
                                        "isExpression": false,
                                        "value": "category"
                                    },
                                    "dataField": "category",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "人员类别",
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
                                    "resourceId": "displayName_cf08e0f6_f64n",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "displayName_cf08e0f6_f64n",
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
                                        "path": "displayName",
                                        "fullPath": "DisplayName",
                                        "isExpression": false,
                                        "value": "displayName"
                                    },
                                    "dataField": "displayName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "显示姓名",
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
                                    "resourceId": "telephone_03cb4977_ilcq",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "telephone_03cb4977_ilcq",
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
                                    "caption": "联系电话",
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
                                    "resourceId": "secret_fb560c3d_r80g",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "secret_fb560c3d_r80g",
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
                                        "path": "secret",
                                        "fullPath": "Secret",
                                        "isExpression": false,
                                        "value": "secret"
                                    },
                                    "dataField": "secret",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "密级",
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
                                    "resourceId": "mailbox_ca7ab15d_acak",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "mailbox_ca7ab15d_acak",
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
                                        "path": "mailbox",
                                        "fullPath": "Mailbox",
                                        "isExpression": false,
                                        "value": "mailbox"
                                    },
                                    "dataField": "mailbox",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "邮箱",
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
                __decorate([
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
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "ChangePage1", null);
                DataGridComponentViewmodel = __decorate([
                    Injectable()
                ], DataGridComponentViewmodel);
                return DataGridComponentViewmodel;
            }(ViewModel));

            var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelForm, _super);
                function DataGridComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'id',
                        name: "{{id_e793c221_1nzc}}",
                        binding: 'id',
                        updateOn: 'blur',
                        defaultI18nValue: '主键',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "id", void 0);
                __decorate([
                    NgFormControl({
                        id: 'version',
                        name: "{{version_9eb823f7_sasv}}",
                        binding: 'version',
                        updateOn: 'blur',
                        valueConverter: new DateConverter('yyyy-MM-dd'),
                        defaultI18nValue: '版本',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "version", void 0);
                __decorate([
                    NgFormControl({
                        id: 'code',
                        name: "{{code_60bea67e_49il}}",
                        binding: 'code',
                        updateOn: 'blur',
                        defaultI18nValue: '编号',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "code", void 0);
                __decorate([
                    NgFormControl({
                        id: 'name',
                        name: "{{name_316a9d3c_4tqx}}",
                        binding: 'name',
                        updateOn: 'blur',
                        defaultI18nValue: '名称',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'remark',
                        name: "{{remark_f1b6442a_yhbi}}",
                        binding: 'remark',
                        updateOn: 'blur',
                        defaultI18nValue: '备注',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "remark", void 0);
                __decorate([
                    NgFormControl({
                        id: 'state',
                        name: "{{state_3a5365bd_kvai}}",
                        binding: 'state',
                        updateOn: 'blur',
                        defaultI18nValue: '状态',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "state", void 0);
                __decorate([
                    NgFormControl({
                        id: 'organization',
                        name: "{{organization_e473ce45_t1cl}}",
                        binding: 'organization',
                        updateOn: 'blur',
                        defaultI18nValue: '组织',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "organization", void 0);
                __decorate([
                    NgFormControl({
                        id: 'gender',
                        name: "{{gender_58fd9314_3uve}}",
                        binding: 'gender',
                        updateOn: 'blur',
                        defaultI18nValue: '性别',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "gender", void 0);
                __decorate([
                    NgFormControl({
                        id: 'countryOrArea',
                        name: "{{countryOrArea_d74fa6c7_uuzf}}",
                        binding: 'countryOrArea',
                        updateOn: 'blur',
                        defaultI18nValue: '所属国家或地区',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "countryOrArea", void 0);
                __decorate([
                    NgFormControl({
                        id: 'location',
                        name: "{{location_38a3f824_lq1v}}",
                        binding: 'location',
                        updateOn: 'blur',
                        defaultI18nValue: '常驻地',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "location", void 0);
                __decorate([
                    NgFormControl({
                        id: 'postID',
                        name: "{{postID_fe7c6d11_pzus}}",
                        binding: 'postID',
                        updateOn: 'blur',
                        defaultI18nValue: '职级',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "postID", void 0);
                __decorate([
                    NgFormControl({
                        id: 'category',
                        name: "{{category_13aa1e37_gpkh}}",
                        binding: 'category',
                        updateOn: 'blur',
                        defaultI18nValue: '人员类别',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "category", void 0);
                __decorate([
                    NgFormControl({
                        id: 'displayName',
                        name: "{{displayName_cf08e0f6_f64n}}",
                        binding: 'displayName',
                        updateOn: 'blur',
                        defaultI18nValue: '显示姓名',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "displayName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'telephone',
                        name: "{{telephone_03cb4977_ilcq}}",
                        binding: 'telephone',
                        updateOn: 'blur',
                        defaultI18nValue: '联系电话',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "telephone", void 0);
                __decorate([
                    NgFormControl({
                        id: 'secret',
                        name: "{{secret_fb560c3d_r80g}}",
                        binding: 'secret',
                        updateOn: 'blur',
                        defaultI18nValue: '密级',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "secret", void 0);
                __decorate([
                    NgFormControl({
                        id: 'mailbox',
                        name: "{{mailbox_ca7ab15d_acak}}",
                        binding: 'mailbox',
                        updateOn: 'blur',
                        defaultI18nValue: '邮箱',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "mailbox", void 0);
                DataGridComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '行政人员',
                        enableValidate: false
                    }),
                    Injectable()
                ], DataGridComponentViewmodelForm);
                return DataGridComponentViewmodelForm;
            }(Form));

            var DataGridComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelUIState, _super);
                function DataGridComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DataGridComponentViewmodelUIState = __decorate([
                    Injectable()
                ], DataGridComponentViewmodelUIState);
                return DataGridComponentViewmodelUIState;
            }(UIState));

            var ChangePage1Handler = /** @class */ (function (_super) {
                __extends(ChangePage1Handler, _super);
                function ChangePage1Handler(_CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                ChangePage1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCommandName}',
                            '{COMMAND~/params/loadCommandFrameId}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                };
                ChangePage1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangePage1'
                    }),
                    __metadata("design:paramtypes", [CommandService])
                ], ChangePage1Handler);
                return ChangePage1Handler;
            }(CommandHandler));

            var DataGridComponent = /** @class */ (function (_super) {
                __extends(DataGridComponent, _super);
                function DataGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
                    _this.dataGridColumns = [];
                    _this.cls = 'f-struct-wrapper f-utils-fill-flex-column ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.SectiondatagridsectionMainTitle = _this.langService.transform("Section/data-grid-section/mainTitle", _this.lang, "");
                    _this.SectiondatagridsectionSubTitle = _this.langService.transform("Section/data-grid-section/subTitle", _this.lang, "");
                    _this.dataGridlineNumberTitle = _this.langService.transform("DataGrid/dataGrid/lineNumberTitle", _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGridDataGrid);
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
                DataGridComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.dataGridColumns = [
                        [
                            {
                                id: 'id_e793c221_1nzc',
                                field: 'id',
                                width: 120,
                                title: this.langService.transform("id_e793c221_1nzc", this.lang, "主键"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'version_9eb823f7_sasv',
                                field: 'version',
                                width: 120,
                                title: this.langService.transform("version_9eb823f7_sasv", this.lang, "版本"),
                                dataType: 'datetime',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                formatter: { "type": "datetime", "options": { "format": "yyyy-MM-dd HH:mm:ss" } }
                            },
                            {
                                id: 'code_60bea67e_49il',
                                field: 'code',
                                width: 120,
                                title: this.langService.transform("code_60bea67e_49il", this.lang, "编号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'name_316a9d3c_4tqx',
                                field: 'name',
                                width: 120,
                                title: this.langService.transform("name_316a9d3c_4tqx", this.lang, "名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'remark_f1b6442a_yhbi',
                                field: 'remark',
                                width: 120,
                                title: this.langService.transform("remark_f1b6442a_yhbi", this.lang, "备注"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'state_3a5365bd_kvai',
                                field: 'state',
                                width: 120,
                                title: this.langService.transform("state_3a5365bd_kvai", this.lang, "状态"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'organization_e473ce45_t1cl',
                                field: 'organization',
                                width: 120,
                                title: this.langService.transform("organization_e473ce45_t1cl", this.lang, "组织"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'gender_58fd9314_3uve',
                                field: 'gender',
                                width: 120,
                                title: this.langService.transform("gender_58fd9314_3uve", this.lang, "性别"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'countryOrArea_d74fa6c7_uuzf',
                                field: 'countryOrArea',
                                width: 120,
                                title: this.langService.transform("countryOrArea_d74fa6c7_uuzf", this.lang, "所属国家或地区"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'location_38a3f824_lq1v',
                                field: 'location',
                                width: 120,
                                title: this.langService.transform("location_38a3f824_lq1v", this.lang, "常驻地"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'postID_fe7c6d11_pzus',
                                field: 'postID',
                                width: 120,
                                title: this.langService.transform("postID_fe7c6d11_pzus", this.lang, "职级"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'category_13aa1e37_gpkh',
                                field: 'category',
                                width: 120,
                                title: this.langService.transform("category_13aa1e37_gpkh", this.lang, "人员类别"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'displayName_cf08e0f6_f64n',
                                field: 'displayName',
                                width: 120,
                                title: this.langService.transform("displayName_cf08e0f6_f64n", this.lang, "显示姓名"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'telephone_03cb4977_ilcq',
                                field: 'telephone',
                                width: 120,
                                title: this.langService.transform("telephone_03cb4977_ilcq", this.lang, "联系电话"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'secret_fb560c3d_r80g',
                                field: 'secret',
                                width: 120,
                                title: this.langService.transform("secret_fb560c3d_r80g", this.lang, "密级"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'mailbox_ca7ab15d_acak',
                                field: 'mailbox',
                                width: 120,
                                title: this.langService.transform("mailbox_ca7ab15d_acak", this.lang, "邮箱"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'dataGrid_caozuolie',
                                width: 120,
                                title: this.langService.transform("DataGrid/dataGrid/OperateColumn", this.lang, "操作"),
                                dataType: 'string',
                                template: this.dataGridmanageTemplate,
                                align: 'center',
                                halign: 'center',
                                isMultilingualField: false,
                                fixed: 'right',
                                visible: function () { return true; },
                                filter: false,
                            }
                        ]
                    ];
                    this.viewModel.dataGridColumns = this.dataGridColumns;
                    this.viewModel.dataGridColumnsName = "dataGridColumns";
                    this.onFormLoad();
                };
                DataGridComponent.prototype.ngAfterViewInit = function () {
                };
                DataGridComponent.prototype.ngOnDestroy = function () {
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
                DataGridComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                DataGridComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    ViewChild('dataGridDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], DataGridComponent.prototype, "dataGridDataGrid", void 0);
                __decorate([
                    ViewChild('dataGridmanageTemplate'),
                    __metadata("design:type", TemplateRef)
                ], DataGridComponent.prototype, "dataGridmanageTemplate", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DataGridComponent.prototype, "cls", void 0);
                DataGridComponent = __decorate([
                    Component({
                        selector: 'app-datagridcomponent',
                        templateUrl: './datagridcomponent.html',
                        styleUrls: ['./datagridcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'data-grid-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: EmployeeRepository },
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
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
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
                ], DataGridComponent);
                return DataGridComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$3 = (createTranslateLoader$1), ɵ1$1 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$1 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var EmployCard11Module = /** @class */ (function () {
                function EmployCard11Module(trans) {
                    this.trans = trans;
                }
                EmployCard11Module = __decorate([
                    NgModule({
                        exports: [
                            RootComponent
                        ],
                        bootstrap: [
                            RootComponent
                        ],
                        entryComponents: [
                            RootComponent
                        ],
                        declarations: [
                            LangPipe,
                            SafeHtmlPipe,
                            RootComponent,
                            DataGridComponent
                        ],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            LayoutModule,
                            KendoBindingModule,
                            FlexLayoutModule,
                            LoadingModule.forRoot(),
                            MessagerModule.forRoot(),
                            NotifyModule.forRoot(),
                            CommandServicesModule,
                            FResponseToolbarModule,
                            FarrisFormsModule,
                            FormMessageModule,
                            TranslateModule.forRoot({
                                loader: {
                                    provide: TranslateLoader,
                                    useFactory: ɵ0$3,
                                    deps: [HttpClient]
                                },
                                missingTranslationHandler: { provide: MissingTranslationHandler, useClass: JitMissingTranslationHandler }
                            }),
                            VerifyDetailModule,
                            FarrisTooltipModule,
                            FarrisRTFModule,
                            GridModule,
                            DateInputsModule,
                            FarrisCommonModule,
                            DateHelperModule.forRoot(),
                            DropDownsModule,
                            ButtonsModule,
                            FarrisTabsModule,
                            FarrisTagModule,
                            FarrisSidebarModule,
                            UploadDialogMoudle,
                            InputsModule,
                            IntlModule,
                            LookupModule,
                            TreeTableModule,
                            FieldGroupModule,
                            FarrisSectionModule,
                            FarrisDatePickerModule,
                            FarrisTimeSpinnerModule,
                            WizardModule,
                            QuerySolutionModule,
                            FarrisButtonModule,
                            ListViewModule,
                            TimePickerModule,
                            AngularDraggableModule,
                            SplitterModule,
                            ListNavModule,
                            TextModule,
                            WFRuntimeModule,
                            MultiSelectModule,
                            InputGroupModule,
                            ComboListModule,
                            CloudPrintModule,
                            DatagridEditorsModule,
                            FarrisHtmlEditorModule,
                            ViewChangeModule,
                            ListFilterModule,
                            SimpleFilterModule,
                            AvatarModule,
                            UiFlowchartModule,
                            CalendarModule,
                            NumberSpinnerModule,
                            ComboLookupModule,
                            ScrollspyModule,
                            LanguageTextboxModule,
                            DynamicControlGroupModule,
                            FileListModule,
                            SwitchModule.forRoot(),
                            FarrisFooterModule,
                            BatchEditDialogModule,
                            DiscussionGroupModule,
                            NavModule,
                            TagsModule,
                            FfileuploadAdaptUnifileModule,
                            DatagridFilterRowModule.forRoot(),
                            DatagridSettingsModule.forRoot(),
                            DatagridModule.forRoot(EditorProviders.slice()),
                            EditorModule.forRoot('/platform/common/web/assets/tinymce/tinymce.min.js'),
                            FrmCommonModule.forRoot(),
                            FEHeaderFooterModule,
                            FEPageModalModule.forRoot(),
                            FeatureEditorModule,
                            FEScrollCollapsibleAreaModule,
                            EmployCard11RoutingModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$1 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/apporder/df/web/bo-organization-front/employcard11/' },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ2$1 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], EmployCard11Module);
                return EmployCard11Module;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/apporder/df/web/bo-organization-front/employcard11/i18n/', '.json');
            }

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RouterModuleNgFactory = ɵcmf(RouterModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]])]); });
            var styles_ɵEmptyOutletComponent = [];
            var RenderType_ɵEmptyOutletComponent = ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
            function View_ɵEmptyOutletComponent_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ɵdid(1, 212992, null, 0, RouterOutlet, [ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [8, null], ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_ɵEmptyOutletComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), ɵdid(1, 49152, null, 0, ɵEmptyOutletComponent, [], null, null)], null, null); }
            var ɵEmptyOutletComponentNgFactory = ɵccf("ng-component", ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$1 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_DataGridComponent = [styles$1];
            var RenderType_DataGridComponent = ɵcrt({ encapsulation: 0, styles: styles_DataGridComponent, data: {} });
            function View_DataGridComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-datagrid", [["class", "f-component-grid"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "pageChanged"], [null, "scrollYLoad"], [null, "pageSizeChanged"], [null, "click"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (ɵnov(_v, 7).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (ɵnov(_v, 7).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (ɵnov(_v, 7).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (ɵnov(_v, 7).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 7).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (ɵnov(_v, 7).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (ɵnov(_v, 7).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } if (("pageChanged" === en)) {
                    var pd_8 = (_co.viewModel.ChangePage1($event) !== false);
                    ad = (pd_8 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_9 = (_co.viewModel.ChangePage1($event) !== false);
                    ad = (pd_9 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_10 = (_co.viewModel.ChangePage1($event) !== false);
                    ad = (pd_10 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGridDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], pagination: [18, "pagination"], pageList: [19, "pageList"], pageSize: [20, "pageSize"], showPageList: [21, "showPageList"], showGotoInput: [22, "showGotoInput"], multiSelect: [23, "multiSelect"], showCheckbox: [24, "showCheckbox"], showAllCheckbox: [25, "showAllCheckbox"], checkOnSelect: [26, "checkOnSelect"], selectOnCheck: [27, "selectOnCheck"], selectionMode: [28, "selectionMode"], keepSelect: [29, "keepSelect"], useBlankWhenDataIsEmpty: [30, "useBlankWhenDataIsEmpty"], emptyDataHeight: [31, "emptyDataHeight"], fields: [32, "fields"], nowrap: [33, "nowrap"], virtualized: [34, "virtualized"], virtualizedAsyncLoad: [35, "virtualizedAsyncLoad"], editMode: [36, "editMode"], enableEditCellStyle: [37, "enableEditCellStyle"], selectOnEditing: [38, "selectOnEditing"], enableDragColumn: [39, "enableDragColumn"], expandGroupRows: [40, "expandGroupRows"], groupSummaryPosition: [41, "groupSummaryPosition"], showGroupColumn: [42, "showGroupColumn"], showRowGroupPanel: [43, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [44, "AutoColumnWidthUseDblclick"], mergeCell: [45, "mergeCell"], enableSimpleMode: [46, "enableSimpleMode"], enableScheme: [47, "enableScheme"], enableSetMultiHeaders: [48, "enableSetMultiHeaders"], showConfirmWhenSchemeChanged: [49, "showConfirmWhenSchemeChanged"], clearSelectionsWhenDataIsEmpty: [50, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [51, "enableContextMenu"], enableHighlightCell: [52, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 10, { dgColumns: 1 }), ɵpad(6, 5), ɵdid(7, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(8, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService$1, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(9, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(10, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(11, 4407296, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = true; var currVal_15 = false; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGridlineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = true; var currVal_22 = _ck(_v, 6, 0, 10, 20, 30, 50, 100); var currVal_23 = 20; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = false; var currVal_29 = false; var currVal_30 = false; var currVal_31 = "default"; var currVal_32 = true; var currVal_33 = false; var currVal_34 = 240; var currVal_35 = _co.viewModel.dataGridColumns; var currVal_36 = true; var currVal_37 = false; var currVal_38 = false; var currVal_39 = "cell"; var currVal_40 = false; var currVal_41 = false; var currVal_42 = false; var currVal_43 = true; var currVal_44 = "groupFooterRow"; var currVal_45 = true; var currVal_46 = false; var currVal_47 = true; var currVal_48 = false; var currVal_49 = false; var currVal_50 = false; var currVal_51 = false; var currVal_52 = false; var currVal_53 = true; var currVal_54 = false; var currVal_55 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55]); _ck(_v, 7, 0); var currVal_56 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_57 = true; _ck(_v, 8, 0, currVal_56, currVal_57); var currVal_58 = ""; _ck(_v, 10, 0, currVal_58); _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_DataGridComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "farris-section", [["class", "f-section-grid f-section-in-managelist"], ["id", "data-grid-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 3, { headerDirective: 0 }), ɵqud(335544320, 4, { headerTitleDirective: 0 }), ɵqud(335544320, 5, { headerContentDirective: 0 }), ɵqud(335544320, 6, { headerToolbarDirective: 0 }), ɵqud(335544320, 7, { extendDirective: 0 }), ɵqud(335544320, 8, { contentDirective: 0 }), ɵqud(335544320, 9, { viewChangeDirective: 0 }), ɵdid(9, 4407296, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵeld(10, 0, null, 0, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_2)), ɵdid(12, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondatagridsectionMainTitle; var currVal_7 = _co.SectiondatagridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = true; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 12, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatusCls; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_DataGridComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "div", [["class", "f-btn-group "]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 6, "div", [["class", "btn-group-sm btn-group f-btn-group-links"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 2, "button", [["class", "btn-link btn ng-star-inserted"]], null, null, null, null, null)), (_l()(), ɵted(3, null, ["", ""])), ɵppd(4, 3), (_l()(), ɵeld(5, 0, null, null, 2, "button", [["class", "btn-link btn ng-star-inserted"]], null, null, null, null, null)), (_l()(), ɵted(6, null, ["", ""])), ɵppd(7, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent, 0), "DataGrid/dataGrid/OperateEditButton", _co.lang, "\u7F16\u8F91")); _ck(_v, 3, 0, currVal_0); var currVal_1 = ɵunv(_v, 6, 0, _ck(_v, 7, 0, ɵnov(_v.parent, 0), "DataGrid/dataGrid/OperateDeleteButton", _co.lang, "\u5220\u9664")); _ck(_v, 6, 0, currVal_1); }); }
            function View_DataGridComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(671088640, 1, { dataGridDataGrid: 0 }), ɵqud(402653184, 2, { dataGridmanageTemplate: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_1)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(0, [[2, 2], ["dataGridmanageTemplate", 2]], null, 0, null, View_DataGridComponent_3))], function (_ck, _v) { var currVal_0 = true; _ck(_v, 4, 0, currVal_0); }, null); }
            function View_DataGridComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0) { return [new ChangePage1Handler(p0_0)]; }, [CommandService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DataGridComponentNgFactory = ɵccf("app-datagridcomponent", DataGridComponent, View_DataGridComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-querysolution", [["farris-querysolution-event-bind", ""], ["id", "query-scheme-1"]], [[8, "className", 0]], [[null, "queryEmitter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("queryEmitter" === en)) {
                    var pd_0 = (ɵnov(_v, 5).onQuery() !== false);
                    ad = (pd_0 && ad);
                } if (("queryEmitter" === en)) {
                    var pd_1 = (_co.viewModel.Filter1($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_QuerySolutionComponent_0, RenderType_QuerySolutionComponent)), ɵprd(512, null, ConvertorService, ConvertorService, []), ɵprd(512, null, ɵa$1, ɵa$1, [HttpClient]), ɵprd(512, null, ɵb$2, ɵb$2, []), ɵdid(4, 770048, null, 0, QuerySolutionComponent, [NotifyService, ComponentFactoryResolver, Injector, BsModalService, ConvertorService, SolutionService, ɵa$1, ɵb$2, LocaleService], { fieldConfigs: [0, "fieldConfigs"], presetQuerySolutionName: [1, "presetQuerySolutionName"], presetFieldConfigs: [2, "presetFieldConfigs"], isDisabled: [3, "isDisabled"], formId: [4, "formId"], isFold: [5, "isFold"], isControlInline: [6, "isControlInline"], showCompleteLabel: [7, "showCompleteLabel"], enableInitQuery: [8, "enableInitQuery"], enableHistory: [9, "enableHistory"], filterText: [10, "filterText"] }, { queryEmitter: "queryEmitter" }), ɵdid(5, 16384, null, 0, FarrisQuerySolutionEventBindDirective, [Injector, QuerySolutionComponent, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.fieldConfigsqueryscheme1; var currVal_2 = _co.QuerySolutionqueryscheme1; var currVal_3 = _co.presetFieldConfigsqueryscheme1; var currVal_4 = false; var currVal_5 = "EmployCard11"; var currVal_6 = !true; var currVal_7 = true; var currVal_8 = false; var currVal_9 = false; var currVal_10 = false; var currVal_11 = _co.filterTextqueryscheme1; _ck(_v, 4, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).cls; _ck(_v, 0, 0, currVal_0); }); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-scheme f-section-in-managelist"], ["id", "query-scheme-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 1, { headerDirective: 0 }), ɵqud(335544320, 2, { headerTitleDirective: 0 }), ɵqud(335544320, 3, { headerContentDirective: 0 }), ɵqud(335544320, 4, { headerToolbarDirective: 0 }), ɵqud(335544320, 5, { extendDirective: 0 }), ɵqud(335544320, 6, { contentDirective: 0 }), ɵqud(335544320, 7, { viewChangeDirective: 0 }), ɵdid(9, 4407296, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_RootComponent_3)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectionqueryschemesectionMainTitle; var currVal_7 = _co.SectionqueryschemesectionSubTitle; var currVal_8 = false; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatusCls; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-manage"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-administer"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 2, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(4, null, ["", ""])), ɵppd(5, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 4, 0, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "title", _co.lang, "111")); _ck(_v, 4, 0, currVal_0); }); }
            function View_RootComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_7)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 83, "div", [["class", "f-page-main"], ["id", "page-main"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 82, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0) { return [new ChangePage1Handler(p0_0)]; }, [CommandService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(80, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 80, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 80).cls; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "div", [["class", "f-page f-page-is-managelist f-page-has-scheme"], ["id", "root-layout"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_8)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.viewModel.form; _ck(_v, 1, 0, currVal_7); var currVal_8 = true; _ck(_v, 5, 0, currVal_8); var currVal_9 = true; _ck(_v, 7, 0, currVal_9); var currVal_10 = true; _ck(_v, 9, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).ngClassUntouched; var currVal_1 = ɵnov(_v, 3).ngClassTouched; var currVal_2 = ɵnov(_v, 3).ngClassPristine; var currVal_3 = ɵnov(_v, 3).ngClassDirty; var currVal_4 = ɵnov(_v, 3).ngClassValid; var currVal_5 = ɵnov(_v, 3).ngClassInvalid; var currVal_6 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
            function View_RootComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 119, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(135680, null, EmployeeRepository, EmployeeRepository, [Injector]), ɵprd(6144, null, Repository, null, [EmployeeRepository]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1, p4_2, p5_0, p5_1, p5_2, p6_0, p6_1, p7_0, p7_1) { return [new Load1Handler(p0_0, p0_1), new Search1Handler(p1_0, p1_1), new RemoveRows1Handler(p2_0, p2_1), new Add1Handler(p3_0, p3_1), new View1Handler(p4_0, p4_1, p4_2), new Edit1Handler(p5_0, p5_1, p5_2), new Remove1Handler(p6_0, p6_1), new Filter1Handler(p7_0, p7_1)]; }, [ChangeItemService, ListDataService, ListDataService, FilterService, DataGridService, ListDataService, NavigationMiddlewareService, NavigationService, NavigationMiddlewareService, DataCheckService, NavigationService, NavigationMiddlewareService, DataCheckService, NavigationService, DataGridService, ListDataService, ChangeItemService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, ComponentManagerService, ComponentManagerService, []), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, EmployeeProxy, EmployeeProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, WEBAPI_PREFIX_TOKEN, ɵ0$2, [GSPFrameworkCommonService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(112, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, false, []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "7f47424a-41f7-44d5-876a-e491116b2041", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", []), ɵprd(256, null, CHANGE_SET_POLICY_TOKEN, "valid", [])], function (_ck, _v) { _ck(_v, 112, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 112).cls; _ck(_v, 0, 0, currVal_0); }); }
            var RootComponentNgFactory = ɵccf("app-rootcomponent", RootComponent, View_RootComponent_Host_0, {}, {}, []);

            // This service is based on the `ng2-cookies` package which sadly is not a service and does
            // not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
            // Package: https://github.com/BCJTI/ng2-cookies
            var CookieService = (function () {
                /**
                 * @param {?} document
                 * @param {?} platformId
                 */
                function CookieService(document, platformId) {
                    this.document = document;
                    this.platformId = platformId;
                    this.documentIsAccessible = isPlatformBrowser(this.platformId);
                }
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.check = function (name) {
                    if (!this.documentIsAccessible) {
                        return false;
                    }
                    name = encodeURIComponent(name);
                    var /** @type {?} */ regExp = this.getCookieRegExp(name);
                    var /** @type {?} */ exists = regExp.test(this.document.cookie);
                    return exists;
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.get = function (name) {
                    if (this.documentIsAccessible && this.check(name)) {
                        name = encodeURIComponent(name);
                        var /** @type {?} */ regExp = this.getCookieRegExp(name);
                        var /** @type {?} */ result = regExp.exec(this.document.cookie);
                        return decodeURIComponent(result[1]);
                    }
                    else {
                        return '';
                    }
                };
                /**
                 * @return {?}
                 */
                CookieService.prototype.getAll = function () {
                    if (!this.documentIsAccessible) {
                        return {};
                    }
                    var /** @type {?} */ cookies = {};
                    var /** @type {?} */ document = this.document;
                    if (document.cookie && document.cookie !== '') {
                        var /** @type {?} */ split = document.cookie.split(';');
                        for (var /** @type {?} */ i = 0; i < split.length; i += 1) {
                            var /** @type {?} */ currentCookie = split[i].split('=');
                            currentCookie[0] = currentCookie[0].replace(/^ /, '');
                            cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
                        }
                    }
                    return cookies;
                };
                /**
                 * @param {?} name     Cookie name
                 * @param {?} value    Cookie value
                 * @param {?=} expires  Number of days until the cookies expires or an actual `Date`
                 * @param {?=} path     Cookie path
                 * @param {?=} domain   Cookie domain
                 * @param {?=} secure   Secure flag
                 * @param {?=} sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `None`
                 * @return {?}
                 */
                CookieService.prototype.set = function (name, value, expires, path, domain, secure, sameSite) {
                    if (sameSite === void 0) { sameSite = 'None'; }
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
                    if (expires) {
                        if (typeof expires === 'number') {
                            var /** @type {?} */ dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                            cookieString += 'expires=' + dateExpires.toUTCString() + ';';
                        }
                        else {
                            cookieString += 'expires=' + expires.toUTCString() + ';';
                        }
                    }
                    if (path) {
                        cookieString += 'path=' + path + ';';
                    }
                    if (domain) {
                        cookieString += 'domain=' + domain + ';';
                    }
                    if (secure) {
                        cookieString += 'secure;';
                    }
                    cookieString += 'sameSite=' + sameSite + ';';
                    this.document.cookie = cookieString;
                };
                /**
                 * @param {?} name   Cookie name
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.delete = function (name, path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, undefined, 'Lax');
                };
                /**
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.deleteAll = function (path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookies = this.getAll();
                    for (var /** @type {?} */ cookieName in cookies) {
                        if (cookies.hasOwnProperty(cookieName)) {
                            this.delete(cookieName, path, domain);
                        }
                    }
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.getCookieRegExp = function (name) {
                    var /** @type {?} */ escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
                    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
                };
                return CookieService;
            }());
            CookieService.decorators = [
                { type: Injectable },
            ];
            /**
             * @nocollapse
             */
            CookieService.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
                { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
            ]; };

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var EmployCard11ModuleNgFactory = exports('EmployCard11ModuleNgFactory', ɵcmf(EmployCard11Module, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, SingleListComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, SearchPanelComponentNgFactory, SearchFieldPanelComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, LookupAdvancedLayoutComponentNgFactory, LookupFilterBarComponentNgFactory, FilterPanelComponentNgFactory, NgbTooltipWindowNgFactory, ɵaNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, NewHeaderFormComponentNgFactory, SetColumnsComponentNgFactory, PreviewMultiHeadersComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, OverLayHiddenService, OverLayHiddenService, []), ɵmpd(4608, DialogService$1, DialogService$1, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService$1, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa, ɵa, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$1, ɵc$1, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, SolutionService$1, SolutionService$1, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService, FilterService, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, BasePathService, BasePathService, []), ɵmpd(4608, GSPFrameworkCommonService, GSPFrameworkCommonService, []), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$2, NavigationService$2, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, UploadService, UploadService, [HttpService, HttpClient]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService, SolutionService, [NotifyService]), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, StateService, StateService, [NotifyService, LocaleService]), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ViewChangeService, ViewChangeService, []), ɵmpd(4608, ViewChangeManageService, ViewChangeManageService, []), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService, [2, Injector]]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService], [2, Injector]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService], [2, Injector]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ2$1, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf, ɵf, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SearchBoxModule, SearchBoxModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, FarrisRTFModule, FarrisRTFModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, EmployCard11RoutingModule, EmployCard11RoutingModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$3, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, EmployCard11Module, EmployCard11Module, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$1, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(256, TabConfig, undefined, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$3 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$3 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$4, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/apporder/df/web/bo-organization-front/employcard11/", [])]); }));

        }
    };
});
