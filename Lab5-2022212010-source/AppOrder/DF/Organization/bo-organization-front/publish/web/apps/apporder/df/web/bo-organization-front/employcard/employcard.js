/*! UPDATE TIME: 2024/11/8 15:30:15 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/rtf', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@farris/ui-common', '@farris/ui-common/date', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@angular/router', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-forms/farris-ui-forms.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-search-box/farris-ui-search-box.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-enum-editor/farris-ui-enum-editor.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-locale', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@farris/ui-dialog', '@gsp-wf/wf-task-handler', '@farris/ui-modal', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-text/farris-ui-text.ngfactory', '@farris/ui-common/number', '@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory', '@farris/ui-shortcuts', '@progress/kendo-angular-dialog', '@progress/kendo-angular-l10n', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-pagination', '@farris/ui-popover', '@farris/ui-common/column', '@progress/kendo-angular-popup', '@gsp-wf/wf-approval-logs', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-filter-condition', '@progress/kendo-angular-resize-sensor', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@farris/ui-perfect-scrollbar', '@farris/ui-area-response', '@farris/ui-datatable', '@farris/ui-datalist', '@farris/ui-layout', '@farris/ui-dropdown', '@farris/ui-search-box', '@farris/ui-filter-panel', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-enum-editor', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-organization-selector', '@farris/ui-tree'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, Component, ElementRef, NgModule, ViewChild, TemplateRef, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, ɵprd, ApplicationRef, ɵnov, ɵpid, ɵqud, ɵand, ɵted, ɵppd, ɵunv, NgZone, Renderer2, IterableDiffers, KeyValueDiffers, ɵpod, ɵinlineInterpolate, ɵpad, Compiler, Inject, InjectionToken, PLATFORM_ID, RendererFactory2, ErrorHandler, __decorate, __metadata, __extends, CommonModule, NgIf, NgClass, DOCUMENT, isPlatformBrowser, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, FormControl, FormsModule, ReactiveFormsModule, FormGroupDirective, ControlContainer, NgControlStatusGroup, DefaultValueAccessor, COMPOSITION_BUFFER_MODE, MaxLengthValidator, NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControlName, ɵangular_packages_forms_forms_k, NgControl, NgControlStatus, ɵangular_packages_forms_forms_j, FormBuilder, ɵangular_packages_forms_forms_bc, KendoBindingModule, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, DatagridComponentRefDirective, SectionComponentRefDirective, InputEndEditDirective, LookupDataMappingDirective, LookupGridComponentRefDirective, FarrisDynamicRequiredDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, FlexLayoutModule, FarrisFormsModule, FormMessageModule, ValidationMessageComponent, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, switchMap, catchError, HttpClient, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientModule, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, DomSanitizer, EventManager, BasePathService, GSPFrameworkCommonService, resolveBasePath, FarrisRTFModule, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgList, EntityList, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, UIState, NgCommandHandler, CommandHandler, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, CHANGE_SET_POLICY_TOKEN, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, FrameContext, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, ChangeItemService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, FocusInvalidService, SubListDataService, DataGridService, ListDataService, CommandServicesModule, FormMessageService, FormLoadingService, LanguageService, FormNotifyService, FormErrorService, FilterConditionService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, TreeDataService, SubTreeDataService, RuntimeFrameworkService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, NavigationEventService, MenuStateService, QuerystringService, NavigationService, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService, RouterService, AuthorityService, ɵb, ɵc, BatchEditService, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$2, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, SessionService, HttpService, LanguageService$1, CacheStorageAbstract, CacheMemoryStorage, CacheService, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, FInputTipsDirective, GridModule, GridComponent, BrowserSupportService, SelectionService, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ScrollSyncService, DomEventsService, ColumnResizingService, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, NavigationService$2, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, TOUCH_ENABLED, touchEnabled, WEBAPI_PREFIX_TOKEN, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, OverLayHiddenService, DateHelperModule, DateTimeHelperService, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupGridComponent, LookupModule, PersonalConfigService, LookupDefaultMapping, LookupUtils, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, CollapseDirective, ɵa, FarrisTabsModule, FarrisTabsComponent, TabService, FarrisTabComponent, NgbDropdownConfig, NgbTooltipConfig, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, SplitterModule, ListNavModule, TextModule, TextComponent, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, ComboServerSideToken, ComboListModule, ComboLocaleService, FarrisHtmlEditorModule, ɵb$3, defaultModules, CloudprintService, CloudPrintModule, ɵa$1, ɵb$1, ɵc$1, ɵe, EditorTypes, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$2, ɵc$2, ɵd$1, ɵe$1, ɵf$1, ɵg$1, ɵh$1, ɵi, ɵj$1, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, ViewChangeService, ViewChangeManageService, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$1, ConvertorService, SolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, ComboLookupModule, ScrollspyModule, FarrisScrollSpyService, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf, ɵh, ɵbe, ɵg, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, SingleListComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, SearchPanelComponentNgFactory, SearchFieldPanelComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, View_LookupGridComponent_0, RenderType_LookupGridComponent, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, LookupAdvancedLayoutComponentNgFactory, LookupFilterBarComponentNgFactory, FilterPanelComponentNgFactory, View_FarrisTabsComponent_0, RenderType_FarrisTabsComponent, View_FarrisTabComponent_0, RenderType_FarrisTabComponent, NgbTooltipWindowNgFactory, ɵaNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, NewHeaderFormComponentNgFactory, SetColumnsComponentNgFactory, PreviewMultiHeadersComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, LocaleService, FARRIS_LOCAL_CUSTOM_DATA, LocaleModule, View_DatagridComponent_0, RenderType_DatagridComponent, DialogService$1, FarrisDialogModule, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, BsModalService, ModalModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, View_TextComponent_0, RenderType_TextComponent, NumberHelperService, NumberHelperModule, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent, ShortcutsService, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$2, WindowModule, DialogModule, LocalizationService$1, PositioningService, ComponentLoaderFactory, PaginationService$1, PaginationModule, PopoverConfig, PopoverModule, ColumnFormatService, DataColumnModule, PopupService, POPUP_CONTAINER, PopupModule, WfApprovalLogsService, WfApprovalLogsModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService, QuerySolutionService, FilterConditionModule, ResizeBatchService, ResizeSensorModule, SolutionService$1, ConvertorService$1, StateService, QueryConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, PerfectScrollbarModule, FAreaResponseModule, DataTableModule, DatalistModule, LayoutModule$1, FDropdownDirectiveTypeModule, SearchBoxModule, FilterPanelModule, TaskImplApiModule, WfSignModule, EnumEditorModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, OrganizationSelectorModule, TreeModule;
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
            IterableDiffers = module.IterableDiffers;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵpod = module.ɵpod;
            ɵinlineInterpolate = module.ɵinlineInterpolate;
            ɵpad = module.ɵpad;
            Compiler = module.Compiler;
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
            NgClass = module.NgClass;
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
            DefaultValueAccessor = module.DefaultValueAccessor;
            COMPOSITION_BUFFER_MODE = module.COMPOSITION_BUFFER_MODE;
            MaxLengthValidator = module.MaxLengthValidator;
            NG_VALIDATORS = module.NG_VALIDATORS;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            FormControlName = module.FormControlName;
            ɵangular_packages_forms_forms_k = module.ɵangular_packages_forms_forms_k;
            NgControl = module.NgControl;
            NgControlStatus = module.NgControlStatus;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            FormBuilder = module.FormBuilder;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
        }, function (module) {
            KendoBindingModule = module.KendoBindingModule;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            DatagridComponentRefDirective = module.DatagridComponentRefDirective;
            SectionComponentRefDirective = module.SectionComponentRefDirective;
            InputEndEditDirective = module.InputEndEditDirective;
            LookupDataMappingDirective = module.LookupDataMappingDirective;
            LookupGridComponentRefDirective = module.LookupGridComponentRefDirective;
            FarrisDynamicRequiredDirective = module.FarrisDynamicRequiredDirective;
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
            ValidationMessageComponent = module.ValidationMessageComponent;
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
            NgAction = module.NgAction;
            StateMachine = module.StateMachine;
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
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            CommandService = module.CommandService;
            CardDataService = module.CardDataService;
            StateMachineService = module.StateMachineService;
            ValidationService = module.ValidationService;
            EndEditService = module.EndEditService;
            PaginationService = module.PaginationService;
            ChangeItemService = module.ChangeItemService;
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            FocusInvalidService = module.FocusInvalidService;
            SubListDataService = module.SubListDataService;
            DataGridService = module.DataGridService;
            ListDataService = module.ListDataService;
            CommandServicesModule = module.CommandServicesModule;
            FormMessageService = module.FormMessageService;
            FormLoadingService = module.FormLoadingService;
            LanguageService = module.LanguageService;
            FormNotifyService = module.FormNotifyService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
            UIStateService = module.UIStateService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            TreeDataService = module.TreeDataService;
            SubTreeDataService = module.SubTreeDataService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
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
            NavigationService = module.NavigationService;
            GridMiddlewareService = module.GridMiddlewareService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ɵb = module.ɵb;
            ɵc = module.ɵc;
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
            DataCheckService = module.DataCheckService;
            EventService = module.EventService;
            FilterService$2 = module.FilterService;
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
            FInputTipsDirective = module.FInputTipsDirective;
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
            FilterService = module.FilterService;
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
            LookupGridComponent = module.LookupGridComponent;
            LookupModule = module.LookupModule;
            PersonalConfigService = module.PersonalConfigService;
            LookupDefaultMapping = module.LookupDefaultMapping;
            LookupUtils = module.LookupUtils;
        }, function (module) {
            TreeTableModule = module.TreeTableModule;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
            CollapseDirective = module.CollapseDirective;
            ɵa = module.ɵa;
        }, function (module) {
            FarrisTabsModule = module.FarrisTabsModule;
            FarrisTabsComponent = module.FarrisTabsComponent;
            TabService = module.TabService;
            FarrisTabComponent = module.FarrisTabComponent;
            NgbDropdownConfig = module.NgbDropdownConfig;
            NgbTooltipConfig = module.NgbTooltipConfig;
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
            TextComponent = module.TextComponent;
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
            ɵb$3 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa$1 = module.ɵa;
            ɵb$1 = module.ɵb;
            ɵc$1 = module.ɵc;
            ɵe = module.ɵe;
        }, function (module) {
            EditorTypes = module.EditorTypes;
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$4 = module.ɵa;
            ɵb$2 = module.ɵb;
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
            FilterService$1 = module.FilterService;
            ConvertorService = module.ConvertorService;
            SolutionService = module.SolutionService;
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
            View_LookupGridComponent_0 = module.View_LookupGridComponent_0;
            RenderType_LookupGridComponent = module.RenderType_LookupGridComponent;
            LookupLeftComponentNgFactory = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory = module.LookupTabsComponentNgFactory;
            LookupQuickSelectPanelComponentNgFactory = module.LookupQuickSelectPanelComponentNgFactory;
            LookupAdvancedLayoutComponentNgFactory = module.LookupAdvancedLayoutComponentNgFactory;
            LookupFilterBarComponentNgFactory = module.LookupFilterBarComponentNgFactory;
        }, function (module) {
            FilterPanelComponentNgFactory = module.FilterPanelComponentNgFactory;
        }, function (module) {
            View_FarrisTabsComponent_0 = module.View_FarrisTabsComponent_0;
            RenderType_FarrisTabsComponent = module.RenderType_FarrisTabsComponent;
            View_FarrisTabComponent_0 = module.View_FarrisTabComponent_0;
            RenderType_FarrisTabComponent = module.RenderType_FarrisTabComponent;
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
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            LocaleService = module.LocaleService;
            FARRIS_LOCAL_CUSTOM_DATA = module.FARRIS_LOCAL_CUSTOM_DATA;
            LocaleModule = module.LocaleModule;
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
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            View_TextComponent_0 = module.View_TextComponent_0;
            RenderType_TextComponent = module.RenderType_TextComponent;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }, function (module) {
            View_ValidationMessageComponent_0 = module.View_ValidationMessageComponent_0;
            RenderType_ValidationMessageComponent = module.RenderType_ValidationMessageComponent;
        }, function (module) {
            ShortcutsService = module.ShortcutsService;
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
            SolutionService$1 = module.SolutionService;
            ConvertorService$1 = module.ConvertorService;
            StateService = module.StateService;
            QueryConditionModule = module.QueryConditionModule;
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
                return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/employcard/i18n/'), '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "TextBox/name_ff2e5859_wvll/placeHolder": "", "organization_a907d00a_92ml": "组织", "TextBox/organization_a907d00a_92ml/placeHolder": "", "gender_51233fb4_ha88": "性别", "TextBox/gender_51233fb4_ha88/placeHolder": "", "displayName_62f24d5d_n9s7": "显示姓名", "TextBox/displayName_62f24d5d_n9s7/placeHolder": "", "secret_0a814da7_hq3u": "密级", "TextBox/secret_0a814da7_hq3u/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "行政人员维护", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "main-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container": "", "detail-section": "", "Section/detail-section/mainTitle": "", "Section/detail-section/subTitle": "", "detail-tab": "", "jobinfo-tab-page": "工作信息", "jobinfo-component-ref": "", "jobinfo-tab-toolbar": "", "jobinfoAddButton": "新增", "jobinfoRemoveButton": "删除", "eduinfo-tab-page": "教育信息", "eduinfo-component-ref": "", "eduinfo-tab-toolbar": "", "eduinfoAddButton": "新增", "eduinfoRemoveButton": "删除", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "5eeb5876-c50b-4a70-b7ef-e3943f778315": "新增分组", "FieldSet/5eeb5876-c50b-4a70-b7ef-e3943f778315/collapseText": "", "FieldSet/5eeb5876-c50b-4a70-b7ef-e3943f778315/expandText": "", "code_ca1a3fb2_1m5u": "编号", "TextBox/code_ca1a3fb2_1m5u/placeHolder": "", "name_ff2e5859_wvll": "组织", "LookupEdit/name_ff2e5859_wvll/placeHolder": "", "LookupEdit/name_ff2e5859_wvll/dialogTitle": "", "8c768e24-31ec-470f-9262-d8813ba8bdfb": "新增分组", "FieldSet/8c768e24-31ec-470f-9262-d8813ba8bdfb/collapseText": "", "FieldSet/8c768e24-31ec-470f-9262-d8813ba8bdfb/expandText": "", "remark_d42ea20c_sj20": "备注", "TextBox/remark_d42ea20c_sj20/placeHolder": "", "countryOrArea_88fe9039_ke9g": "所属国家或地区", "TextBox/countryOrArea_88fe9039_ke9g/placeHolder": "", "location_fd499f05_bmbu": "常驻地", "TextBox/location_fd499f05_bmbu/placeHolder": "", "category_61bd7708_z4k0": "人员类别", "TextBox/category_61bd7708_z4k0/placeHolder": "", "postID_c9c53a79_k5er": "职级", "TextBox/postID_c9c53a79_k5er/placeHolder": "", "state_6b3e9bc9_40q9": "状态", "TextBox/state_6b3e9bc9_40q9/placeHolder": "", "83a86990-2592-409e-b90b-5a5ae012e751": "联系方式", "FieldSet/83a86990-2592-409e-b90b-5a5ae012e751/collapseText": "", "FieldSet/83a86990-2592-409e-b90b-5a5ae012e751/expandText": "", "mailbox_8d5f92ea_to45": "邮箱", "TextBox/mailbox_8d5f92ea_to45/placeHolder": "", "telephone_cbeb9998_ukhr": "联系电话", "TextBox/telephone_cbeb9998_ukhr/placeHolder": "", "jobinfo-component": "", "jobinfo-component-layout": "", "dataGrid_jobinfo": "", "DataGrid/dataGrid_jobinfo/lineNumberTitle": "", "DataGrid/dataGrid_jobinfo/OperateEditButton": "编辑", "DataGrid/dataGrid_jobinfo/OperateDeleteButton": "删除", "DataGrid/dataGrid_jobinfo/OperateColumn": "操作", "company_420c3a35_2gnr": "工作单位", "GridField/company_420c3a35_2gnr/editor/company_420c3a35_5vy3": "工作单位", "GridField/company_420c3a35_2gnr/editor/TextBox/company_420c3a35_5vy3/placeHolder": "", "timeInterval_c1c46d6f_edm7": "时间区间", "GridField/timeInterval_c1c46d6f_edm7/editor/timeInterval_c1c46d6f_tybt": "时间区间", "GridField/timeInterval_c1c46d6f_edm7/editor/TextBox/timeInterval_c1c46d6f_tybt/placeHolder": "", "position_c51cd3a1_v04x": "岗位", "GridField/position_c51cd3a1_v04x/editor/position_c51cd3a1_d3o9": "岗位", "GridField/position_c51cd3a1_v04x/editor/TextBox/position_c51cd3a1_d3o9/placeHolder": "", "salary_3b56eedf_okgp": "薪资", "GridField/salary_3b56eedf_okgp/editor/salary_3b56eedf_023p": "薪资", "GridField/salary_3b56eedf_okgp/formatter/trueText": "是", "GridField/salary_3b56eedf_okgp/formatter/falseText": "否", "certifier_2688290d_h8l0": "证明人", "GridField/certifier_2688290d_h8l0/editor/certifier_2688290d_36qa": "证明人", "GridField/certifier_2688290d_h8l0/editor/TextBox/certifier_2688290d_36qa/placeHolder": "", "telephone_8ff4aeca_vykt": "证明人联系方式", "GridField/telephone_8ff4aeca_vykt/editor/telephone_8ff4aeca_scfx": "证明人联系方式", "GridField/telephone_8ff4aeca_vykt/editor/TextBox/telephone_8ff4aeca_scfx/placeHolder": "", "eduinfo-component": "", "eduinfo-component-layout": "", "dataGrid_eduinfo": "", "DataGrid/dataGrid_eduinfo/lineNumberTitle": "", "DataGrid/dataGrid_eduinfo/OperateEditButton": "编辑", "DataGrid/dataGrid_eduinfo/OperateDeleteButton": "删除", "DataGrid/dataGrid_eduinfo/OperateColumn": "操作", "empolyeeID_54068d87_wp5l": "人员ID", "GridField/empolyeeID_54068d87_wp5l/editor/empolyeeID_54068d87_3ng2": "人员ID", "GridField/empolyeeID_54068d87_wp5l/editor/TextBox/empolyeeID_54068d87_3ng2/placeHolder": "", "schoolName_3100ddda_di17": "学校名称", "GridField/schoolName_3100ddda_di17/editor/schoolName_3100ddda_liee": "学校名称", "GridField/schoolName_3100ddda_di17/editor/TextBox/schoolName_3100ddda_liee/placeHolder": "", "timeInterval_556dd1d1_8rcf": "时间区间", "GridField/timeInterval_556dd1d1_8rcf/editor/timeInterval_556dd1d1_emfg": "时间区间", "GridField/timeInterval_556dd1d1_8rcf/editor/TextBox/timeInterval_556dd1d1_emfg/placeHolder": "", "studyType_2f896fda_h66a": "学习形式", "GridField/studyType_2f896fda_h66a/editor/studyType_2f896fda_6ykx": "学习形式", "GridField/studyType_2f896fda_h66a/editor/TextBox/studyType_2f896fda_6ykx/placeHolder": "", "major_5e64f7eb_fdno": "专业", "GridField/major_5e64f7eb_fdno/editor/major_5e64f7eb_zaln": "专业", "GridField/major_5e64f7eb_fdno/editor/TextBox/major_5e64f7eb_zaln/placeHolder": "", "education_f8b3b3e8_azw8": "学历", "GridField/education_f8b3b3e8_azw8/editor/education_f8b3b3e8_nuyg": "学历", "GridField/education_f8b3b3e8_azw8/editor/TextBox/education_f8b3b3e8_nuyg/placeHolder": "", "eduSystem_50d4bac9_bhm8": "学制", "GridField/eduSystem_50d4bac9_bhm8/editor/eduSystem_50d4bac9_xq7h": "学制", "GridField/eduSystem_50d4bac9_bhm8/editor/TextBox/eduSystem_50d4bac9_xq7h/placeHolder": "", "degree_304819a8_wsms": "学位", "GridField/degree_304819a8_wsms/editor/degree_304819a8_chb3": "学位", "GridField/degree_304819a8_wsms/editor/TextBox/degree_304819a8_chb3/placeHolder": "", "isFirstDegree_d1e3393b_3ncw": "是否第一学历", "GridField/isFirstDegree_d1e3393b_3ncw/editor/isFirstDegree_d1e3393b_waxw": "是否第一学历", "GridField/isFirstDegree_d1e3393b_3ncw/formatter/trueText": "是", "GridField/isFirstDegree_d1e3393b_3ncw/formatter/falseText": "否", "isHighest_290b3ac4_z4oq": "是否最高学历", "GridField/isHighest_290b3ac4_z4oq/editor/isHighest_290b3ac4_8259": "是否最高学历", "GridField/isHighest_290b3ac4_z4oq/formatter/trueText": "是", "GridField/isHighest_290b3ac4_z4oq/formatter/falseText": "否" } };
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
                                var versionKey_1 = "employcard/" + langCode + ".json";
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

            var ɵ0 = { type: 'string' }, ɵ1 = { type: 'string' }, ɵ2 = { type: 'string' }, ɵ3 = { type: 'string' };
            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'BasicFormViewmodel': 'basicFormViewmodel',
                        'JobinfoComponentViewmodel': 'jobinfoComponentViewmodel',
                        'EduinfoComponentViewmodel': 'eduinfoComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel.prototype.Load1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndAdd1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndView1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndEdit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Add1 = function (commandParam) { return; };
                RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Save1 = function (commandParam) { return; };
                RootViewmodel.prototype.Cancel1 = function (commandParam) { return; };
                RootViewmodel.prototype.ChangeItem1 = function (commandParam) { return; };
                RootViewmodel.prototype.ChangeItem2 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'Load1',
                        params: {
                            action: '{UISTATE~/#{root-component}/action}'
                        },
                        paramDescriptions: {
                            action: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Load1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndAdd1',
                        params: {
                            transitionAction: 'Create'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndAdd1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndView1',
                        params: {
                            id: '{UISTATE~/#{root-component}/id}',
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ0,
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndView1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndEdit1',
                        params: {
                            id: '{UISTATE~/#{root-component}/id}',
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            id: ɵ1,
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndEdit1", null);
                __decorate([
                    NgCommand({
                        name: 'Add1',
                        params: {
                            transitionAction: 'Create'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Add1", null);
                __decorate([
                    NgCommand({
                        name: 'Edit1',
                        params: {
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            transitionAction: { type: '' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Edit1", null);
                __decorate([
                    NgCommand({
                        name: 'Save1',
                        params: {
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Save1", null);
                __decorate([
                    NgCommand({
                        name: 'Cancel1',
                        params: {
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Cancel1", null);
                __decorate([
                    NgCommand({
                        name: 'ChangeItem1',
                        params: {
                            id: '{DATA~/#{root-component}/id}',
                            type: 'prev',
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ2,
                            type: { type: 'string' },
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "ChangeItem1", null);
                __decorate([
                    NgCommand({
                        name: 'ChangeItem2',
                        params: {
                            id: '{DATA~/#{root-component}/id}',
                            type: 'next',
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ3,
                            type: { type: 'string' },
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "ChangeItem2", null);
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
                        nodeCode: "jobInfos",
                        allowEmpty: true
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
                        nodeCode: "eduInfos",
                        allowEmpty: true
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
                        nodeCode: "employees"
                    })
                ], EmployeeEntity);
                return EmployeeEntity;
            }(Entity));

            var EmployeeProxy = /** @class */ (function (_super) {
                __extends(EmployeeProxy, _super);
                function EmployeeProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/apporder/df/v1.0/employcard_frm';
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
                    _this.paginationInfo = {};
                    _this.proxy = injector.get(EmployeeProxy, null);
                    return _this;
                }
                EmployeeRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/apporder/df/v1.0/employcard_frm',
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

            var ɵ0$1 = function (context) { return context.state === 'init'; }, ɵ1$1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ2$1 = function (context) { return context.state === 'init'; }, ɵ3$1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ4 = function (context) { return context.state === 'init'; }, ɵ5 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ6 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ7 = function (context) { return context.state === 'add' || context.state === 'edit'; };
            var RootViewmodelStateMachine = /** @class */ (function (_super) {
                __extends(RootViewmodelStateMachine, _super);
                function RootViewmodelStateMachine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgState({ name: "新增" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "add", void 0);
                __decorate([
                    NgState({
                        initialState: true,
                        name: "初始"
                    }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "init", void 0);
                __decorate([
                    NgState({ name: "编辑" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "edit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ0$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ1$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "editable", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ2$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ3$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemoveDetail", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ4
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ5
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canSave", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ6
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canCancel", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ7
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAddDetail", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Cancel", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'add'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Create", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'edit'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Edit", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Save", void 0);
                RootViewmodelStateMachine = __decorate([
                    Injectable()
                ], RootViewmodelStateMachine);
                return RootViewmodelStateMachine;
            }(StateMachine));

            var RootViewmodelUIState = /** @class */ (function (_super) {
                __extends(RootViewmodelUIState, _super);
                function RootViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var Load1Handler = /** @class */ (function (_super) {
                __extends(Load1Handler, _super);
                function Load1Handler(_NavigationMiddlewareService1, _CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                Load1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onClosing', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
                    });
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/action}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                    this.addLink('onClosing', 'execute', "1==1");
                };
                Load1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Load1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        CommandService])
                ], Load1Handler);
                return Load1Handler;
            }(CommandHandler));

            var LoadAndAdd1Handler = /** @class */ (function (_super) {
                __extends(LoadAndAdd1Handler, _super);
                function LoadAndAdd1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndAdd1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'add', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('add', 'transit', "1==1");
                };
                LoadAndAdd1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndAdd1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndAdd1Handler);
                return LoadAndAdd1Handler;
            }(CommandHandler));

            var LoadAndView1Handler = /** @class */ (function (_super) {
                __extends(LoadAndView1Handler, _super);
                function LoadAndView1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndView1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onLoading', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionActionParamName}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'onLoading', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('onLoading', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                LoadAndView1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndView1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndView1Handler);
                return LoadAndView1Handler;
            }(CommandHandler));

            var LoadAndEdit1Handler = /** @class */ (function (_super) {
                __extends(LoadAndEdit1Handler, _super);
                function LoadAndEdit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndEdit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onLoading', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionActionParamName}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'onLoading', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('onLoading', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                LoadAndEdit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndEdit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndEdit1Handler);
                return LoadAndEdit1Handler;
            }(CommandHandler));

            var Add1Handler = /** @class */ (function (_super) {
                __extends(Add1Handler, _super);
                function Add1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'add', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('add', 'transit', "1==1");
                };
                Add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Add1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], Add1Handler);
                return Add1Handler;
            }(CommandHandler));

            var Edit1Handler = /** @class */ (function (_super) {
                __extends(Edit1Handler, _super);
                function Edit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('checkBeforeUpdate', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'checkBeforeUpdate', args, context);
                    });
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('checkBeforeUpdate', 'update', "1==1");
                    this.addLink('update', 'transit', "1==1");
                };
                Edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Edit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], Edit1Handler);
                return Edit1Handler;
            }(CommandHandler));

            var Save1Handler = /** @class */ (function (_super) {
                __extends(Save1Handler, _super);
                function Save1Handler(_ValidationService1, _EndEditService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ValidationService1 = _ValidationService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Save1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('validateCurrentRow', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'validateCurrentRow', args, context);
                    });
                    this.addTask('save', function (context) {
                        var args = [
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'save', args, context);
                    });
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('endEdit', 'validateCurrentRow', "1==1");
                    this.addLink('validateCurrentRow', 'save', "1==1");
                    this.addLink('save', 'update', "1==1");
                    this.addLink('update', 'resetValidation', "1==1");
                    this.addLink('resetValidation', 'transit', "1==1");
                };
                Save1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Save1'
                    }),
                    __metadata("design:paramtypes", [ValidationService,
                        EndEditService,
                        CardDataService,
                        StateMachineService])
                ], Save1Handler);
                return Save1Handler;
            }(CommandHandler));

            var Cancel1Handler = /** @class */ (function (_super) {
                __extends(Cancel1Handler, _super);
                function Cancel1Handler(_ValidationService1, _EndEditService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ValidationService1 = _ValidationService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Cancel1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('cancel', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'cancel', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('reload', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'reload', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'cancel', "1==1");
                    this.addLink('cancel', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'reload', "1==1");
                    this.addLink('reload', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                Cancel1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Cancel1'
                    }),
                    __metadata("design:paramtypes", [ValidationService,
                        EndEditService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], Cancel1Handler);
                return Cancel1Handler;
            }(CommandHandler));

            var ChangeItem1Handler = /** @class */ (function (_super) {
                __extends(ChangeItem1Handler, _super);
                function ChangeItem1Handler(_ChangeItemService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                ChangeItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('changeItem', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/id}',
                            '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
                        ];
                        return _this.invoke(_this._ChangeItemService1, 'changeItem', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/results/changeItem}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('changeItem', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                ChangeItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangeItem1'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], ChangeItem1Handler);
                return ChangeItem1Handler;
            }(CommandHandler));

            var ChangeItem2Handler = /** @class */ (function (_super) {
                __extends(ChangeItem2Handler, _super);
                function ChangeItem2Handler(_ChangeItemService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                ChangeItem2Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('changeItem', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/id}',
                            '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
                        ];
                        return _this.invoke(_this._ChangeItemService1, 'changeItem', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/results/changeItem}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('changeItem', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                ChangeItem2Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangeItem2'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], ChangeItem2Handler);
                return ChangeItem2Handler;
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
                            "id": "button-save",
                            "text": _this.langService.transform("button-save", _this.lang, "保存"),
                            "resourceId": "button-save",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-cancel",
                            "text": _this.langService.transform("button-cancel", _this.lang, "取消"),
                            "resourceId": "button-cancel",
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
                    _this.jobinfoTabToolbar = {
                        position: 'inHead',
                        contents: [
                            {
                                id: 'jobinfoAddButton',
                                disable: !_this.viewModel.stateMachine['canAddDetail'],
                                visible: true,
                                title: _this.langService.transform("jobinfoAddButton", _this.lang, "新增"),
                                click: function () { _this.viewModel.jobinfoComponentViewmodel.jobinfoAddItem1(); },
                                split: false,
                                isDP: false,
                                children: [],
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml",
                                }
                            },
                            {
                                id: 'jobinfoRemoveButton',
                                disable: !_this.viewModel.stateMachine['canRemoveDetail'],
                                visible: true,
                                title: _this.langService.transform("jobinfoRemoveButton", _this.lang, "删除"),
                                click: function () { _this.viewModel.jobinfoComponentViewmodel.jobinfoRemoveItem1(); },
                                split: false,
                                isDP: false,
                                children: [],
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml",
                                }
                            }
                        ]
                    };
                    _this.eduinfoTabToolbar = {
                        position: 'inHead',
                        contents: [
                            {
                                id: 'eduinfoAddButton',
                                disable: !_this.viewModel.stateMachine['canAddDetail'],
                                visible: true,
                                title: _this.langService.transform("eduinfoAddButton", _this.lang, "新增"),
                                click: function () { _this.viewModel.eduinfoComponentViewmodel.eduinfoAddItem1(); },
                                isDP: false,
                                children: [],
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml",
                                }
                            },
                            {
                                id: 'eduinfoRemoveButton',
                                disable: !_this.viewModel.stateMachine['canRemoveDetail'],
                                visible: true,
                                title: _this.langService.transform("eduinfoRemoveButton", _this.lang, "删除"),
                                click: function () { _this.viewModel.eduinfoComponentViewmodel.eduinfoRemoveItem1(); },
                                isDP: false,
                                children: [],
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml",
                                }
                            }
                        ]
                    };
                    _this.jobinfotabpage = _this.langService.transform("jobinfo-tab-page", _this.lang, "工作信息");
                    _this.eduinfotabpage = _this.langService.transform("eduinfo-tab-page", _this.lang, "教育信息");
                    _this.sectionsToolbarStates = new BehaviorSubject({});
                    _this.sectionsToolbarVisibleStates = new BehaviorSubject({});
                    _this.detailSectionToolbar = {
                        position: 'inHead',
                        contents: []
                    };
                    _this.SectiondetailsectionMainTitle = _this.langService.transform("Section/detail-section/mainTitle", _this.lang, "");
                    _this.SectiondetailsectionSubTitle = _this.langService.transform("Section/detail-section/subTitle", _this.lang, "");
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
                            'button-save': !_this.viewModel.stateMachine['canSave'],
                            'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'button-edit': true,
                            'button-save': true,
                            'button-cancel': true,
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
                    this.stateMachine.stateChange.subscribe(function () {
                        var states = {
                            'jobinfoAddButton': !_this.viewModel.stateMachine['canAddDetail'],
                            'jobinfoRemoveButton': !_this.viewModel.stateMachine['canRemoveDetail'],
                        };
                        _this.tabsToolbarStates.next(states);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var states = {
                            'eduinfoAddButton': !_this.viewModel.stateMachine['canAddDetail'],
                            'eduinfoRemoveButton': !_this.viewModel.stateMachine['canRemoveDetail'],
                        };
                        _this.tabsToolbarStates.next(states);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var visibleStates = {
                            'jobinfoAddButton': true,
                            'jobinfoRemoveButton': true,
                        };
                        _this.tabsToolbarVisibleStates.next(visibleStates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var visibleStates = {
                            'eduinfoAddButton': true,
                            'eduinfoRemoveButton': true,
                        };
                        _this.tabsToolbarVisibleStates.next(visibleStates);
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
                    this.viewModel.Load1();
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
                    switch (args.id) {
                        case 'button-add':
                            this.viewModel.Add1(args);
                            break;
                        case 'button-edit':
                            this.viewModel.Edit1(args);
                            break;
                        case 'button-save':
                            this.viewModel.Save1(args);
                            break;
                        case 'button-cancel':
                            this.viewModel.Cancel1(args);
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
                            { provide: ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, useValue: true },
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
                            { provide: FORM_ID, useValue: "946e5eed-9b0c-4c34-a3ce-545576ff1268" },
                            { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                            { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                            { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
                            { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndAdd1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndView1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndEdit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem2Handler, multi: true },
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
            var EmployCardRoutingModule = /** @class */ (function () {
                function EmployCardRoutingModule() {
                }
                EmployCardRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], EmployCardRoutingModule);
                return EmployCardRoutingModule;
            }());

            var BasicFormViewmodel = /** @class */ (function (_super) {
                __extends(BasicFormViewmodel, _super);
                function BasicFormViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    return _this;
                }
                BasicFormViewmodel = __decorate([
                    Injectable()
                ], BasicFormViewmodel);
                return BasicFormViewmodel;
            }(ViewModel));

            var BasicFormViewmodelForm = /** @class */ (function (_super) {
                __extends(BasicFormViewmodelForm, _super);
                function BasicFormViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'code_ca1a3fb2_1m5u',
                        name: "{{code_ca1a3fb2_1m5u}}",
                        binding: 'code',
                        updateOn: 'blur',
                        defaultI18nValue: '编号',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "code", void 0);
                __decorate([
                    NgFormControl({
                        id: 'name_ff2e5859_wvll',
                        name: "{{name_ff2e5859_wvll}}",
                        binding: 'name',
                        updateOn: 'blur',
                        defaultI18nValue: '组织',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'remark_d42ea20c_sj20',
                        name: "{{remark_d42ea20c_sj20}}",
                        binding: 'remark',
                        updateOn: 'blur',
                        defaultI18nValue: '备注',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "remark", void 0);
                __decorate([
                    NgFormControl({
                        id: 'state_6b3e9bc9_40q9',
                        name: "{{state_6b3e9bc9_40q9}}",
                        binding: 'state',
                        updateOn: 'blur',
                        defaultI18nValue: '状态',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "state", void 0);
                __decorate([
                    NgFormControl({
                        id: 'countryOrArea_88fe9039_ke9g',
                        name: "{{countryOrArea_88fe9039_ke9g}}",
                        binding: 'countryOrArea',
                        updateOn: 'blur',
                        defaultI18nValue: '所属国家或地区',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "countryOrArea", void 0);
                __decorate([
                    NgFormControl({
                        id: 'location_fd499f05_bmbu',
                        name: "{{location_fd499f05_bmbu}}",
                        binding: 'location',
                        updateOn: 'blur',
                        defaultI18nValue: '常驻地',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "location", void 0);
                __decorate([
                    NgFormControl({
                        id: 'postID_c9c53a79_k5er',
                        name: "{{postID_c9c53a79_k5er}}",
                        binding: 'postID',
                        updateOn: 'blur',
                        defaultI18nValue: '职级',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "postID", void 0);
                __decorate([
                    NgFormControl({
                        id: 'category_61bd7708_z4k0',
                        name: "{{category_61bd7708_z4k0}}",
                        binding: 'category',
                        updateOn: 'blur',
                        defaultI18nValue: '人员类别',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "category", void 0);
                __decorate([
                    NgFormControl({
                        id: 'telephone_cbeb9998_ukhr',
                        name: "{{telephone_cbeb9998_ukhr}}",
                        binding: 'telephone',
                        updateOn: 'blur',
                        defaultI18nValue: '联系电话',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "telephone", void 0);
                __decorate([
                    NgFormControl({
                        id: 'mailbox_8d5f92ea_to45',
                        name: "{{mailbox_8d5f92ea_to45}}",
                        binding: 'mailbox',
                        updateOn: 'blur',
                        defaultI18nValue: '邮箱',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "mailbox", void 0);
                BasicFormViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '行政人员',
                        enableValidate: true
                    }),
                    Injectable()
                ], BasicFormViewmodelForm);
                return BasicFormViewmodelForm;
            }(Form));

            var BasicFormViewmodelUIState = /** @class */ (function (_super) {
                __extends(BasicFormViewmodelUIState, _super);
                function BasicFormViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                BasicFormViewmodelUIState = __decorate([
                    Injectable()
                ], BasicFormViewmodelUIState);
                return BasicFormViewmodelUIState;
            }(UIState));

            var BasicFormComponent = /** @class */ (function (_super) {
                __extends(BasicFormComponent, _super);
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
                    _this.FieldSetTitle5eeb5876c50b4a70b7efe3943f778315 = _this.langService.transform("5eeb5876-c50b-4a70-b7ef-e3943f778315", _this.lang, "新增分组");
                    _this.FieldSetCollapseText5eeb5876c50b4a70b7efe3943f778315 = _this.langService.transform("FieldSet/5eeb5876-c50b-4a70-b7ef-e3943f778315/collapseText", _this.lang, "");
                    _this.FieldSetExpandText5eeb5876c50b4a70b7efe3943f778315 = _this.langService.transform("FieldSet/5eeb5876-c50b-4a70-b7ef-e3943f778315/expandText", _this.lang, "");
                    _this.FieldSetTitle8c768e2431ec470f9262d8813ba8bdfb = _this.langService.transform("8c768e24-31ec-470f-9262-d8813ba8bdfb", _this.lang, "新增分组");
                    _this.FieldSetCollapseText8c768e2431ec470f9262d8813ba8bdfb = _this.langService.transform("FieldSet/8c768e24-31ec-470f-9262-d8813ba8bdfb/collapseText", _this.lang, "");
                    _this.FieldSetExpandText8c768e2431ec470f9262d8813ba8bdfb = _this.langService.transform("FieldSet/8c768e24-31ec-470f-9262-d8813ba8bdfb/expandText", _this.lang, "");
                    _this.FieldSetTitle83a869902592409eb90b5a5ae012e751 = _this.langService.transform("83a86990-2592-409e-b90b-5a5ae012e751", _this.lang, "联系方式");
                    _this.FieldSetCollapseText83a869902592409eb90b5a5ae012e751 = _this.langService.transform("FieldSet/83a86990-2592-409e-b90b-5a5ae012e751/collapseText", _this.lang, "");
                    _this.FieldSetExpandText83a869902592409eb90b5a5ae012e751 = _this.langService.transform("FieldSet/83a86990-2592-409e-b90b-5a5ae012e751/expandText", _this.lang, "");
                    _this.SectionbasicformsectionMainTitle = _this.langService.transform("Section/basic-form-section/mainTitle", _this.lang, "基本信息");
                    _this.SectionbasicformsectionSubTitle = _this.langService.transform("Section/basic-form-section/subTitle", _this.lang, "");
                    _this.LookupEditnameff2e5859wvllDialogTitle = _this.langService.transform("LookupEdit/name_ff2e5859_wvll/dialogTitle", _this.lang, "");
                    _this.name_ff2e5859_wvll_PlaceHolder = _this.langService.transform("LookupEdit/name_ff2e5859_wvll/placeHolder", _this.lang, "");
                    _this.name_ff2e5859_wvllQuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.code_ca1a3fb2_1m5u_PlaceHolder = _this.langService.transform("TextBox/code_ca1a3fb2_1m5u/placeHolder", _this.lang, "");
                    _this.remark_d42ea20c_sj20_PlaceHolder = _this.langService.transform("TextBox/remark_d42ea20c_sj20/placeHolder", _this.lang, "");
                    _this.countryOrArea_88fe9039_ke9g_PlaceHolder = _this.langService.transform("TextBox/countryOrArea_88fe9039_ke9g/placeHolder", _this.lang, "");
                    _this.location_fd499f05_bmbu_PlaceHolder = _this.langService.transform("TextBox/location_fd499f05_bmbu/placeHolder", _this.lang, "");
                    _this.category_61bd7708_z4k0_PlaceHolder = _this.langService.transform("TextBox/category_61bd7708_z4k0/placeHolder", _this.lang, "");
                    _this.postID_c9c53a79_k5er_PlaceHolder = _this.langService.transform("TextBox/postID_c9c53a79_k5er/placeHolder", _this.lang, "");
                    _this.state_6b3e9bc9_40q9_PlaceHolder = _this.langService.transform("TextBox/state_6b3e9bc9_40q9/placeHolder", _this.lang, "");
                    _this.mailbox_8d5f92ea_to45_PlaceHolder = _this.langService.transform("TextBox/mailbox_8d5f92ea_to45/placeHolder", _this.lang, "");
                    _this.telephone_cbeb9998_ukhr_PlaceHolder = _this.langService.transform("TextBox/telephone_cbeb9998_ukhr/placeHolder", _this.lang, "");
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
                    this.componentManagerService.appendControl('name_ff2e5859_wvll', this.name_ff2e5859_wvll);
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
                __decorate([
                    ViewChild('name_ff2e5859_wvll'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "name_ff2e5859_wvll", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], BasicFormComponent.prototype, "cls", void 0);
                BasicFormComponent = __decorate([
                    Component({
                        selector: 'app-basicformcomponent',
                        templateUrl: './basicformcomponent.html',
                        styleUrls: ['./basicformcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'basic-form-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: EmployeeRepository },
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
                    __metadata("design:paramtypes", [WizardService,
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

            var ɵ0$3 = { type: 'string' };
            var JobinfoComponentViewmodel = /** @class */ (function (_super) {
                __extends(JobinfoComponentViewmodel, _super);
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
                __decorate([
                    NgCommand({
                        name: 'jobinfoAddItem1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], JobinfoComponentViewmodel.prototype, "jobinfoAddItem1", null);
                __decorate([
                    NgCommand({
                        name: 'jobinfoRemoveItem1',
                        params: {
                            id: '{DATA~/#{jobinfo-component}/jobInfos/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0$3
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], JobinfoComponentViewmodel.prototype, "jobinfoRemoveItem1", null);
                JobinfoComponentViewmodel = __decorate([
                    Injectable()
                ], JobinfoComponentViewmodel);
                return JobinfoComponentViewmodel;
            }(ViewModel));

            var JobinfoComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(JobinfoComponentViewmodelForm, _super);
                function JobinfoComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'company',
                        name: "{{company_420c3a35_2gnr}}",
                        binding: 'company',
                        updateOn: 'blur',
                        defaultI18nValue: '工作单位',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], JobinfoComponentViewmodelForm.prototype, "company", void 0);
                __decorate([
                    NgFormControl({
                        id: 'timeInterval',
                        name: "{{timeInterval_c1c46d6f_edm7}}",
                        binding: 'timeInterval',
                        updateOn: 'blur',
                        defaultI18nValue: '时间区间',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], JobinfoComponentViewmodelForm.prototype, "timeInterval", void 0);
                __decorate([
                    NgFormControl({
                        id: 'position',
                        name: "{{position_c51cd3a1_v04x}}",
                        binding: 'position',
                        updateOn: 'blur',
                        defaultI18nValue: '岗位',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], JobinfoComponentViewmodelForm.prototype, "position", void 0);
                __decorate([
                    NgFormControl({
                        id: 'salary',
                        name: "{{salary_3b56eedf_okgp}}",
                        binding: 'salary',
                        updateOn: 'change',
                        defaultI18nValue: '薪资',
                    }),
                    __metadata("design:type", FormControl)
                ], JobinfoComponentViewmodelForm.prototype, "salary", void 0);
                __decorate([
                    NgFormControl({
                        id: 'certifier',
                        name: "{{certifier_2688290d_h8l0}}",
                        binding: 'certifier',
                        updateOn: 'blur',
                        defaultI18nValue: '证明人',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], JobinfoComponentViewmodelForm.prototype, "certifier", void 0);
                __decorate([
                    NgFormControl({
                        id: 'telephone',
                        name: "{{telephone_8ff4aeca_vykt}}",
                        binding: 'telephone',
                        updateOn: 'blur',
                        defaultI18nValue: '证明人联系方式',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], JobinfoComponentViewmodelForm.prototype, "telephone", void 0);
                JobinfoComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '工作信息',
                        enableValidate: true
                    }),
                    Injectable()
                ], JobinfoComponentViewmodelForm);
                return JobinfoComponentViewmodelForm;
            }(Form));

            var JobinfoComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(JobinfoComponentViewmodelUIState, _super);
                function JobinfoComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                JobinfoComponentViewmodelUIState = __decorate([
                    Injectable()
                ], JobinfoComponentViewmodelUIState);
                return JobinfoComponentViewmodelUIState;
            }(UIState));

            var jobinfoAddItem1Handler = /** @class */ (function (_super) {
                __extends(jobinfoAddItem1Handler, _super);
                function jobinfoAddItem1Handler(_SubListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._SubListDataService1 = _SubListDataService1;
                    return _this;
                }
                jobinfoAddItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._SubListDataService1, 'add', args, context);
                    });
                };
                jobinfoAddItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'jobinfoAddItem1'
                    }),
                    __metadata("design:paramtypes", [SubListDataService])
                ], jobinfoAddItem1Handler);
                return jobinfoAddItem1Handler;
            }(CommandHandler));

            var jobinfoRemoveItem1Handler = /** @class */ (function (_super) {
                __extends(jobinfoRemoveItem1Handler, _super);
                function jobinfoRemoveItem1Handler(_DataGridService1, _SubListDataService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._SubListDataService1 = _SubListDataService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                jobinfoRemoveItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._SubListDataService1, 'remove', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addTask('queryChild', function (context) {
                        var args = [
                            '',
                            ''
                        ];
                        return _this.invoke(_this._ListDataService1, 'queryChild', args, context);
                    });
                    this.addLink('remove', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'queryChild', "1==1");
                };
                jobinfoRemoveItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'jobinfoRemoveItem1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        SubListDataService,
                        ListDataService])
                ], jobinfoRemoveItem1Handler);
                return jobinfoRemoveItem1Handler;
            }(CommandHandler));

            var JobinfoComponent = /** @class */ (function (_super) {
                __extends(JobinfoComponent, _super);
                function JobinfoComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
                    _this.dataGrid_jobinfoColumns = [];
                    _this.cls = 'f-struct-is-subgrid ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.dataGrid_jobinfolineNumberTitle = _this.langService.transform("DataGrid/dataGrid_jobinfo/lineNumberTitle", _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_jobinfoDataGrid);
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
                JobinfoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.dataGrid_jobinfoColumns = [
                        [
                            {
                                id: 'company_420c3a35_2gnr',
                                field: 'company',
                                width: 120,
                                title: this.langService.transform("company_420c3a35_2gnr", this.lang, "工作单位"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "company_420c3a35_5vy3", "title": "工作单位", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'timeInterval_c1c46d6f_edm7',
                                field: 'timeInterval',
                                width: 120,
                                title: this.langService.transform("timeInterval_c1c46d6f_edm7", this.lang, "时间区间"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "timeInterval_c1c46d6f_tybt", "title": "时间区间", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'position_c51cd3a1_v04x',
                                field: 'position',
                                width: 120,
                                title: this.langService.transform("position_c51cd3a1_v04x", this.lang, "岗位"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "position_c51cd3a1_d3o9", "title": "岗位", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'salary_3b56eedf_okgp',
                                field: 'salary',
                                width: 120,
                                title: this.langService.transform("salary_3b56eedf_okgp", this.lang, "薪资"),
                                dataType: 'boolean',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.CHECKBOX,
                                    options: { "id": "salary_3b56eedf_023p", "title": "薪资", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.CHECKBOX" }
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
                                        "trueText": this.langService.transform("GridField/salary_3b56eedf_okgp/formatter/trueText", this.lang, "是"),
                                        "falseText": this.langService.transform("GridField/salary_3b56eedf_okgp/formatter/falseText", this.lang, "否"),
                                    }
                                }
                            },
                            {
                                id: 'certifier_2688290d_h8l0',
                                field: 'certifier',
                                width: 120,
                                title: this.langService.transform("certifier_2688290d_h8l0", this.lang, "证明人"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "certifier_2688290d_36qa", "title": "证明人", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'telephone_8ff4aeca_vykt',
                                field: 'telephone',
                                width: 120,
                                title: this.langService.transform("telephone_8ff4aeca_vykt", this.lang, "证明人联系方式"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "telephone_8ff4aeca_scfx", "title": "证明人联系方式", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 20 }
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
                                id: 'dataGrid_jobinfo_caozuolie',
                                width: 120,
                                title: this.langService.transform("DataGrid/dataGrid_jobinfo/OperateColumn", this.lang, "操作"),
                                dataType: 'string',
                                template: this.dataGrid_jobinfomanageTemplate,
                                align: 'center',
                                halign: 'center',
                                isMultilingualField: false,
                                fixed: 'right',
                                visible: function () { return true; },
                                filter: false,
                            }
                        ]
                    ];
                    this.viewModel.dataGrid_jobinfoColumns = this.dataGrid_jobinfoColumns;
                    this.viewModel.dataGridColumnsName = "dataGrid_jobinfoColumns";
                    this.onFormLoad();
                };
                JobinfoComponent.prototype.ngAfterViewInit = function () {
                };
                JobinfoComponent.prototype.ngOnDestroy = function () {
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
                JobinfoComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                JobinfoComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    ViewChild('dataGrid_jobinfoDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], JobinfoComponent.prototype, "dataGrid_jobinfoDataGrid", void 0);
                __decorate([
                    ViewChild('dataGrid_jobinfomanageTemplate'),
                    __metadata("design:type", TemplateRef)
                ], JobinfoComponent.prototype, "dataGrid_jobinfomanageTemplate", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], JobinfoComponent.prototype, "cls", void 0);
                JobinfoComponent = __decorate([
                    Component({
                        selector: 'app-jobinfocomponent',
                        templateUrl: './jobinfocomponent.html',
                        styleUrls: ['./jobinfocomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'jobinfo-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: EmployeeRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                            { provide: Form, useClass: JobinfoComponentViewmodelForm },
                            { provide: UIState, useClass: JobinfoComponentViewmodelUIState },
                            { provide: ViewModel, useClass: JobinfoComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: jobinfoAddItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: jobinfoRemoveItem1Handler, multi: true },
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
                ], JobinfoComponent);
                return JobinfoComponent;
            }(FrameComponent));

            var ɵ0$4 = { type: 'string' };
            var EduinfoComponentViewmodel = /** @class */ (function (_super) {
                __extends(EduinfoComponentViewmodel, _super);
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
                __decorate([
                    NgCommand({
                        name: 'eduinfoAddItem1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], EduinfoComponentViewmodel.prototype, "eduinfoAddItem1", null);
                __decorate([
                    NgCommand({
                        name: 'eduinfoRemoveItem1',
                        params: {
                            id: '{DATA~/#{eduinfo-component}/eduInfos/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0$4
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], EduinfoComponentViewmodel.prototype, "eduinfoRemoveItem1", null);
                EduinfoComponentViewmodel = __decorate([
                    Injectable()
                ], EduinfoComponentViewmodel);
                return EduinfoComponentViewmodel;
            }(ViewModel));

            var EduinfoComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(EduinfoComponentViewmodelForm, _super);
                function EduinfoComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'empolyeeID',
                        name: "{{empolyeeID_54068d87_wp5l}}",
                        binding: 'empolyeeID',
                        updateOn: 'blur',
                        defaultI18nValue: '人员ID',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "empolyeeID", void 0);
                __decorate([
                    NgFormControl({
                        id: 'schoolName',
                        name: "{{schoolName_3100ddda_di17}}",
                        binding: 'schoolName',
                        updateOn: 'blur',
                        defaultI18nValue: '学校名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "schoolName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'timeInterval',
                        name: "{{timeInterval_556dd1d1_8rcf}}",
                        binding: 'timeInterval',
                        updateOn: 'blur',
                        defaultI18nValue: '时间区间',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "timeInterval", void 0);
                __decorate([
                    NgFormControl({
                        id: 'studyType',
                        name: "{{studyType_2f896fda_h66a}}",
                        binding: 'studyType',
                        updateOn: 'blur',
                        defaultI18nValue: '学习形式',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "studyType", void 0);
                __decorate([
                    NgFormControl({
                        id: 'major',
                        name: "{{major_5e64f7eb_fdno}}",
                        binding: 'major',
                        updateOn: 'blur',
                        defaultI18nValue: '专业',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "major", void 0);
                __decorate([
                    NgFormControl({
                        id: 'education',
                        name: "{{education_f8b3b3e8_azw8}}",
                        binding: 'education',
                        updateOn: 'blur',
                        defaultI18nValue: '学历',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "education", void 0);
                __decorate([
                    NgFormControl({
                        id: 'eduSystem',
                        name: "{{eduSystem_50d4bac9_bhm8}}",
                        binding: 'eduSystem',
                        updateOn: 'blur',
                        defaultI18nValue: '学制',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "eduSystem", void 0);
                __decorate([
                    NgFormControl({
                        id: 'degree',
                        name: "{{degree_304819a8_wsms}}",
                        binding: 'degree',
                        updateOn: 'blur',
                        defaultI18nValue: '学位',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "degree", void 0);
                __decorate([
                    NgFormControl({
                        id: 'isFirstDegree',
                        name: "{{isFirstDegree_d1e3393b_3ncw}}",
                        binding: 'isFirstDegree',
                        updateOn: 'change',
                        defaultI18nValue: '是否第一学历',
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "isFirstDegree", void 0);
                __decorate([
                    NgFormControl({
                        id: 'isHighest',
                        name: "{{isHighest_290b3ac4_z4oq}}",
                        binding: 'isHighest',
                        updateOn: 'change',
                        defaultI18nValue: '是否最高学历',
                    }),
                    __metadata("design:type", FormControl)
                ], EduinfoComponentViewmodelForm.prototype, "isHighest", void 0);
                EduinfoComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '教育信息',
                        enableValidate: true
                    }),
                    Injectable()
                ], EduinfoComponentViewmodelForm);
                return EduinfoComponentViewmodelForm;
            }(Form));

            var EduinfoComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(EduinfoComponentViewmodelUIState, _super);
                function EduinfoComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EduinfoComponentViewmodelUIState = __decorate([
                    Injectable()
                ], EduinfoComponentViewmodelUIState);
                return EduinfoComponentViewmodelUIState;
            }(UIState));

            var eduinfoAddItem1Handler = /** @class */ (function (_super) {
                __extends(eduinfoAddItem1Handler, _super);
                function eduinfoAddItem1Handler(_SubListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._SubListDataService1 = _SubListDataService1;
                    return _this;
                }
                eduinfoAddItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._SubListDataService1, 'add', args, context);
                    });
                };
                eduinfoAddItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'eduinfoAddItem1'
                    }),
                    __metadata("design:paramtypes", [SubListDataService])
                ], eduinfoAddItem1Handler);
                return eduinfoAddItem1Handler;
            }(CommandHandler));

            var eduinfoRemoveItem1Handler = /** @class */ (function (_super) {
                __extends(eduinfoRemoveItem1Handler, _super);
                function eduinfoRemoveItem1Handler(_DataGridService1, _SubListDataService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._SubListDataService1 = _SubListDataService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                eduinfoRemoveItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._SubListDataService1, 'remove', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addTask('queryChild', function (context) {
                        var args = [
                            '',
                            ''
                        ];
                        return _this.invoke(_this._ListDataService1, 'queryChild', args, context);
                    });
                    this.addLink('remove', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'queryChild', "1==1");
                };
                eduinfoRemoveItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'eduinfoRemoveItem1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        SubListDataService,
                        ListDataService])
                ], eduinfoRemoveItem1Handler);
                return eduinfoRemoveItem1Handler;
            }(CommandHandler));

            var EduinfoComponent = /** @class */ (function (_super) {
                __extends(EduinfoComponent, _super);
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
                __decorate([
                    ViewChild('dataGrid_eduinfoDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], EduinfoComponent.prototype, "dataGrid_eduinfoDataGrid", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], EduinfoComponent.prototype, "cls", void 0);
                EduinfoComponent = __decorate([
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
                ], EduinfoComponent);
                return EduinfoComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$5 = (createTranslateLoader$1), ɵ1$2 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$2 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var EmployCardModule = /** @class */ (function () {
                function EmployCardModule(trans) {
                    this.trans = trans;
                }
                EmployCardModule = __decorate([
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
                            BasicFormComponent,
                            JobinfoComponent,
                            EduinfoComponent
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
                                    useFactory: ɵ0$5,
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
                            EmployCardRoutingModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$2 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/apporder/df/web/bo-organization-front/employcard/' },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ2$2 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], EmployCardModule);
                return EmployCardModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/apporder/df/web/bo-organization-front/employcard/i18n/', '.json');
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
            var styles_JobinfoComponent = [styles$1];
            var RenderType_JobinfoComponent = ɵcrt({ encapsulation: 0, styles: styles_JobinfoComponent, data: {} });
            function View_JobinfoComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-datagrid", [["class", "f-component-grid f-utils-fill"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid_jobinfo"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "click"], [null, "pageChanged"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "pageSizeChanged"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (ɵnov(_v, 6).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (ɵnov(_v, 6).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (ɵnov(_v, 6).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (ɵnov(_v, 6).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 6).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (ɵnov(_v, 6).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (ɵnov(_v, 6).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGrid_jobinfoDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], showPageList: [18, "showPageList"], showGotoInput: [19, "showGotoInput"], multiSelect: [20, "multiSelect"], showCheckbox: [21, "showCheckbox"], showAllCheckbox: [22, "showAllCheckbox"], checkOnSelect: [23, "checkOnSelect"], selectOnCheck: [24, "selectOnCheck"], selectionMode: [25, "selectionMode"], keepSelect: [26, "keepSelect"], useBlankWhenDataIsEmpty: [27, "useBlankWhenDataIsEmpty"], emptyDataHeight: [28, "emptyDataHeight"], fields: [29, "fields"], nowrap: [30, "nowrap"], virtualized: [31, "virtualized"], virtualizedAsyncLoad: [32, "virtualizedAsyncLoad"], editMode: [33, "editMode"], enableEditCellStyle: [34, "enableEditCellStyle"], selectOnEditing: [35, "selectOnEditing"], enableDragColumn: [36, "enableDragColumn"], expandGroupRows: [37, "expandGroupRows"], groupSummaryPosition: [38, "groupSummaryPosition"], showGroupColumn: [39, "showGroupColumn"], showRowGroupPanel: [40, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [41, "AutoColumnWidthUseDblclick"], mergeCell: [42, "mergeCell"], enableSimpleMode: [43, "enableSimpleMode"], enableScheme: [44, "enableScheme"], enableSetMultiHeaders: [45, "enableSetMultiHeaders"], showConfirmWhenSchemeChanged: [46, "showConfirmWhenSchemeChanged"], clearSelectionsWhenDataIsEmpty: [47, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [48, "enableContextMenu"], enableHighlightCell: [49, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 3, { dgColumns: 1 }), ɵdid(6, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(7, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService$1, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(8, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(9, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(10, 4407296, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid_jobinfo"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = true; var currVal_15 = false; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGrid_jobinfolineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = false; var currVal_22 = false; var currVal_23 = false; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = "default"; var currVal_29 = true; var currVal_30 = false; var currVal_31 = 240; var currVal_32 = _co.viewModel.dataGrid_jobinfoColumns; var currVal_33 = true; var currVal_34 = false; var currVal_35 = false; var currVal_36 = "cell"; var currVal_37 = false; var currVal_38 = false; var currVal_39 = false; var currVal_40 = true; var currVal_41 = "groupFooterRow"; var currVal_42 = true; var currVal_43 = false; var currVal_44 = true; var currVal_45 = false; var currVal_46 = false; var currVal_47 = false; var currVal_48 = false; var currVal_49 = false; var currVal_50 = true; var currVal_51 = false; var currVal_52 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52]); _ck(_v, 6, 0); var currVal_53 = _co.viewModel.stateMachine["editable"]; var currVal_54 = true; _ck(_v, 7, 0, currVal_53, currVal_54); var currVal_55 = ""; _ck(_v, 9, 0, currVal_55); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_JobinfoComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, "div", [["class", "f-grid-is-sub f-utils-flex-column"], ["id", "jobinfo-component-layout"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_JobinfoComponent_2)), ɵdid(3, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); }, null); }
            function View_JobinfoComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "div", [["class", "f-btn-group "]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 6, "div", [["class", "btn-group-sm btn-group f-btn-group-links"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 2, "button", [["class", "btn-link btn ng-star-inserted"]], null, null, null, null, null)), (_l()(), ɵted(3, null, ["", ""])), ɵppd(4, 3), (_l()(), ɵeld(5, 0, null, null, 2, "button", [["class", "btn-link btn ng-star-inserted"]], null, null, null, null, null)), (_l()(), ɵted(6, null, ["", ""])), ɵppd(7, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 3, 0, _ck(_v, 4, 0, ɵnov(_v.parent, 0), "DataGrid/dataGrid_jobinfo/OperateEditButton", _co.lang, "\u7F16\u8F91")); _ck(_v, 3, 0, currVal_0); var currVal_1 = ɵunv(_v, 6, 0, _ck(_v, 7, 0, ɵnov(_v.parent, 0), "DataGrid/dataGrid_jobinfo/OperateDeleteButton", _co.lang, "\u5220\u9664")); _ck(_v, 6, 0, currVal_1); }); }
            function View_JobinfoComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(671088640, 1, { dataGrid_jobinfoDataGrid: 0 }), ɵqud(402653184, 2, { dataGrid_jobinfomanageTemplate: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_JobinfoComponent_1)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(0, [[2, 2], ["dataGrid_jobinfomanageTemplate", 2]], null, 0, null, View_JobinfoComponent_3))], function (_ck, _v) { var currVal_0 = true; _ck(_v, 4, 0, currVal_0); }, null); }
            function View_JobinfoComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-jobinfocomponent", [], [[8, "className", 0]], null, null, View_JobinfoComponent_0, RenderType_JobinfoComponent)), ɵprd(4608, null, ViewModel, JobinfoComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new jobinfoAddItem1Handler(p0_0), new jobinfoRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, JobinfoComponentViewmodelForm, []), ɵprd(4608, null, UIState, JobinfoComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, JobinfoComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "jobinfo-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            var JobinfoComponentNgFactory = ɵccf("app-jobinfocomponent", JobinfoComponent, View_JobinfoComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$2 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_EduinfoComponent = [styles$2];
            var RenderType_EduinfoComponent = ɵcrt({ encapsulation: 0, styles: styles_EduinfoComponent, data: {} });
            function View_EduinfoComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-datagrid", [["class", "f-component-grid f-utils-fill"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid_eduinfo"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "click"], [null, "pageChanged"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "pageSizeChanged"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (ɵnov(_v, 6).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (ɵnov(_v, 6).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (ɵnov(_v, 6).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (ɵnov(_v, 6).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 6).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (ɵnov(_v, 6).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (ɵnov(_v, 6).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGrid_eduinfoDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], showPageList: [18, "showPageList"], showGotoInput: [19, "showGotoInput"], multiSelect: [20, "multiSelect"], showCheckbox: [21, "showCheckbox"], showAllCheckbox: [22, "showAllCheckbox"], checkOnSelect: [23, "checkOnSelect"], selectOnCheck: [24, "selectOnCheck"], selectionMode: [25, "selectionMode"], keepSelect: [26, "keepSelect"], useBlankWhenDataIsEmpty: [27, "useBlankWhenDataIsEmpty"], emptyDataHeight: [28, "emptyDataHeight"], fields: [29, "fields"], nowrap: [30, "nowrap"], virtualized: [31, "virtualized"], virtualizedAsyncLoad: [32, "virtualizedAsyncLoad"], editMode: [33, "editMode"], enableEditCellStyle: [34, "enableEditCellStyle"], selectOnEditing: [35, "selectOnEditing"], enableDragColumn: [36, "enableDragColumn"], expandGroupRows: [37, "expandGroupRows"], groupSummaryPosition: [38, "groupSummaryPosition"], showGroupColumn: [39, "showGroupColumn"], showRowGroupPanel: [40, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [41, "AutoColumnWidthUseDblclick"], mergeCell: [42, "mergeCell"], enableSimpleMode: [43, "enableSimpleMode"], enableScheme: [44, "enableScheme"], enableSetMultiHeaders: [45, "enableSetMultiHeaders"], showConfirmWhenSchemeChanged: [46, "showConfirmWhenSchemeChanged"], clearSelectionsWhenDataIsEmpty: [47, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [48, "enableContextMenu"], enableHighlightCell: [49, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 2, { dgColumns: 1 }), ɵdid(6, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(7, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService$1, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(8, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(9, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(10, 4407296, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid_eduinfo"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGrid_eduinfolineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = false; var currVal_22 = false; var currVal_23 = false; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = "default"; var currVal_29 = true; var currVal_30 = false; var currVal_31 = 240; var currVal_32 = _co.viewModel.dataGrid_eduinfoColumns; var currVal_33 = true; var currVal_34 = false; var currVal_35 = false; var currVal_36 = "cell"; var currVal_37 = false; var currVal_38 = false; var currVal_39 = false; var currVal_40 = true; var currVal_41 = "groupFooterRow"; var currVal_42 = true; var currVal_43 = false; var currVal_44 = true; var currVal_45 = false; var currVal_46 = false; var currVal_47 = false; var currVal_48 = false; var currVal_49 = false; var currVal_50 = true; var currVal_51 = false; var currVal_52 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52]); _ck(_v, 6, 0); var currVal_53 = _co.viewModel.stateMachine["editable"]; var currVal_54 = true; _ck(_v, 7, 0, currVal_53, currVal_54); var currVal_55 = ""; _ck(_v, 9, 0, currVal_55); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_EduinfoComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, "div", [["class", "f-grid-is-sub f-utils-flex-column"], ["id", "eduinfo-component-layout"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_EduinfoComponent_2)), ɵdid(3, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); }, null); }
            function View_EduinfoComponent_0(_l) { return ɵvid(0, [ɵqud(671088640, 1, { dataGrid_eduinfoDataGrid: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_EduinfoComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_EduinfoComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-eduinfocomponent", [], [[8, "className", 0]], null, null, View_EduinfoComponent_0, RenderType_EduinfoComponent)), ɵprd(4608, null, ViewModel, EduinfoComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new eduinfoAddItem1Handler(p0_0), new eduinfoRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, EduinfoComponentViewmodelForm, []), ɵprd(4608, null, UIState, EduinfoComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, EduinfoComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "eduinfo-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            var EduinfoComponentNgFactory = ɵccf("app-eduinfocomponent", EduinfoComponent, View_EduinfoComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$3 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_BasicFormComponent = [styles$3];
            var RenderType_BasicFormComponent = ɵcrt({ encapsulation: 0, styles: styles_BasicFormComponent, data: {} });
            function View_BasicFormComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "code"], ["id", "code_ca1a3fb2_1m5u"], ["input-end-edit", ""], ["maxlength", "1000"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "1000"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "code"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/code_ca1a3fb2_1m5u/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "code"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "code"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "code_ca1a3fb2_1m5u"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_5)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_6)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_7)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("code"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "code_ca1a3fb2_1m5u", _co.lang, "\u7F16\u53F7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "code_ca1a3fb2_1m5u", _co.lang, "\u7F16\u53F7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "name"], ["id", "name_ff2e5859_wvll"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[1, 4], ["name_ff2e5859_wvll", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], treeInfo: [21, "treeInfo"], cascadeStatus: [22, "cascadeStatus"], showCascadeControl: [23, "showCascadeControl"], placeholder: [24, "placeholder"], showSelected: [25, "showSelected"], useFavorite: [26, "useFavorite"], useTip: [27, "useTip"], isRecordSize: [28, "isRecordSize"], enableToSelect: [29, "enableToSelect"], expandLevel: [30, "expandLevel"], treeTableOptions: [31, "treeTableOptions"], loadTreeDataType: [32, "loadTreeDataType"], loadDataWhenOpen: [33, "loadDataWhenOpen"], selectFirstInNav: [34, "selectFirstInNav"], enableFullTree: [35, "enableFullTree"], useExtendInfo: [36, "useExtendInfo"], quickSelect: [37, "quickSelect"], treeToList: [38, "treeToList"], navTreeToList: [39, "navTreeToList"], showNavigation: [40, "showNavigation"], useNewLayout: [41, "useNewLayout"], enableMultiFieldSearch: [42, "enableMultiFieldSearch"] }, null), ɵpod(6, { "id": 0, "name": 1 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 4), ɵpod(9, { "onlySelectLeaf": 0 }), ɵppd(10, 3), ɵpod(11, { "enableContextMenu": 0 }), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(13, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(15, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(16, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(17, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(18, 4407296, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(19, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditnameff2e5859wvllDialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = !_co.viewModel.stateMachine["editable"]; var currVal_14 = _ck(_v, 6, 0, "id", "name"); var currVal_15 = "code"; var currVal_16 = "shortName"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "TreeList"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "Employee.name"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50); var currVal_28 = false; var currVal_29 = _ck(_v, 9, 0, "default"); var currVal_30 = "enable"; var currVal_31 = true; var currVal_32 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 24, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "LookupEdit/name_ff2e5859_wvll/placeHolder", _co.lang, "")), ""); var currVal_33 = false; var currVal_34 = true; var currVal_35 = false; var currVal_36 = false; var currVal_37 = true; var currVal_38 = (0 - 1); var currVal_39 = _ck(_v, 11, 0, false); var currVal_40 = "default"; var currVal_41 = true; var currVal_42 = false; var currVal_43 = false; var currVal_44 = false; var currVal_45 = _co.name_ff2e5859_wvllQuickSelect; var currVal_46 = false; var currVal_47 = false; var currVal_48 = true; var currVal_49 = false; var currVal_50 = false; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]); var currVal_51 = "name"; _ck(_v, 13, 0, currVal_51); _ck(_v, 16, 0); _ck(_v, 17, 0); _ck(_v, 18, 0); var currVal_52 = (0 - 1); _ck(_v, 19, 0, currVal_52); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 15).ngClassUntouched; var currVal_2 = ɵnov(_v, 15).ngClassTouched; var currVal_3 = ɵnov(_v, 15).ngClassPristine; var currVal_4 = ɵnov(_v, 15).ngClassDirty; var currVal_5 = ɵnov(_v, 15).ngClassValid; var currVal_6 = ɵnov(_v, 15).ngClassInvalid; var currVal_7 = ɵnov(_v, 15).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "name"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "name_ff2e5859_wvll"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_9)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_10)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_11)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "name_ff2e5859_wvll", _co.lang, "\u7EC4\u7EC7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "name_ff2e5859_wvll", _co.lang, "\u7EC4\u7EC7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "fieldSet", [["class", " f-section-formgroup col-12 px-0"], ["id", "5eeb5876-c50b-4a70-b7ef-e3943f778315"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "legend", [["class", "f-section-formgroup-legend"], ["farrisCollapse", ""]], null, null, null, null, null)), ɵdid(2, 4931584, null, 0, CollapseDirective, [ElementRef, Renderer2, LocaleService], { title: [0, "title"], collapse: [1, "collapse"], collapseText: [2, "collapseText"], expandText: [3, "expandText"] }, null), (_l()(), ɵeld(3, 0, null, null, 4, "div", [["class", "f-section-formgroup-inputs"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_4)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_8)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.FieldSetTitle5eeb5876c50b4a70b7efe3943f778315; var currVal_1 = false; var currVal_2 = _co.FieldSetCollapseText5eeb5876c50b4a70b7efe3943f778315; var currVal_3 = _co.FieldSetExpandText5eeb5876c50b4a70b7efe3943f778315; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = true; _ck(_v, 5, 0, currVal_4); var currVal_5 = true; _ck(_v, 7, 0, currVal_5); }, null); }
            function View_BasicFormComponent_14(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_15(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "input", [["class", "form-control"], ["farris-dynamic-required", "remark"], ["formControlName", "remark"], ["id", "remark_d42ea20c_sj20"], ["input-end-edit", ""], ["maxlength", "1000"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 671744, null, 0, FarrisDynamicRequiredDirective, [FrameContext, Injector], { field: [0, "field"] }, null), ɵdid(10, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(11, 3)], function (_ck, _v) { var currVal_10 = "1000"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "remark"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = "remark"; _ck(_v, 9, 0, currVal_12); var currVal_13 = true; _ck(_v, 10, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/remark_d42ea20c_sj20/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_16(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "remark"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "remark"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_13(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "remark_d42ea20c_sj20"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_14)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_15)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_16)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = _co.viewModel.expressionResult["d42ea20c-50af-49cf-b7db-7d7b41ff1ffd_require"]; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("remark"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "remark_d42ea20c_sj20", _co.lang, "\u5907\u6CE8")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "remark_d42ea20c_sj20", _co.lang, "\u5907\u6CE8")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_18(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_19(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "countryOrArea"], ["id", "countryOrArea_88fe9039_ke9g"], ["input-end-edit", ""], ["maxlength", "22"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "22"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "countryOrArea"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/countryOrArea_88fe9039_ke9g/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_20(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "countryOrArea"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "countryOrArea"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_17(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "countryOrArea_88fe9039_ke9g"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_18)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_19)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_20)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("countryOrArea"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "countryOrArea_88fe9039_ke9g", _co.lang, "\u6240\u5C5E\u56FD\u5BB6\u6216\u5730\u533A")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "countryOrArea_88fe9039_ke9g", _co.lang, "\u6240\u5C5E\u56FD\u5BB6\u6216\u5730\u533A")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_22(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_23(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "location"], ["id", "location_fd499f05_bmbu"], ["input-end-edit", ""], ["maxlength", "22"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "22"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "location"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/location_fd499f05_bmbu/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_24(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "location"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "location"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_21(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "location_fd499f05_bmbu"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_22)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_23)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_24)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("location"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "location_fd499f05_bmbu", _co.lang, "\u5E38\u9A7B\u5730")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "location_fd499f05_bmbu", _co.lang, "\u5E38\u9A7B\u5730")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_26(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_27(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "category"], ["id", "category_61bd7708_z4k0"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "category"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/category_61bd7708_z4k0/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_28(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "category"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "category"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_25(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "category_61bd7708_z4k0"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_26)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_27)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_28)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("category"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "category_61bd7708_z4k0", _co.lang, "\u4EBA\u5458\u7C7B\u522B")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "category_61bd7708_z4k0", _co.lang, "\u4EBA\u5458\u7C7B\u522B")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_30(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_31(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "postID"], ["id", "postID_c9c53a79_k5er"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "postID"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/postID_c9c53a79_k5er/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_32(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "postID"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "postID"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_29(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "postID_c9c53a79_k5er"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_30)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_31)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_32)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("postID"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "postID_c9c53a79_k5er", _co.lang, "\u804C\u7EA7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "postID_c9c53a79_k5er", _co.lang, "\u804C\u7EA7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_34(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_35(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "state"], ["id", "state_6b3e9bc9_40q9"], ["input-end-edit", ""], ["maxlength", "22"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "22"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "state"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/state_6b3e9bc9_40q9/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_36(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "state"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "state"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_33(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "state_6b3e9bc9_40q9"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_34)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_35)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_36)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("state"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "state_6b3e9bc9_40q9", _co.lang, "\u72B6\u6001")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "state_6b3e9bc9_40q9", _co.lang, "\u72B6\u6001")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 15, "fieldSet", [["class", " f-section-formgroup col-12 px-0"], ["id", "8c768e24-31ec-470f-9262-d8813ba8bdfb"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "legend", [["class", "f-section-formgroup-legend"], ["farrisCollapse", ""]], null, null, null, null, null)), ɵdid(2, 4931584, null, 0, CollapseDirective, [ElementRef, Renderer2, LocaleService], { title: [0, "title"], collapse: [1, "collapse"], collapseText: [2, "collapseText"], expandText: [3, "expandText"] }, null), (_l()(), ɵeld(3, 0, null, null, 12, "div", [["class", "f-section-formgroup-inputs"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_13)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_17)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_21)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_25)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_29)), ɵdid(13, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_33)), ɵdid(15, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.FieldSetTitle8c768e2431ec470f9262d8813ba8bdfb; var currVal_1 = false; var currVal_2 = _co.FieldSetCollapseText8c768e2431ec470f9262d8813ba8bdfb; var currVal_3 = _co.FieldSetExpandText8c768e2431ec470f9262d8813ba8bdfb; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = true; _ck(_v, 5, 0, currVal_4); var currVal_5 = true; _ck(_v, 7, 0, currVal_5); var currVal_6 = true; _ck(_v, 9, 0, currVal_6); var currVal_7 = true; _ck(_v, 11, 0, currVal_7); var currVal_8 = true; _ck(_v, 13, 0, currVal_8); var currVal_9 = true; _ck(_v, 15, 0, currVal_9); }, null); }
            function View_BasicFormComponent_39(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_40(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "mailbox"], ["id", "mailbox_8d5f92ea_to45"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "mailbox"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/mailbox_8d5f92ea_to45/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_41(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "mailbox"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "mailbox"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_38(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "mailbox_8d5f92ea_to45"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_39)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_40)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_41)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("mailbox"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "mailbox_8d5f92ea_to45", _co.lang, "\u90AE\u7BB1")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "mailbox_8d5f92ea_to45", _co.lang, "\u90AE\u7BB1")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_43(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_44(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "telephone"], ["id", "telephone_cbeb9998_ukhr"], ["input-end-edit", ""], ["maxlength", "20"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "20"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "telephone"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/telephone_cbeb9998_ukhr/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_45(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "telephone"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "telephone"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_42(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "telephone_cbeb9998_ukhr"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_43)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_44)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_45)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("telephone"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "telephone_cbeb9998_ukhr", _co.lang, "\u8054\u7CFB\u7535\u8BDD")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "telephone_cbeb9998_ukhr", _co.lang, "\u8054\u7CFB\u7535\u8BDD")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_37(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "fieldSet", [["class", " f-section-formgroup col-12 px-0"], ["id", "83a86990-2592-409e-b90b-5a5ae012e751"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "legend", [["class", "f-section-formgroup-legend"], ["farrisCollapse", ""]], null, null, null, null, null)), ɵdid(2, 4931584, null, 0, CollapseDirective, [ElementRef, Renderer2, LocaleService], { title: [0, "title"], collapse: [1, "collapse"], collapseText: [2, "collapseText"], expandText: [3, "expandText"] }, null), (_l()(), ɵeld(3, 0, null, null, 4, "div", [["class", "f-section-formgroup-inputs"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_38)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_42)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.FieldSetTitle83a869902592409eb90b5a5ae012e751; var currVal_1 = false; var currVal_2 = _co.FieldSetCollapseText83a869902592409eb90b5a5ae012e751; var currVal_3 = _co.FieldSetExpandText83a869902592409eb90b5a5ae012e751; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = true; _ck(_v, 5, 0, currVal_4); var currVal_5 = true; _ck(_v, 7, 0, currVal_5); }, null); }
            function View_BasicFormComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "basic-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_3)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_12)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_37)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.viewModel.form; _ck(_v, 1, 0, currVal_8); var currVal_9 = true; _ck(_v, 5, 0, currVal_9); var currVal_10 = true; _ck(_v, 7, 0, currVal_10); var currVal_11 = true; _ck(_v, 9, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.lang === "zh-CHS") || (_co.lang === "zh-CHT")); var currVal_1 = ɵnov(_v, 3).ngClassUntouched; var currVal_2 = ɵnov(_v, 3).ngClassTouched; var currVal_3 = ɵnov(_v, 3).ngClassPristine; var currVal_4 = ɵnov(_v, 3).ngClassDirty; var currVal_5 = ɵnov(_v, 3).ngClassValid; var currVal_6 = ɵnov(_v, 3).ngClassInvalid; var currVal_7 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-form f-section-in-mainsubcard"], ["id", "basic-form-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 2, { headerDirective: 0 }), ɵqud(335544320, 3, { headerTitleDirective: 0 }), ɵqud(335544320, 4, { headerContentDirective: 0 }), ɵqud(335544320, 5, { headerToolbarDirective: 0 }), ɵqud(335544320, 6, { extendDirective: 0 }), ɵqud(335544320, 7, { contentDirective: 0 }), ɵqud(335544320, 8, { viewChangeDirective: 0 }), ɵdid(9, 4407296, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_BasicFormComponent_2)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectionbasicformsectionMainTitle; var currVal_7 = _co.SectionbasicformsectionSubTitle; var currVal_8 = true; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatusCls; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_BasicFormComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(671088640, 1, { name_ff2e5859_wvll: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_1)), ɵdid(3, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); }, null); }
            function View_BasicFormComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 80, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(77, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 77, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 77).cls; _ck(_v, 0, 0, currVal_0); }); }
            var BasicFormComponentNgFactory = ɵccf("app-basicformcomponent", BasicFormComponent, View_BasicFormComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-bill"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-record"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 2, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(4, null, ["", ""])), ɵppd(5, 3), (_l()(), ɵeld(6, 0, null, null, 6, "div", [["class", "f-title-pagination"]], null, null, null, null, null)), (_l()(), ɵeld(7, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-w"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem1()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(8, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(9, { "f-state-disabled": 0 }), (_l()(), ɵeld(10, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-e"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem2()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(11, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(12, { "f-state-disabled": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "f-icon f-icon-arrow-w"; var currVal_2 = _ck(_v, 9, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 8, 0, currVal_1, currVal_2); var currVal_3 = "f-icon f-icon-arrow-e"; var currVal_4 = _ck(_v, 12, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 11, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 4, 0, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "title", _co.lang, "\u884C\u653F\u4EBA\u5458\u7EF4\u62A4")); _ck(_v, 4, 0, currVal_0); }); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_3)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-jobinfocomponent", [], [[8, "className", 0]], null, null, View_JobinfoComponent_0, RenderType_JobinfoComponent)), ɵprd(4608, null, ViewModel, JobinfoComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new jobinfoAddItem1Handler(p0_0), new jobinfoRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, JobinfoComponentViewmodelForm, []), ɵprd(4608, null, UIState, JobinfoComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, JobinfoComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "jobinfo-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            function View_RootComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-eduinfocomponent", [], [[8, "className", 0]], null, null, View_EduinfoComponent_0, RenderType_EduinfoComponent)), ɵprd(4608, null, ViewModel, EduinfoComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new eduinfoAddItem1Handler(p0_0), new eduinfoRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, EduinfoComponentViewmodelForm, []), ɵprd(4608, null, UIState, EduinfoComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, EduinfoComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "eduinfo-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            function View_RootComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-tabs", [["class", "f-component-tabs f-tabs-has-grid"], ["id", "detail-tab"]], null, null, null, View_FarrisTabsComponent_0, RenderType_FarrisTabsComponent)), ɵdid(1, 16498688, null, 0, FarrisTabsComponent, [TabService, ElementRef, Renderer2, ChangeDetectorRef, NgZone], { autoTitleWidth: [0, "autoTitleWidth"], titleLength: [1, "titleLength"], selectId: [2, "selectId"], contentFill: [3, "contentFill"], btnStates: [4, "btnStates"], btnVisible: [5, "btnVisible"], titleWidth: [6, "titleWidth"] }, null), (_l()(), ɵeld(2, 0, null, 0, 4, "farris-tab", [], null, null, null, View_FarrisTabComponent_0, RenderType_FarrisTabComponent)), ɵdid(3, 12697600, null, 2, FarrisTabComponent, [Compiler, ComponentFactoryResolver, Renderer2, ElementRef, ChangeDetectorRef, [2, FarrisTabsComponent]], { show: [0, "show"], id: [1, "id"], title: [2, "title"], removeable: [3, "removeable"], toolbar: [4, "toolbar"] }, null), ɵqud(335544320, 8, { contentTempl: 0 }), ɵqud(335544320, 9, { farrisTabsExtendDirective: 0 }), (_l()(), ɵand(0, [[8, 2], ["content", 2]], null, 0, null, View_RootComponent_11)), (_l()(), ɵeld(7, 0, null, 0, 4, "farris-tab", [], null, null, null, View_FarrisTabComponent_0, RenderType_FarrisTabComponent)), ɵdid(8, 12697600, null, 2, FarrisTabComponent, [Compiler, ComponentFactoryResolver, Renderer2, ElementRef, ChangeDetectorRef, [2, FarrisTabsComponent]], { show: [0, "show"], id: [1, "id"], title: [2, "title"], removeable: [3, "removeable"], toolbar: [4, "toolbar"] }, null), ɵqud(335544320, 10, { contentTempl: 0 }), ɵqud(335544320, 11, { farrisTabsExtendDirective: 0 }), (_l()(), ɵand(0, [[10, 2], ["content", 2]], null, 0, null, View_RootComponent_12))], function (_ck, _v) { var _co = _v.component; var currVal_0 = false; var currVal_1 = 7; var currVal_2 = "jobinfo-tab-page"; var currVal_3 = false; var currVal_4 = _co.tabsToolbarStates; var currVal_5 = _co.tabsToolbarVisibleStates; var currVal_6 = 0; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = true; var currVal_8 = "jobinfo-tab-page"; var currVal_9 = _co.jobinfotabpage; var currVal_10 = false; var currVal_11 = _co.jobinfoTabToolbar; _ck(_v, 3, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = true; var currVal_13 = "eduinfo-tab-page"; var currVal_14 = _co.eduinfotabpage; var currVal_15 = false; var currVal_16 = _co.eduinfoTabToolbar; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); }, null); }
            function View_RootComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-tabs f-section-in-mainsubcard"], ["id", "detail-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 1, { headerDirective: 0 }), ɵqud(335544320, 2, { headerTitleDirective: 0 }), ɵqud(335544320, 3, { headerContentDirective: 0 }), ɵqud(335544320, 4, { headerToolbarDirective: 0 }), ɵqud(335544320, 5, { extendDirective: 0 }), ɵqud(335544320, 6, { contentDirective: 0 }), ɵqud(335544320, 7, { viewChangeDirective: 0 }), ɵdid(9, 4407296, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_RootComponent_10)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondetailsectionMainTitle; var currVal_7 = _co.SectiondetailsectionSubTitle; var currVal_8 = false; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatusCls; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_RootComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-struct-wrapper"], ["id", "detail-container"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_9)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 83, "div", [["class", "f-struct-like-card"], ["id", "like-card-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 80, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [EmployeeRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(78, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_8)), ɵdid(83, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 78, 0); var currVal_1 = true; _ck(_v, 83, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 78).cls; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-main"], ["id", "main-container"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_7)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "div", [["class", "f-page f-page-card f-page-is-mainsubcard"], ["id", "root-layout"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.viewModel.form; _ck(_v, 1, 0, currVal_7); var currVal_8 = true; _ck(_v, 5, 0, currVal_8); var currVal_9 = true; _ck(_v, 7, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).ngClassUntouched; var currVal_1 = ɵnov(_v, 3).ngClassTouched; var currVal_2 = ɵnov(_v, 3).ngClassPristine; var currVal_3 = ɵnov(_v, 3).ngClassDirty; var currVal_4 = ɵnov(_v, 3).ngClassValid; var currVal_5 = ɵnov(_v, 3).ngClassInvalid; var currVal_6 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
            function View_RootComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 119, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, EmployeeRepository, EmployeeRepository, [Injector]), ɵprd(6144, null, Repository, null, [EmployeeRepository]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1, p5_0, p5_1, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3, p7_4, p8_0, p8_1, p8_2, p8_3, p9_0, p9_1, p9_2, p9_3) { return [new Load1Handler(p0_0, p0_1), new LoadAndAdd1Handler(p1_0, p1_1), new LoadAndView1Handler(p2_0, p2_1), new LoadAndEdit1Handler(p3_0, p3_1), new Add1Handler(p4_0, p4_1), new Edit1Handler(p5_0, p5_1), new Save1Handler(p6_0, p6_1, p6_2, p6_3), new Cancel1Handler(p7_0, p7_1, p7_2, p7_3, p7_4), new ChangeItem1Handler(p8_0, p8_1, p8_2, p8_3), new ChangeItem2Handler(p9_0, p9_1, p9_2, p9_3)]; }, [NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, ValidationService, EndEditService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, ComponentManagerService, ComponentManagerService, []), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, EmployeeProxy, EmployeeProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, WEBAPI_PREFIX_TOKEN, ɵ0$2, [GSPFrameworkCommonService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(112, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, true, []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "946e5eed-9b0c-4c34-a3ce-545576ff1268", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", []), ɵprd(256, null, CHANGE_SET_POLICY_TOKEN, "valid", [])], function (_ck, _v) { _ck(_v, 112, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 112).cls; _ck(_v, 0, 0, currVal_0); }); }
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
            var EmployCardModuleNgFactory = exports('EmployCardModuleNgFactory', ɵcmf(EmployCardModule, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, SingleListComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, SearchPanelComponentNgFactory, SearchFieldPanelComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, LookupAdvancedLayoutComponentNgFactory, LookupFilterBarComponentNgFactory, FilterPanelComponentNgFactory, NgbTooltipWindowNgFactory, ɵaNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, NewHeaderFormComponentNgFactory, SetColumnsComponentNgFactory, PreviewMultiHeadersComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, OverLayHiddenService, OverLayHiddenService, []), ɵmpd(4608, DialogService$1, DialogService$1, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa$1, ɵa$1, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$1, ɵc$1, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$1, FilterService$1, []), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, SolutionService, SolutionService, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, BasePathService, BasePathService, []), ɵmpd(4608, GSPFrameworkCommonService, GSPFrameworkCommonService, []), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$2, NavigationService$2, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, UploadService, UploadService, [HttpService, HttpClient]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService$1, SolutionService$1, [NotifyService]), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, StateService, StateService, [NotifyService, LocaleService]), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ViewChangeService, ViewChangeService, []), ɵmpd(4608, ViewChangeManageService, ViewChangeManageService, []), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService, [2, Injector]]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService], [2, Injector]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService], [2, Injector]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ2$2, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf, ɵf, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SearchBoxModule, SearchBoxModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, FarrisRTFModule, FarrisRTFModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, EmployCardRoutingModule, EmployCardRoutingModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$5, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, EmployCardModule, EmployCardModule, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$2, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(256, TabConfig, undefined, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$3, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/apporder/df/web/bo-organization-front/employcard/", [])]); }));

        }
    };
});
