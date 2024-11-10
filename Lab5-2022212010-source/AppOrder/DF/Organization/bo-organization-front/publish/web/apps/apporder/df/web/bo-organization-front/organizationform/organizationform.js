/*! UPDATE TIME: 2024/11/8 15:30:15 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/rtf', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@farris/ui-common', '@farris/ui-common/date', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@angular/router', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-forms/farris-ui-forms.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-search-box/farris-ui-search-box.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-enum-editor/farris-ui-enum-editor.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-locale', '@farris/ui-common/events', '@farris/ui-common/column', '@farris/ui-section/farris-ui-section.ngfactory', '@gsp-wf/wf-task-handler', '@farris/ui-modal', '@farris/ui-text/farris-ui-text.ngfactory', '@farris/ui-common/number', '@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory', '@farris/ui-combo-list/farris-ui-combo-list.ngfactory', '@progress/kendo-angular-dialog', '@farris/ui-dialog', '@progress/kendo-angular-l10n', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-pagination', '@farris/ui-popover', '@progress/kendo-angular-popup', '@gsp-wf/wf-approval-logs', '@farris/ui-context-menu', '@farris/ui-filter-condition', '@progress/kendo-angular-resize-sensor', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@farris/ui-perfect-scrollbar', '@farris/ui-area-response', '@farris/ui-datatable', '@farris/ui-datalist', '@farris/ui-layout', '@farris/ui-dropdown', '@farris/ui-search-box', '@farris/ui-filter-panel', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-enum-editor', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-organization-selector', '@farris/ui-tree'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, Component, ElementRef, NgModule, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, ɵprd, ApplicationRef, ɵnov, ɵand, TemplateRef, ɵqud, Renderer2, NgZone, ɵpid, IterableDiffers, KeyValueDiffers, ɵpod, ɵppd, ɵted, ɵinlineInterpolate, ɵunv, Inject, InjectionToken, PLATFORM_ID, RendererFactory2, ErrorHandler, __decorate, __metadata, __extends, CommonModule, NgIf, NgClass, NgSwitch, NgSwitchCase, DOCUMENT, isPlatformBrowser, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, FormControl, FormsModule, ReactiveFormsModule, FormGroupDirective, ControlContainer, NgControlStatusGroup, CheckboxControlValueAccessor, NG_VALUE_ACCESSOR, FormControlName, ɵangular_packages_forms_forms_k, NgControl, NgControlStatus, DefaultValueAccessor, COMPOSITION_BUFFER_MODE, MaxLengthValidator, NG_VALIDATORS, ɵangular_packages_forms_forms_j, FormBuilder, ɵangular_packages_forms_forms_bc, KendoBindingModule, SectionComponentRefDirective, FarrisTreeTableBindingDirective, FarrisTreetableFormatService, FarrisTreeTableFormatDirective, TreetableComponentRefDirective, InputEndEditDirective, ComboListComponentRefDirective, FarrisKendoGridFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, FlexLayoutModule, FarrisFormsModule, FormMessageModule, ValidationMessageComponent, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, Uri, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, BehaviorSubject, Observable, switchMap, catchError, HttpClient, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientModule, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, DomSanitizer, EventManager, BasePathService, GSPFrameworkCommonService, resolveBasePath, FarrisRTFModule, Declaration, ViewModel, NgField, NgEntity, Entity, NgObject, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, UIState, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, BACK_END_MESSAGE_HANDLER_TOKEN, FrameComponent, NgCommand, NgFormControl, NgCommandHandler, CommandHandler, COMMAND_HANDLERS_TOKEN, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, FrameContext, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, NavigationMiddlewareService, TreeDataService, PaginationService, CardDataService, StateMachineService, DataGridService, FocusInvalidService, EndEditService, ValidationService, CommandServicesModule, NavigationEventService, RuntimeFrameworkService, MenuStateService, QuerystringService, NavigationService, LanguageService, CommandService, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, ChangeItemService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, ListDataService, FilterConditionService, SubTreeDataService, SubListDataService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService, RouterService, AuthorityService, ɵb, ɵc, BatchEditService, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$2, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, SessionService, HttpService, LanguageService$1, CacheStorageAbstract, CacheMemoryStorage, CacheService, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, FInputTipsDirective, GridModule, GridComponent, BrowserSupportService, SelectionService, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ScrollSyncService, DomEventsService, ColumnResizingService, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, NavigationService$2, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, TOUCH_ENABLED, touchEnabled, WEBAPI_PREFIX_TOKEN, FarrisCommonModule, CommonUtils, RuntimeStateService, IdService, OverLayHiddenService, DateHelperModule, DateTimeHelperService, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupModule, TreeTableModule, TreeTableComponent, TreetableService, TTHotkeys, FieldGroupModule, ɵa, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridModule, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, AngularResizableDirective, SplitterModule, SplitterComponent, SplitterPaneComponent, ListNavModule, TextModule, TextComponent, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, ComboServerSideToken, ComboListModule, ComboService, ComboListComponent, ComboLocaleService, FarrisHtmlEditorModule, ɵb$3, defaultModules, CloudprintService, CloudPrintModule, ɵa$1, ɵb$1, ɵc$1, ɵe, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$2, ɵc$2, ɵd$1, ɵe$1, ɵf$1, ɵg$1, ɵh$1, ɵi, ɵj$1, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, ViewChangeService, ViewChangeManageService, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$1, ConvertorService, SolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, ComboLookupModule, ScrollspyModule, FarrisScrollSpyService, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf, ɵh, ɵbe, ɵg, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, SingleListComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, SearchPanelComponentNgFactory, SearchFieldPanelComponentNgFactory, DataTableComponentNgFactory, View_TreeTableComponent_0, RenderType_TreeTableComponent, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, LookupAdvancedLayoutComponentNgFactory, LookupFilterBarComponentNgFactory, FilterPanelComponentNgFactory, NgbTooltipWindowNgFactory, View_SplitterComponent_0, RenderType_SplitterComponent, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent, ɵaNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, NewHeaderFormComponentNgFactory, SetColumnsComponentNgFactory, PreviewMultiHeadersComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, LocaleService, FARRIS_LOCAL_CUSTOM_DATA, LocaleModule, ResizeService, ColumnFormatService, DataColumnModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, BsModalService, ModalModule, View_TextComponent_0, RenderType_TextComponent, NumberHelperService, NumberHelperModule, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent, View_ComboListComponent_0, RenderType_ComboListComponent, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$2, WindowModule, DialogModule, DialogService$1, FarrisDialogModule, LocalizationService$1, PositioningService, ComponentLoaderFactory, PaginationService$1, PaginationModule, PopoverConfig, PopoverModule, PopupService, POPUP_CONTAINER, PopupModule, WfApprovalLogsService, WfApprovalLogsModule, FarrisContextMenuService, FarrisContextMenuModule, QuerySolutionService, FilterConditionModule, ResizeBatchService, ResizeSensorModule, SolutionService$1, ConvertorService$1, StateService, QueryConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, PerfectScrollbarModule, FAreaResponseModule, DataTableModule, DatalistModule, LayoutModule$1, FDropdownDirectiveTypeModule, SearchBoxModule, FilterPanelModule, TaskImplApiModule, WfSignModule, EnumEditorModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, OrganizationSelectorModule, TreeModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            HostBinding = module.HostBinding;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
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
            ɵand = module.ɵand;
            TemplateRef = module.TemplateRef;
            ɵqud = module.ɵqud;
            Renderer2 = module.Renderer2;
            NgZone = module.NgZone;
            ɵpid = module.ɵpid;
            IterableDiffers = module.IterableDiffers;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵpod = module.ɵpod;
            ɵppd = module.ɵppd;
            ɵted = module.ɵted;
            ɵinlineInterpolate = module.ɵinlineInterpolate;
            ɵunv = module.ɵunv;
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
            NgSwitch = module.NgSwitch;
            NgSwitchCase = module.NgSwitchCase;
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
            CheckboxControlValueAccessor = module.CheckboxControlValueAccessor;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            FormControlName = module.FormControlName;
            ɵangular_packages_forms_forms_k = module.ɵangular_packages_forms_forms_k;
            NgControl = module.NgControl;
            NgControlStatus = module.NgControlStatus;
            DefaultValueAccessor = module.DefaultValueAccessor;
            COMPOSITION_BUFFER_MODE = module.COMPOSITION_BUFFER_MODE;
            MaxLengthValidator = module.MaxLengthValidator;
            NG_VALIDATORS = module.NG_VALIDATORS;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            FormBuilder = module.FormBuilder;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
        }, function (module) {
            KendoBindingModule = module.KendoBindingModule;
            SectionComponentRefDirective = module.SectionComponentRefDirective;
            FarrisTreeTableBindingDirective = module.FarrisTreeTableBindingDirective;
            FarrisTreetableFormatService = module.FarrisTreetableFormatService;
            FarrisTreeTableFormatDirective = module.FarrisTreeTableFormatDirective;
            TreetableComponentRefDirective = module.TreetableComponentRefDirective;
            InputEndEditDirective = module.InputEndEditDirective;
            ComboListComponentRefDirective = module.ComboListComponentRefDirective;
            FarrisKendoGridFormatService = module.FarrisKendoGridFormatService;
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
            Uri = module.Uri;
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
            BehaviorSubject = module.BehaviorSubject;
            Observable = module.Observable;
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
            ViewModel = module.ViewModel;
            NgField = module.NgField;
            NgEntity = module.NgEntity;
            Entity = module.Entity;
            NgObject = module.NgObject;
            NgRepository = module.NgRepository;
            NgValidateForm = module.NgValidateForm;
            Form = module.Form;
            NgState = module.NgState;
            State = module.State;
            NgRenderState = module.NgRenderState;
            NgAction = module.NgAction;
            StateMachine = module.StateMachine;
            UIState = module.UIState;
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
            BACK_END_MESSAGE_HANDLER_TOKEN = module.BACK_END_MESSAGE_HANDLER_TOKEN;
            FrameComponent = module.FrameComponent;
            NgCommand = module.NgCommand;
            NgFormControl = module.NgFormControl;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            COMMAND_HANDLERS_TOKEN = module.COMMAND_HANDLERS_TOKEN;
            FARRIS_DEVKIT_APP_PROVIDERS = module.FARRIS_DEVKIT_APP_PROVIDERS;
            FORM_PATH_TOKEN = module.FORM_PATH_TOKEN;
            FrameContext = module.FrameContext;
            CommandHandlerRegistry = module.CommandHandlerRegistry;
            CommandHandlerExtenderRegistry = module.CommandHandlerExtenderRegistry;
            COMMAND_HANDLER_EXTENDERS_TOKEN = module.COMMAND_HANDLER_EXTENDERS_TOKEN;
            CommandHandlerFactory = module.CommandHandlerFactory;
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
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            TreeDataService = module.TreeDataService;
            PaginationService = module.PaginationService;
            CardDataService = module.CardDataService;
            StateMachineService = module.StateMachineService;
            DataGridService = module.DataGridService;
            FocusInvalidService = module.FocusInvalidService;
            EndEditService = module.EndEditService;
            ValidationService = module.ValidationService;
            CommandServicesModule = module.CommandServicesModule;
            NavigationEventService = module.NavigationEventService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
            MenuStateService = module.MenuStateService;
            QuerystringService = module.QuerystringService;
            NavigationService = module.NavigationService;
            LanguageService = module.LanguageService;
            CommandService = module.CommandService;
            FormMessageService = module.FormMessageService;
            FormLoadingService = module.FormLoadingService;
            FormNotifyService = module.FormNotifyService;
            FormErrorService = module.FormErrorService;
            ChangeItemService = module.ChangeItemService;
            UIStateService = module.UIStateService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            ListDataService = module.ListDataService;
            FilterConditionService = module.FilterConditionService;
            SubTreeDataService = module.SubTreeDataService;
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
            FarrisCommonModule = module.FarrisCommonModule;
            CommonUtils = module.CommonUtils;
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
            TreeTableComponent = module.TreeTableComponent;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
            ɵa = module.ɵa;
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
            DatagridModule = module.DatagridModule;
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
            AngularResizableDirective = module.AngularResizableDirective;
        }, function (module) {
            SplitterModule = module.SplitterModule;
            SplitterComponent = module.SplitterComponent;
            SplitterPaneComponent = module.SplitterPaneComponent;
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
            ComboService = module.ComboService;
            ComboListComponent = module.ComboListComponent;
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
            View_TreeTableComponent_0 = module.View_TreeTableComponent_0;
            RenderType_TreeTableComponent = module.RenderType_TreeTableComponent;
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
            View_SplitterComponent_0 = module.View_SplitterComponent_0;
            RenderType_SplitterComponent = module.RenderType_SplitterComponent;
            View_SplitterPaneComponent_0 = module.View_SplitterPaneComponent_0;
            RenderType_SplitterPaneComponent = module.RenderType_SplitterPaneComponent;
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
            ResizeService = module.ResizeService;
        }, function (module) {
            ColumnFormatService = module.ColumnFormatService;
            DataColumnModule = module.DataColumnModule;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            WfTaskHandlerService = module.WfTaskHandlerService;
            TaskService = module.TaskService;
            I18nService$2 = module.I18nService;
            WfTaskHandlerModule = module.WfTaskHandlerModule;
        }, function (module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
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
            View_ComboListComponent_0 = module.View_ComboListComponent_0;
            RenderType_ComboListComponent = module.RenderType_ComboListComponent;
        }, function (module) {
            WindowService = module.WindowService;
            WindowContainerService = module.WindowContainerService;
            DialogContainerService = module.DialogContainerService;
            DialogService$2 = module.DialogService;
            SharedModule$2 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
        }, function (module) {
            DialogService$1 = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
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
                return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/organizationform/i18n/'), '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "TextBox/currency_3cd5ae49_ir1e/placeHolder": "", "TextBox/dutyLevel_125fb816_uixh/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "page-header-toolbar": "", "button-addSibling": "新增同级", "button-addChild": "新增子级", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "main-container": "", "content-splitter": "", "content-tree": "", "tree-grid-component-ref": "", "content-main": "", "detail-component-ref": "", "tree-grid-component": "", "tree-grid-section": "", "Section/tree-grid-section/mainTitle": "", "Section/tree-grid-section/subTitle": "", "treeGrid": "", "code_2a2ef993_kge5": "编号", "shortName_c85c7df9_fbyj": "名称", "dutyLevel_125fb816_ketd": "层级", "TreeGridField/dutyLevel_125fb816_ketd/enumData/01": "单位", "TreeGridField/dutyLevel_125fb816_ketd/enumData/02": "部门", "detail-form-component": "", "detail-form-section": "", "Section/detail-form-section/mainTitle": "基本信息", "Section/detail-form-section/subTitle": "", "detail-form-layout": "", "code_2a2ef993_3f3b": "编号", "TextBox/code_2a2ef993_3f3b/placeHolder": "", "shortName_c85c7df9_03wl": "名称", "TextBox/shortName_c85c7df9_03wl/placeHolder": "", "dutyLevel_125fb816_uixh": "层级", "EnumField/dutyLevel_125fb816_uixh/placeHolder": "", "EnumField/dutyLevel_125fb816_uixh/enumData/01": "单位", "EnumField/dutyLevel_125fb816_uixh/enumData/02": "部门", "leader_a9cc51db_sy5i": "分管领导", "TextBox/leader_a9cc51db_sy5i/placeHolder": "", "owner_1659abe1_k0qx": "负责人", "TextBox/owner_1659abe1_k0qx/placeHolder": "", "area_922add7f_m7et": "国家或地区", "TextBox/area_922add7f_m7et/placeHolder": "", "currency_3cd5ae49_ir1e": "币种", "EnumField/currency_3cd5ae49_ir1e/placeHolder": "", "EnumField/currency_3cd5ae49_ir1e/enumData/rmb": "人民币", "EnumField/currency_3cd5ae49_ir1e/enumData/dollar": "美元", "EnumField/currency_3cd5ae49_ir1e/enumData/euro": "欧元", "EnumField/currency_3cd5ae49_ir1e/enumData/yen": "日元", "EnumField/currency_3cd5ae49_ir1e/enumData/other": "其他", "summary_30eb4bb2_w7ia": "摘要", "TextBox/summary_30eb4bb2_w7ia/placeHolder": "", "flag_38c372ff_sydv": "启用标识" } };
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
                                var versionKey_1 = "organizationform/" + langCode + ".json";
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

            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'TreeGridComponentViewmodel': 'treeGridComponentViewmodel',
                        'DetailFormComponentViewmodel': 'detailFormComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var PathHierarchyInfo4397Entity = /** @class */ (function (_super) {
                __extends(PathHierarchyInfo4397Entity, _super);
                function PathHierarchyInfo4397Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'Path',
                        dataField: 'path',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'TreeInfo.Path',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], PathHierarchyInfo4397Entity.prototype, "path", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Layer',
                        dataField: 'layer',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'TreeInfo.Layer',
                    }),
                    __metadata("design:type", Object)
                ], PathHierarchyInfo4397Entity.prototype, "layer", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'IsDetail',
                        dataField: 'isDetail',
                        originalDataFieldType: 'Boolean',
                        initValue: false,
                        path: 'TreeInfo.IsDetail',
                    }),
                    __metadata("design:type", Object)
                ], PathHierarchyInfo4397Entity.prototype, "isDetail", void 0);
                PathHierarchyInfo4397Entity = __decorate([
                    NgEntity({
                        originalCode: "TreeInfo",
                        nodeCode: "treeInfo"
                    })
                ], PathHierarchyInfo4397Entity);
                return PathHierarchyInfo4397Entity;
            }(Entity));

            var OrganizationEntity = /** @class */ (function (_super) {
                __extends(OrganizationEntity, _super);
                function OrganizationEntity() {
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
                ], OrganizationEntity.prototype, "id", void 0);
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
                ], OrganizationEntity.prototype, "version", void 0);
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
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrganizationEntity.prototype, "code", void 0);
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
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrganizationEntity.prototype, "name", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'DutyLevel',
                        dataField: 'dutyLevel',
                        originalDataFieldType: 'Enum',
                        defaultValue: '',
                        initValue: '01',
                        path: 'DutyLevel',
                    }),
                    __metadata("design:type", Object)
                ], OrganizationEntity.prototype, "dutyLevel", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Leader',
                        dataField: 'leader',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Leader',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrganizationEntity.prototype, "leader", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Owner',
                        dataField: 'owner',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Owner',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrganizationEntity.prototype, "owner", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Area',
                        dataField: 'area',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Area',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [255],
                                message: '最大长度为255',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrganizationEntity.prototype, "area", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Currency',
                        dataField: 'currency',
                        originalDataFieldType: 'Enum',
                        defaultValue: '',
                        initValue: 'rmb',
                        path: 'Currency',
                    }),
                    __metadata("design:type", Object)
                ], OrganizationEntity.prototype, "currency", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Summary',
                        dataField: 'summary',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Summary',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrganizationEntity.prototype, "summary", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Flag',
                        dataField: 'flag',
                        originalDataFieldType: 'Boolean',
                        initValue: false,
                        path: 'Flag',
                    }),
                    __metadata("design:type", Object)
                ], OrganizationEntity.prototype, "flag", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'OrderCode',
                        dataField: 'orderCode',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'OrderCode',
                    }),
                    __metadata("design:type", Object)
                ], OrganizationEntity.prototype, "orderCode", void 0);
                __decorate([
                    NgObject({
                        dataField: 'treeInfo',
                        originalDataField: 'TreeInfo',
                        hierarchyType: 'path',
                        type: PathHierarchyInfo4397Entity
                    }),
                    __metadata("design:type", PathHierarchyInfo4397Entity)
                ], OrganizationEntity.prototype, "treeInfo", void 0);
                OrganizationEntity = __decorate([
                    NgEntity({
                        originalCode: "Organization",
                        nodeCode: "organizations"
                    })
                ], OrganizationEntity);
                return OrganizationEntity;
            }(Entity));

            var OrganizationProxy = /** @class */ (function (_super) {
                __extends(OrganizationProxy, _super);
                function OrganizationProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/apporder/df/v1.0/organizationform_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                OrganizationProxy.prototype.PathHierarchyCreateSibling = function (dataID) {
                    var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatesibling', {});
                    var url = uri.toString();
                    var method = 'PUT';
                    var options = {
                        params: {},
                        headers: {},
                        body: {
                            requestInfo: null,
                            dataID: dataID,
                        }
                    };
                    return this.invoke(url, method, options);
                };
                OrganizationProxy.prototype.PathHierarchyCreateChildLayer = function (dataID) {
                    var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatechildlayer', {});
                    var url = uri.toString();
                    var method = 'PUT';
                    var options = {
                        params: {},
                        headers: {},
                        body: {
                            requestInfo: null,
                            dataID: dataID,
                        }
                    };
                    return this.invoke(url, method, options);
                };
                OrganizationProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], OrganizationProxy);
                return OrganizationProxy;
            }(BefProxy));

            var OrganizationRepository = /** @class */ (function (_super) {
                __extends(OrganizationRepository, _super);
                function OrganizationRepository(injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.name = 'OrganizationRepository';
                    _this.paginationInfo = {};
                    _this.proxy = injector.get(OrganizationProxy, null);
                    return _this;
                }
                OrganizationRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/apporder/df/v1.0/organizationform_frm',
                        entityType: OrganizationEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], OrganizationRepository);
                return OrganizationRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '行政组织',
                        enableValidate: false
                    }),
                    Injectable()
                ], RootViewmodelForm);
                return RootViewmodelForm;
            }(Form));

            var ɵ0 = function (context) { return context.state === 'init'; }, ɵ1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ2 = function (context) { return context.state === 'init'; }, ɵ3 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ4 = function (context) { return context.state === 'init'; }, ɵ5 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ6 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ7 = function (context) { return context.state === 'add' || context.state === 'edit'; };
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
                        render: ɵ0
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "editable", void 0);
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

            var ɵ0$1 = resolveBasePath;
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
                            "id": "button-addSibling",
                            "text": _this.langService.transform("button-addSibling", _this.lang, "新增同级"),
                            "resourceId": "button-addSibling",
                            "isDP": false,
                            "class": "btn-primary",
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-addChild",
                            "text": _this.langService.transform("button-addChild", _this.lang, "新增子级"),
                            "resourceId": "button-addChild",
                            "isDP": false,
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
                            'button-addSibling': !_this.viewModel.stateMachine['canAdd'],
                            'button-addChild': !_this.viewModel.stateMachine['canAdd'],
                            'button-edit': !_this.viewModel.stateMachine['canEdit'],
                            'button-save': !_this.viewModel.stateMachine['canSave'],
                            'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                            'button-delete': !_this.viewModel.stateMachine['canRemove'],
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-addSibling': true,
                            'button-addChild': true,
                            'button-edit': true,
                            'button-save': true,
                            'button-cancel': true,
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
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
                    switch (args.id) {
                        case 'button-addSibling':
                            this.viewModel.treeGridComponentViewmodel.AddSibling1(args);
                            break;
                        case 'button-addChild':
                            this.viewModel.treeGridComponentViewmodel.AddChild1(args);
                            break;
                        case 'button-edit':
                            this.viewModel.detailFormComponentViewmodel.Edit1(args);
                            break;
                        case 'button-save':
                            this.viewModel.detailFormComponentViewmodel.Save1(args);
                            break;
                        case 'button-cancel':
                            this.viewModel.detailFormComponentViewmodel.Cancel1(args);
                            break;
                        case 'button-delete':
                            this.viewModel.treeGridComponentViewmodel.Remove1(args);
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
                            { provide: Repository, useExisting: OrganizationRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            FrameworkSessionService,
                            UriService,
                            OrganizationProxy,
                            OrganizationRepository,
                            { provide: ViewModel, useClass: RootViewmodel },
                            { provide: Declaration, useClass: EventDeclaration },
                            { provide: TranslateToken, useExisting: LangService },
                            { provide: ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, useValue: false },
                            { provide: WEBAPI_PREFIX_TOKEN, useFactory: ɵ0$1, deps: [GSPFrameworkCommonService] },
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
                            { provide: FORM_ID, useValue: "c346a17f-8b51-444c-b2aa-eee292edb491" },
                            { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                            { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                            { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
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
            var OrganizationFormRoutingModule = /** @class */ (function () {
                function OrganizationFormRoutingModule() {
                }
                OrganizationFormRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], OrganizationFormRoutingModule);
                return OrganizationFormRoutingModule;
            }());

            var TreeGridComponentViewmodel = /** @class */ (function (_super) {
                __extends(TreeGridComponentViewmodel, _super);
                function TreeGridComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    return _this;
                }
                TreeGridComponentViewmodel.prototype.LoadTree1 = function (commandParam) { return; };
                TreeGridComponentViewmodel.prototype.LoadCard1 = function (commandParam) { return; };
                TreeGridComponentViewmodel.prototype.AddSibling1 = function (commandParam) { return; };
                TreeGridComponentViewmodel.prototype.AddChild1 = function (commandParam) { return; };
                TreeGridComponentViewmodel.prototype.Remove1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'LoadTree1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], TreeGridComponentViewmodel.prototype, "LoadTree1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadCard1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], TreeGridComponentViewmodel.prototype, "LoadCard1", null);
                __decorate([
                    NgCommand({
                        name: 'AddSibling1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], TreeGridComponentViewmodel.prototype, "AddSibling1", null);
                __decorate([
                    NgCommand({
                        name: 'AddChild1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], TreeGridComponentViewmodel.prototype, "AddChild1", null);
                __decorate([
                    NgCommand({
                        name: 'Remove1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], TreeGridComponentViewmodel.prototype, "Remove1", null);
                TreeGridComponentViewmodel = __decorate([
                    Injectable()
                ], TreeGridComponentViewmodel);
                return TreeGridComponentViewmodel;
            }(ViewModel));

            var TreeGridComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(TreeGridComponentViewmodelForm, _super);
                function TreeGridComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'code',
                        name: "{{code_2a2ef993_kge5}}",
                        binding: 'code',
                        updateOn: 'blur',
                        defaultI18nValue: '编号',
                    }),
                    __metadata("design:type", FormControl)
                ], TreeGridComponentViewmodelForm.prototype, "code", void 0);
                __decorate([
                    NgFormControl({
                        id: 'name',
                        name: "{{shortName_c85c7df9_fbyj}}",
                        binding: 'name',
                        updateOn: 'blur',
                        defaultI18nValue: '名称',
                    }),
                    __metadata("design:type", FormControl)
                ], TreeGridComponentViewmodelForm.prototype, "name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'dutyLevel',
                        name: "{{dutyLevel_125fb816_ketd}}",
                        binding: 'dutyLevel',
                        updateOn: 'blur',
                        defaultI18nValue: '层级',
                    }),
                    __metadata("design:type", FormControl)
                ], TreeGridComponentViewmodelForm.prototype, "dutyLevel", void 0);
                TreeGridComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '行政组织',
                        enableValidate: false
                    }),
                    Injectable()
                ], TreeGridComponentViewmodelForm);
                return TreeGridComponentViewmodelForm;
            }(Form));

            var TreeGridComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(TreeGridComponentViewmodelUIState, _super);
                function TreeGridComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                TreeGridComponentViewmodelUIState = __decorate([
                    Injectable()
                ], TreeGridComponentViewmodelUIState);
                return TreeGridComponentViewmodelUIState;
            }(UIState));

            var LoadTree1Handler = /** @class */ (function (_super) {
                __extends(LoadTree1Handler, _super);
                function LoadTree1Handler(_NavigationMiddlewareService1, _TreeDataService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._TreeDataService1 = _TreeDataService1;
                    return _this;
                }
                LoadTree1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onClosing', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._TreeDataService1, 'load', args, context);
                    });
                    this.addLink('onClosing', 'load', "1==1");
                };
                LoadTree1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadTree1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        TreeDataService])
                ], LoadTree1Handler);
                return LoadTree1Handler;
            }(CommandHandler));

            var LoadCard1Handler = /** @class */ (function (_super) {
                __extends(LoadCard1Handler, _super);
                function LoadCard1Handler(_PaginationService1, _CardDataService1) {
                    var _this = _super.call(this) || this;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    return _this;
                }
                LoadCard1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addLink('resetChildrenPagination', 'update', "1==1");
                };
                LoadCard1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadCard1'
                    }),
                    __metadata("design:paramtypes", [PaginationService,
                        CardDataService])
                ], LoadCard1Handler);
                return LoadCard1Handler;
            }(CommandHandler));

            var AddSibling1Handler = /** @class */ (function (_super) {
                __extends(AddSibling1Handler, _super);
                function AddSibling1Handler(_TreeDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._TreeDataService1 = _TreeDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                AddSibling1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('addSibling', function (context) {
                        var args = [
                            '{COMMAND~/params/siblingId}'
                        ];
                        return _this.invoke(_this._TreeDataService1, 'addSibling', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Create'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('addSibling', 'transit', "1==1");
                };
                AddSibling1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'AddSibling1'
                    }),
                    __metadata("design:paramtypes", [TreeDataService,
                        StateMachineService])
                ], AddSibling1Handler);
                return AddSibling1Handler;
            }(CommandHandler));

            var AddChild1Handler = /** @class */ (function (_super) {
                __extends(AddChild1Handler, _super);
                function AddChild1Handler(_TreeDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._TreeDataService1 = _TreeDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                AddChild1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('addChild', function (context) {
                        var args = [
                            '{COMMAND~/params/parentId}'
                        ];
                        return _this.invoke(_this._TreeDataService1, 'addChild', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Create'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('addChild', 'transit', "1==1");
                };
                AddChild1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'AddChild1'
                    }),
                    __metadata("design:paramtypes", [TreeDataService,
                        StateMachineService])
                ], AddChild1Handler);
                return AddChild1Handler;
            }(CommandHandler));

            var Remove1Handler = /** @class */ (function (_super) {
                __extends(Remove1Handler, _super);
                function Remove1Handler(_DataGridService1, _TreeDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._TreeDataService1 = _TreeDataService1;
                    return _this;
                }
                Remove1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._TreeDataService1, 'remove', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addLink('remove', 'uncheckDeletedRows', "1==1");
                };
                Remove1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Remove1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        TreeDataService])
                ], Remove1Handler);
                return Remove1Handler;
            }(CommandHandler));

            var TreeGridComponent = /** @class */ (function (_super) {
                __extends(TreeGridComponent, _super);
                function TreeGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, sanitizer, injector) {
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
                    _this.treeGridColumns = [];
                    _this.cls = 'f-struct-wrapper  f-utils-fill-flex-column ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.SectiontreegridsectionMainTitle = _this.langService.transform("Section/tree-grid-section/mainTitle", _this.lang, "");
                    _this.SectiontreegridsectionSubTitle = _this.langService.transform("Section/tree-grid-section/subTitle", _this.lang, "");
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
                TreeGridComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.treeGridColumns = [
                        {
                            "id": "code_2a2ef993_kge5",
                            "title": this.langService.transform("code_2a2ef993_kge5", this.lang, "编号"),
                            "dataType": "string",
                            "visible": true,
                            "field": "code",
                            "width": 100,
                            "sortable": false,
                            "formatter": {},
                            "halign": "left",
                            "align": "left"
                        },
                        {
                            "id": "shortName_c85c7df9_fbyj",
                            "title": this.langService.transform("shortName_c85c7df9_fbyj", this.lang, "名称"),
                            "dataType": "string",
                            "visible": true,
                            "field": "name",
                            "width": 100,
                            "sortable": false,
                            "formatter": {},
                            "halign": "left",
                            "align": "left"
                        },
                        {
                            "id": "dutyLevel_125fb816_ketd",
                            "title": this.langService.transform("dutyLevel_125fb816_ketd", this.lang, "层级"),
                            "dataType": "enum",
                            "visible": true,
                            "field": "dutyLevel",
                            "width": 100,
                            "sortable": false,
                            "enumData": [
                                {
                                    "name": this.langService.transform("TreeGridField/dutyLevel_125fb816_ketd/enumData/01", this.lang, "单位"),
                                    "value": "01"
                                },
                                {
                                    "name": this.langService.transform("TreeGridField/dutyLevel_125fb816_ketd/enumData/02", this.lang, "部门"),
                                    "value": "02"
                                }
                            ],
                            "formatter": {
                                "type": "enum",
                                "options": {
                                    "valueField": "value",
                                    "textField": "name",
                                    "data": [
                                        {
                                            "value": "01",
                                            "name": this.langService.transform("TreeGridField/dutyLevel_125fb816_ketd/enumData/01", this.lang, "单位")
                                        },
                                        {
                                            "value": "02",
                                            "name": this.langService.transform("TreeGridField/dutyLevel_125fb816_ketd/enumData/02", this.lang, "部门")
                                        }
                                    ]
                                }
                            },
                            "halign": "left",
                            "align": "left"
                        }
                    ];
                    this.onFormLoad();
                };
                TreeGridComponent.prototype.ngAfterViewInit = function () {
                };
                TreeGridComponent.prototype.ngOnDestroy = function () {
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
                TreeGridComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                TreeGridComponent.prototype.onFormLoad = function () {
                    this.viewModel.LoadTree1();
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], TreeGridComponent.prototype, "cls", void 0);
                TreeGridComponent = __decorate([
                    Component({
                        selector: 'app-treegridcomponent',
                        templateUrl: './treegridcomponent.html',
                        styleUrls: ['./treegridcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'tree-grid-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: OrganizationRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: TreeGridComponentViewmodelForm },
                            { provide: UIState, useClass: TreeGridComponentViewmodelUIState },
                            { provide: ViewModel, useClass: TreeGridComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadTree1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadCard1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: AddSibling1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: AddChild1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
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
                        DomSanitizer,
                        Injector])
                ], TreeGridComponent);
                return TreeGridComponent;
            }(FrameComponent));

            var DetailFormComponentViewmodel = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodel, _super);
                function DetailFormComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    return _this;
                }
                DetailFormComponentViewmodel.prototype.Edit1 = function (commandParam) { return; };
                DetailFormComponentViewmodel.prototype.Save1 = function (commandParam) { return; };
                DetailFormComponentViewmodel.prototype.Cancel1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'Edit1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "Edit1", null);
                __decorate([
                    NgCommand({
                        name: 'Save1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "Save1", null);
                __decorate([
                    NgCommand({
                        name: 'Cancel1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DetailFormComponentViewmodel.prototype, "Cancel1", null);
                DetailFormComponentViewmodel = __decorate([
                    Injectable()
                ], DetailFormComponentViewmodel);
                return DetailFormComponentViewmodel;
            }(ViewModel));

            var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodelForm, _super);
                function DetailFormComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'code_2a2ef993_3f3b',
                        name: "{{code_2a2ef993_3f3b}}",
                        binding: 'code',
                        updateOn: 'blur',
                        defaultI18nValue: '编号',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "code", void 0);
                __decorate([
                    NgFormControl({
                        id: 'shortName_c85c7df9_03wl',
                        name: "{{shortName_c85c7df9_03wl}}",
                        binding: 'name',
                        updateOn: 'blur',
                        defaultI18nValue: '名称',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'dutyLevel_125fb816_uixh',
                        name: "{{dutyLevel_125fb816_uixh}}",
                        binding: 'dutyLevel',
                        updateOn: 'blur',
                        defaultI18nValue: '层级',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "dutyLevel", void 0);
                __decorate([
                    NgFormControl({
                        id: 'leader_a9cc51db_sy5i',
                        name: "{{leader_a9cc51db_sy5i}}",
                        binding: 'leader',
                        updateOn: 'blur',
                        defaultI18nValue: '分管领导',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "leader", void 0);
                __decorate([
                    NgFormControl({
                        id: 'owner_1659abe1_k0qx',
                        name: "{{owner_1659abe1_k0qx}}",
                        binding: 'owner',
                        updateOn: 'blur',
                        defaultI18nValue: '负责人',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "owner", void 0);
                __decorate([
                    NgFormControl({
                        id: 'area_922add7f_m7et',
                        name: "{{area_922add7f_m7et}}",
                        binding: 'area',
                        updateOn: 'blur',
                        defaultI18nValue: '国家或地区',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "area", void 0);
                __decorate([
                    NgFormControl({
                        id: 'currency_3cd5ae49_ir1e',
                        name: "{{currency_3cd5ae49_ir1e}}",
                        binding: 'currency',
                        updateOn: 'blur',
                        defaultI18nValue: '币种',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "currency", void 0);
                __decorate([
                    NgFormControl({
                        id: 'summary_30eb4bb2_w7ia',
                        name: "{{summary_30eb4bb2_w7ia}}",
                        binding: 'summary',
                        updateOn: 'blur',
                        defaultI18nValue: '摘要',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "summary", void 0);
                __decorate([
                    NgFormControl({
                        id: 'flag_38c372ff_sydv',
                        name: "{{flag_38c372ff_sydv}}",
                        binding: 'flag',
                        updateOn: 'change',
                        defaultI18nValue: '启用标识',
                    }),
                    __metadata("design:type", FormControl)
                ], DetailFormComponentViewmodelForm.prototype, "flag", void 0);
                DetailFormComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '行政组织',
                        enableValidate: true
                    }),
                    Injectable()
                ], DetailFormComponentViewmodelForm);
                return DetailFormComponentViewmodelForm;
            }(Form));

            var DetailFormComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(DetailFormComponentViewmodelUIState, _super);
                function DetailFormComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DetailFormComponentViewmodelUIState = __decorate([
                    Injectable()
                ], DetailFormComponentViewmodelUIState);
                return DetailFormComponentViewmodelUIState;
            }(UIState));

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
                    this.addTask('edit', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'edit', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Edit'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('edit', 'transit', "1==1");
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
                function Save1Handler(_EndEditService1, _ValidationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
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
                    this.addTask('transit', function (context) {
                        var args = [
                            'Save'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'validateCurrentRow', "1==1");
                    this.addLink('validateCurrentRow', 'save', "1==1");
                    this.addLink('save', 'update', "1==1");
                    this.addLink('update', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                Save1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Save1'
                    }),
                    __metadata("design:paramtypes", [EndEditService,
                        ValidationService,
                        CardDataService,
                        StateMachineService])
                ], Save1Handler);
                return Save1Handler;
            }(CommandHandler));

            var Cancel1Handler = /** @class */ (function (_super) {
                __extends(Cancel1Handler, _super);
                function Cancel1Handler(_EndEditService1, _ValidationService1, _TreeDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
                    _this._TreeDataService1 = _TreeDataService1;
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
                        return _this.invoke(_this._TreeDataService1, 'cancel', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            'Cancel'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'cancel', "1==1");
                    this.addLink('cancel', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                Cancel1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Cancel1'
                    }),
                    __metadata("design:paramtypes", [EndEditService,
                        ValidationService,
                        TreeDataService,
                        StateMachineService])
                ], Cancel1Handler);
                return Cancel1Handler;
            }(CommandHandler));

            var DetailFormComponent = /** @class */ (function (_super) {
                __extends(DetailFormComponent, _super);
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
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DetailFormComponent.prototype, "cls", void 0);
                DetailFormComponent = __decorate([
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
                    __metadata("design:paramtypes", [WizardService,
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

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$2 = (createTranslateLoader$1), ɵ1$1 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$1 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var OrganizationFormModule = /** @class */ (function () {
                function OrganizationFormModule(trans) {
                    this.trans = trans;
                }
                OrganizationFormModule = __decorate([
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
                            TreeGridComponent,
                            DetailFormComponent
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
                                    useFactory: ɵ0$2,
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
                            OrganizationFormRoutingModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$1 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/apporder/df/web/bo-organization-front/organizationform/' },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ2$1 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], OrganizationFormModule);
                return OrganizationFormModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/apporder/df/web/bo-organization-front/organizationform/i18n/', '.json');
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
            var styles_TreeGridComponent = [styles$1];
            var RenderType_TreeGridComponent = ɵcrt({ encapsulation: 0, styles: styles_TreeGridComponent, data: {} });
            function View_TreeGridComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 6, "farris-treetable", [["class", "f-component-treetable"], ["farrisHierarchyInfoKey", "treeInfo"], ["farrisTreeTableBinding", ""], ["farrisTreeTableFormat", ""], ["id", "treeGrid"], ["treetableRef", ""]], null, [[null, "nodeSelected"], ["window", "resize"], [null, "checkValuesChange"], [null, "expand"], [null, "pageChanged"], [null, "pageSizeChanged"], [null, "childsPageChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:resize" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onResized() !== false);
                    ad = (pd_0 && ad);
                } if (("nodeSelected" === en)) {
                    var pd_1 = (ɵnov(_v, 4).selectionChangeHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("checkValuesChange" === en)) {
                    var pd_2 = (ɵnov(_v, 4).checkValuesChange($event) !== false);
                    ad = (pd_2 && ad);
                } if (("expand" === en)) {
                    var pd_3 = (ɵnov(_v, 4).expandHandler($event) !== false);
                    ad = (pd_3 && ad);
                } if (("pageChanged" === en)) {
                    var pd_4 = (ɵnov(_v, 4).onPageChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 4).onPageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("childsPageChanged" === en)) {
                    var pd_6 = (ɵnov(_v, 4).onNodePageChanged($event) !== false);
                    ad = (pd_6 && ad);
                } if (("nodeSelected" === en)) {
                    var pd_7 = (_co.viewModel.LoadCard1($event) !== false);
                    ad = (pd_7 && ad);
                } return ad; }, View_TreeTableComponent_0, RenderType_TreeTableComponent)), ɵdid(1, 14401536, null, 2, TreeTableComponent, [TreetableService, ElementRef, ResizeService, Renderer2, CommonUtils, ColumnFormatService, TTHotkeys, ChangeDetectorRef, NgZone, Injector], { headerWrap: [0, "headerWrap"], columns: [1, "columns"], fitColumns: [2, "fitColumns"], multiSelect: [3, "multiSelect"], showCheckbox: [4, "showCheckbox"], idField: [5, "idField"], showBorder: [6, "showBorder"], showCheckAll: [7, "showCheckAll"], showHeader: [8, "showHeader"], striped: [9, "striped"], disabled: [10, "disabled"], fixedHeader: [11, "fixedHeader"], checkOnSelect: [12, "checkOnSelect"], selectOnCheck: [13, "selectOnCheck"], onlySelectSelf: [14, "onlySelectSelf"], fit: [15, "fit"], cascadeCheck: [16, "cascadeCheck"], cascadeDown: [17, "cascadeDown"], cascadeUp: [18, "cascadeUp"], keepSelect: [19, "keepSelect"], virtualized: [20, "virtualized"], showIcon: [21, "showIcon"], useIconFromData: [22, "useIconFromData"], remoteSort: [23, "remoteSort"], nowrap: [24, "nowrap"], paginationForChildren: [25, "paginationForChildren"], showGotoInput: [26, "showGotoInput"], autoWidth: [27, "autoWidth"] }, { checkValuesChange: "checkValuesChange", pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", nodeSelected: "nodeSelected", expand: "expand", childsPageChanged: "childsPageChanged" }), ɵqud(603979776, 8, { templates: 1 }), ɵqud(603979776, 9, { columnsRef: 1 }), ɵdid(4, 606208, null, 0, FarrisTreeTableBindingDirective, [TreeTableComponent, FarrisTreetableFormatService, FrameContext], { hierarchyInfoKey: [0, "hierarchyInfoKey"] }, null), ɵdid(5, 16384, null, 0, FarrisTreeTableFormatDirective, [], null, null), ɵdid(6, 4407296, null, 0, TreetableComponentRefDirective, [Injector, TreeTableComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = false; var currVal_1 = _co.treeGridColumns; var currVal_2 = true; var currVal_3 = false; var currVal_4 = false; var currVal_5 = "id"; var currVal_6 = false; var currVal_7 = false; var currVal_8 = true; var currVal_9 = true; var currVal_10 = _co.viewModel.stateMachine["editable"]; var currVal_11 = true; var currVal_12 = true; var currVal_13 = true; var currVal_14 = true; var currVal_15 = true; var currVal_16 = true; var currVal_17 = true; var currVal_18 = true; var currVal_19 = true; var currVal_20 = false; var currVal_21 = false; var currVal_22 = false; var currVal_23 = false; var currVal_24 = true; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27]); var currVal_28 = "treeInfo"; _ck(_v, 4, 0, currVal_28); _ck(_v, 6, 0); }, null); }
            function View_TreeGridComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-treegrid f-section-in-nav"], ["id", "tree-grid-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 1, { headerDirective: 0 }), ɵqud(335544320, 2, { headerTitleDirective: 0 }), ɵqud(335544320, 3, { headerContentDirective: 0 }), ɵqud(335544320, 4, { headerToolbarDirective: 0 }), ɵqud(335544320, 5, { extendDirective: 0 }), ɵqud(335544320, 6, { contentDirective: 0 }), ɵqud(335544320, 7, { viewChangeDirective: 0 }), ɵdid(9, 4407296, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_TreeGridComponent_2)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiontreegridsectionMainTitle; var currVal_7 = _co.SectiontreegridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = true; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatusCls; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_TreeGridComponent_0(_l) { return ɵvid(0, [(_l()(), ɵand(16777216, null, null, 1, null, View_TreeGridComponent_1)), ɵdid(1, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 1, 0, currVal_0); }, null); }
            function View_TreeGridComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 81, "app-treegridcomponent", [], [[8, "className", 0]], null, null, View_TreeGridComponent_0, RenderType_TreeGridComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, ViewModel, TreeGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1) { return [new LoadTree1Handler(p0_0, p0_1), new LoadCard1Handler(p1_0, p1_1), new AddSibling1Handler(p2_0, p2_1), new AddChild1Handler(p3_0, p3_1), new Remove1Handler(p4_0, p4_1)]; }, [NavigationMiddlewareService, TreeDataService, PaginationService, CardDataService, TreeDataService, StateMachineService, TreeDataService, StateMachineService, DataGridService, TreeDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, TreeGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, TreeGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [OrganizationRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(78, 4440064, null, 0, TreeGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "tree-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 78, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 78).cls; _ck(_v, 0, 0, currVal_0); }); }
            var TreeGridComponentNgFactory = ɵccf("app-treegridcomponent", TreeGridComponent, View_TreeGridComponent_Host_0, {}, {}, []);

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
            var styles_DetailFormComponent = [styles$2];
            var RenderType_DetailFormComponent = ɵcrt({ encapsulation: 0, styles: styles_DetailFormComponent, data: {} });
            function View_DetailFormComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "code"], ["id", "code_2a2ef993_3f3b"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "code"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/code_2a2ef993_3f3b/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "code"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "code"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "code_2a2ef993_3f3b"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_4)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_5)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_6)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("code"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "code_2a2ef993_3f3b", _co.lang, "\u7F16\u53F7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "code_2a2ef993_3f3b", _co.lang, "\u7F16\u53F7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "name"], ["id", "shortName_c85c7df9_03wl"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "name"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/shortName_c85c7df9_03wl/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "name"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "shortName_c85c7df9_03wl"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_8)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_9)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_10)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "shortName_c85c7df9_03wl", _co.lang, "\u540D\u79F0")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "shortName_c85c7df9_03wl", _co.lang, "\u540D\u79F0")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_13(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-combo-list", [["comboListRef", ""], ["formControlName", "dutyLevel"], ["id", "dutyLevel_125fb816_uixh"], ["input-end-edit", ""]], [[2, "f-combo-list", null], [2, "f-combo-list--tag", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
                    var pd_0 = (ɵnov(_v, 2).registerKeyboardEvent($event) !== false);
                    ad = (pd_0 && ad);
                } if (("keydown.esc" === en)) {
                    var pd_1 = (ɵnov(_v, 2).escHandlerEvent($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_ComboListComponent_0, RenderType_ComboListComponent)), ɵprd(512, null, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵdid(2, 4964352, null, 0, ComboListComponent, [ElementRef, ChangeDetectorRef, DOCUMENT, Renderer2, ComboService, Injector], { disabled: [0, "disabled"], readonly: [1, "readonly"], editable: [2, "editable"], placeholder: [3, "placeholder"], autoWidth: [4, "autoWidth"], enableClear: [5, "enableClear"], nosearch: [6, "nosearch"], data: [7, "data"], idField: [8, "idField"], valueField: [9, "valueField"], textField: [10, "textField"], multiSelect: [11, "multiSelect"], enableCancelSelected: [12, "enableCancelSelected"] }, null), ɵppd(3, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [ComboListComponent]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"], isDisabled: [1, "isDisabled"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4407296, null, 0, ComboListComponentRefDirective, [Injector, ComboListComponent, ElementRef, FrameContext], null, null), ɵdid(10, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = false; var currVal_10 = !_co.viewModel.stateMachine["editable"]; var currVal_11 = false; var currVal_12 = ɵinlineInterpolate(1, "", ɵunv(_v, 2, 3, _ck(_v, 3, 0, ɵnov(_v.parent.parent.parent.parent, 0), "EnumField/dutyLevel_125fb816_uixh/placeHolder", _co.lang, "")), ""); var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = _co.dutyLevel_125fb816_uixhEnumData; var currVal_17 = "value"; var currVal_18 = "value"; var currVal_19 = "name"; var currVal_20 = false; var currVal_21 = false; _ck(_v, 2, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_22 = "dutyLevel"; var currVal_23 = false; _ck(_v, 5, 0, currVal_22, currVal_23); _ck(_v, 8, 0); _ck(_v, 9, 0); var currVal_24 = 0; _ck(_v, 10, 0, currVal_24); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 2).cls; var currVal_1 = ɵnov(_v, 2).clsTag; var currVal_2 = ɵnov(_v, 7).ngClassUntouched; var currVal_3 = ɵnov(_v, 7).ngClassTouched; var currVal_4 = ɵnov(_v, 7).ngClassPristine; var currVal_5 = ɵnov(_v, 7).ngClassDirty; var currVal_6 = ɵnov(_v, 7).ngClassValid; var currVal_7 = ɵnov(_v, 7).ngClassInvalid; var currVal_8 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
            function View_DetailFormComponent_14(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "dutyLevel"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"], data: [2, "data"], textField: [3, "textField"], valueField: [4, "valueField"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = false; var currVal_9 = "enum"; var currVal_10 = _co.dutyLevel_125fb816_uixhEnumData; var currVal_11 = "name"; var currVal_12 = "value"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = "dutyLevel"; _ck(_v, 3, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "dutyLevel_125fb816_uixh"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_12)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_13)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_14)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("dutyLevel"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "dutyLevel_125fb816_uixh", _co.lang, "\u5C42\u7EA7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "dutyLevel_125fb816_uixh", _co.lang, "\u5C42\u7EA7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_16(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_17(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "leader"], ["id", "leader_a9cc51db_sy5i"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "leader"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/leader_a9cc51db_sy5i/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_18(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "leader"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "leader"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_15(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "leader_a9cc51db_sy5i"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_16)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_17)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_18)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("leader"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "leader_a9cc51db_sy5i", _co.lang, "\u5206\u7BA1\u9886\u5BFC")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "leader_a9cc51db_sy5i", _co.lang, "\u5206\u7BA1\u9886\u5BFC")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_20(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_21(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "owner"], ["id", "owner_1659abe1_k0qx"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "owner"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/owner_1659abe1_k0qx/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_22(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "owner"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "owner"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_19(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "owner_1659abe1_k0qx"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_20)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_21)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_22)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("owner"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "owner_1659abe1_k0qx", _co.lang, "\u8D1F\u8D23\u4EBA")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "owner_1659abe1_k0qx", _co.lang, "\u8D1F\u8D23\u4EBA")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_24(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_25(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "area"], ["id", "area_922add7f_m7et"], ["input-end-edit", ""], ["maxlength", "255"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "255"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "area"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/area_922add7f_m7et/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_26(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "area"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "area"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_23(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "area_922add7f_m7et"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_24)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_25)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_26)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("area"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "area_922add7f_m7et", _co.lang, "\u56FD\u5BB6\u6216\u5730\u533A")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "area_922add7f_m7et", _co.lang, "\u56FD\u5BB6\u6216\u5730\u533A")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_28(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_29(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-combo-list", [["comboListRef", ""], ["formControlName", "currency"], ["id", "currency_3cd5ae49_ir1e"], ["input-end-edit", ""]], [[2, "f-combo-list", null], [2, "f-combo-list--tag", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
                    var pd_0 = (ɵnov(_v, 2).registerKeyboardEvent($event) !== false);
                    ad = (pd_0 && ad);
                } if (("keydown.esc" === en)) {
                    var pd_1 = (ɵnov(_v, 2).escHandlerEvent($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_ComboListComponent_0, RenderType_ComboListComponent)), ɵprd(512, null, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵdid(2, 4964352, null, 0, ComboListComponent, [ElementRef, ChangeDetectorRef, DOCUMENT, Renderer2, ComboService, Injector], { disabled: [0, "disabled"], readonly: [1, "readonly"], editable: [2, "editable"], placeholder: [3, "placeholder"], autoWidth: [4, "autoWidth"], enableClear: [5, "enableClear"], nosearch: [6, "nosearch"], data: [7, "data"], idField: [8, "idField"], valueField: [9, "valueField"], textField: [10, "textField"], multiSelect: [11, "multiSelect"], enableCancelSelected: [12, "enableCancelSelected"] }, null), ɵppd(3, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [ComboListComponent]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"], isDisabled: [1, "isDisabled"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4407296, null, 0, ComboListComponentRefDirective, [Injector, ComboListComponent, ElementRef, FrameContext], null, null), ɵdid(10, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = false; var currVal_10 = !_co.viewModel.stateMachine["editable"]; var currVal_11 = false; var currVal_12 = ɵinlineInterpolate(1, "", ɵunv(_v, 2, 3, _ck(_v, 3, 0, ɵnov(_v.parent.parent.parent.parent, 0), "EnumField/currency_3cd5ae49_ir1e/placeHolder", _co.lang, "")), ""); var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = _co.currency_3cd5ae49_ir1eEnumData; var currVal_17 = "value"; var currVal_18 = "value"; var currVal_19 = "name"; var currVal_20 = false; var currVal_21 = false; _ck(_v, 2, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_22 = "currency"; var currVal_23 = false; _ck(_v, 5, 0, currVal_22, currVal_23); _ck(_v, 8, 0); _ck(_v, 9, 0); var currVal_24 = 0; _ck(_v, 10, 0, currVal_24); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 2).cls; var currVal_1 = ɵnov(_v, 2).clsTag; var currVal_2 = ɵnov(_v, 7).ngClassUntouched; var currVal_3 = ɵnov(_v, 7).ngClassTouched; var currVal_4 = ɵnov(_v, 7).ngClassPristine; var currVal_5 = ɵnov(_v, 7).ngClassDirty; var currVal_6 = ɵnov(_v, 7).ngClassValid; var currVal_7 = ɵnov(_v, 7).ngClassInvalid; var currVal_8 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
            function View_DetailFormComponent_30(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "currency"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"], data: [2, "data"], textField: [3, "textField"], valueField: [4, "valueField"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = false; var currVal_9 = "enum"; var currVal_10 = _co.currency_3cd5ae49_ir1eEnumData; var currVal_11 = "name"; var currVal_12 = "value"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = "currency"; _ck(_v, 3, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_27(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "currency_3cd5ae49_ir1e"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_28)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_29)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_30)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("currency"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "currency_3cd5ae49_ir1e", _co.lang, "\u5E01\u79CD")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "currency_3cd5ae49_ir1e", _co.lang, "\u5E01\u79CD")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_32(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_33(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "summary"], ["id", "summary_30eb4bb2_w7ia"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
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
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "summary"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent, 0), "TextBox/summary_30eb4bb2_w7ia/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_DetailFormComponent_34(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "summary"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "summary"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_31(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "summary_30eb4bb2_w7ia"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_32)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_33)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_34)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("summary"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "summary_30eb4bb2_w7ia", _co.lang, "\u6458\u8981")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "summary_30eb4bb2_w7ia", _co.lang, "\u6458\u8981")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_DetailFormComponent_36(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_DetailFormComponent_37(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "label", [["class", "custom-control-label"]], null, null, null, null, null)), (_l()(), ɵted(1, null, ["", ""])), ɵppd(2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 1, 0, _ck(_v, 2, 0, ɵnov(_v.parent.parent.parent.parent, 0), "flag_38c372ff_sydv", _co.lang, "\u542F\u7528\u6807\u8BC6")); _ck(_v, 1, 0, currVal_0); }); }
            function View_DetailFormComponent_38(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "label", [["class", "custom-control-label"], ["for", "flag_38c372ff_sydv"]], null, null, null, null, null)), (_l()(), ɵted(1, null, ["", ""])), ɵppd(2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 1, 0, _ck(_v, 2, 0, ɵnov(_v.parent.parent.parent.parent, 0), "flag_38c372ff_sydv", _co.lang, "\u542F\u7528\u6807\u8BC6")); _ck(_v, 1, 0, currVal_0); }); }
            function View_DetailFormComponent_35(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 24, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 23, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 22, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 3, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), ɵeld(6, 0, null, null, 0, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_36)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 15, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(10, 0, null, null, 14, "div", [["class", "custom-control custom-checkbox"]], null, null, null, null, null)), ɵdid(11, 16384, null, 0, NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), ɵeld(12, 0, null, null, 6, "input", [["class", "custom-control-input"], ["formControlName", "flag"], ["id", "flag_38c372ff_sydv"], ["input-end-edit", ""], ["tabindex", "-1"], ["type", "checkbox"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
                    var pd_0 = (ɵnov(_v, 13).onChange($event.target.checked) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 13).onTouched() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(13, 16384, null, 0, CheckboxControlValueAccessor, [Renderer2, ElementRef], null, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [CheckboxControlValueAccessor]), ɵdid(15, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(17, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(18, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_37)), ɵdid(20, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_38)), ɵdid(22, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵeld(23, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(24, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = false; _ck(_v, 8, 0, currVal_2); var currVal_3 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 11, 0, currVal_3); var currVal_12 = "flag"; _ck(_v, 15, 0, currVal_12); _ck(_v, 18, 0); var currVal_13 = true; _ck(_v, 20, 0, currVal_13); var currVal_14 = false; _ck(_v, 22, 0, currVal_14); var currVal_16 = _co.viewModel.form.getCardControlErrors("flag"); _ck(_v, 24, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = !_co.viewModel.stateMachine["editable"]; var currVal_5 = ɵnov(_v, 17).ngClassUntouched; var currVal_6 = ɵnov(_v, 17).ngClassTouched; var currVal_7 = ɵnov(_v, 17).ngClassPristine; var currVal_8 = ɵnov(_v, 17).ngClassDirty; var currVal_9 = ɵnov(_v, 17).ngClassValid; var currVal_10 = ɵnov(_v, 17).ngClassInvalid; var currVal_11 = ɵnov(_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_15 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 23, 0, currVal_15); }); }
            function View_DetailFormComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 21, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "detail-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_3)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_7)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_11)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_15)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_19)), ɵdid(13, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_23)), ɵdid(15, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_27)), ɵdid(17, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_31)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_35)), ɵdid(21, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.viewModel.form; _ck(_v, 1, 0, currVal_8); var currVal_9 = true; _ck(_v, 5, 0, currVal_9); var currVal_10 = true; _ck(_v, 7, 0, currVal_10); var currVal_11 = true; _ck(_v, 9, 0, currVal_11); var currVal_12 = true; _ck(_v, 11, 0, currVal_12); var currVal_13 = true; _ck(_v, 13, 0, currVal_13); var currVal_14 = true; _ck(_v, 15, 0, currVal_14); var currVal_15 = true; _ck(_v, 17, 0, currVal_15); var currVal_16 = true; _ck(_v, 19, 0, currVal_16); var currVal_17 = true; _ck(_v, 21, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.lang === "zh-CHS") || (_co.lang === "zh-CHT")); var currVal_1 = ɵnov(_v, 3).ngClassUntouched; var currVal_2 = ɵnov(_v, 3).ngClassTouched; var currVal_3 = ɵnov(_v, 3).ngClassPristine; var currVal_4 = ɵnov(_v, 3).ngClassDirty; var currVal_5 = ɵnov(_v, 3).ngClassValid; var currVal_6 = ɵnov(_v, 3).ngClassInvalid; var currVal_7 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_DetailFormComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-form f-section-in-main"], ["id", "detail-form-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], fill: [4, "fill"], expandStatus: [5, "expandStatus"], index: [6, "index"] }, null), ɵqud(335544320, 1, { headerDirective: 0 }), ɵqud(335544320, 2, { headerTitleDirective: 0 }), ɵqud(335544320, 3, { headerContentDirective: 0 }), ɵqud(335544320, 4, { headerToolbarDirective: 0 }), ɵqud(335544320, 5, { extendDirective: 0 }), ɵqud(335544320, 6, { contentDirective: 0 }), ɵqud(335544320, 7, { viewChangeDirective: 0 }), ɵdid(9, 4407296, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_DetailFormComponent_2)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondetailformsectionMainTitle; var currVal_7 = _co.SectiondetailformsectionSubTitle; var currVal_8 = true; var currVal_9 = false; var currVal_10 = false; var currVal_11 = true; var currVal_12 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); _ck(_v, 9, 0); var currVal_13 = true; _ck(_v, 11, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatusCls; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_DetailFormComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), (_l()(), ɵand(16777216, null, null, 1, null, View_DetailFormComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_DetailFormComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 81, "app-detailformcomponent", [], [[8, "className", 0]], null, null, View_DetailFormComponent_0, RenderType_DetailFormComponent)), ɵprd(4608, null, ViewModel, DetailFormComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p2_0, p2_1, p2_2, p2_3) { return [new Edit1Handler(p0_0, p0_1), new Save1Handler(p1_0, p1_1, p1_2, p1_3), new Cancel1Handler(p2_0, p2_1, p2_2, p2_3)]; }, [CardDataService, StateMachineService, EndEditService, ValidationService, CardDataService, StateMachineService, EndEditService, ValidationService, TreeDataService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, DetailFormComponentViewmodelForm, []), ɵprd(4608, null, UIState, DetailFormComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [OrganizationRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(78, 4440064, null, 0, DetailFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "detail-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 78, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 78).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DetailFormComponentNgFactory = ɵccf("app-detailformcomponent", DetailFormComponent, View_DetailFormComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-dict"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-dictionary"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 1, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u884C\u653F\u7EC4\u7EC7"]))], null, null); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_3)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 172, "div", [["class", "f-page-main"], ["id", "main-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 171, "farris-splitter", [["class", "f-page-content"], ["id", "content-splitter"]], [[2, "f-component-splitter", null]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵdid(2, 5357568, null, 1, SplitterComponent, [ComponentFactoryResolver, Injector, Renderer2, ElementRef], null, null), ɵqud(603979776, 1, { pane: 1 }), (_l()(), ɵeld(4, 0, null, 0, 84, "farris-splitter-pane", [["class", "f-col-w6 f-page-content-nav"], ["ngResizable", ""]], [[2, "f-component-splitter-pane", null]], [[null, "rzResizing"], [null, "rzStart"], [null, "rzStop"]], function (_v, en, $event) { var ad = true; if (("rzResizing" === en)) {
                    var pd_0 = (ɵnov(_v, 6).onRZResizing($event) !== false);
                    ad = (pd_0 && ad);
                } if (("rzStart" === en)) {
                    var pd_1 = (ɵnov(_v, 6).onRZStart($event) !== false);
                    ad = (pd_1 && ad);
                } if (("rzStop" === en)) {
                    var pd_2 = (ɵnov(_v, 6).onRZStop($event) !== false);
                    ad = (pd_2 && ad);
                } return ad; }, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(5, 4931584, null, 0, AngularResizableDirective, [ElementRef, Renderer2], { ngResizable: [0, "ngResizable"], rzHandles: [1, "rzHandles"] }, { rzStart: "rzStart", rzResizing: "rzResizing", rzStop: "rzStop" }), ɵdid(6, 4440064, [[1, 4]], 0, SplitterPaneComponent, [ElementRef, Renderer2], null, null), (_l()(), ɵeld(7, 0, null, 0, 81, "app-treegridcomponent", [], [[8, "className", 0]], null, null, View_TreeGridComponent_0, RenderType_TreeGridComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, ViewModel, TreeGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1) { return [new LoadTree1Handler(p0_0, p0_1), new LoadCard1Handler(p1_0, p1_1), new AddSibling1Handler(p2_0, p2_1), new AddChild1Handler(p3_0, p3_1), new Remove1Handler(p4_0, p4_1)]; }, [NavigationMiddlewareService, TreeDataService, PaginationService, CardDataService, TreeDataService, StateMachineService, TreeDataService, StateMachineService, DataGridService, TreeDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, TreeGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, TreeGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [OrganizationRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(85, 4440064, null, 0, TreeGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "tree-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ɵeld(89, 0, null, 0, 83, "farris-splitter-pane", [["class", "f-page-content-main"]], [[2, "f-component-splitter-pane", null]], [[null, "rzResizing"], [null, "rzStart"], [null, "rzStop"]], function (_v, en, $event) { var ad = true; if (("rzResizing" === en)) {
                    var pd_0 = (ɵnov(_v, 90).onRZResizing($event) !== false);
                    ad = (pd_0 && ad);
                } if (("rzStart" === en)) {
                    var pd_1 = (ɵnov(_v, 90).onRZStart($event) !== false);
                    ad = (pd_1 && ad);
                } if (("rzStop" === en)) {
                    var pd_2 = (ɵnov(_v, 90).onRZStop($event) !== false);
                    ad = (pd_2 && ad);
                } return ad; }, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(90, 4440064, [[1, 4]], 0, SplitterPaneComponent, [ElementRef, Renderer2], null, null), (_l()(), ɵeld(91, 0, null, 0, 81, "app-detailformcomponent", [], [[8, "className", 0]], null, null, View_DetailFormComponent_0, RenderType_DetailFormComponent)), ɵprd(4608, null, ViewModel, DetailFormComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p2_0, p2_1, p2_2, p2_3) { return [new Edit1Handler(p0_0, p0_1), new Save1Handler(p1_0, p1_1, p1_2, p1_3), new Cancel1Handler(p2_0, p2_1, p2_2, p2_3)]; }, [CardDataService, StateMachineService, EndEditService, ValidationService, CardDataService, StateMachineService, EndEditService, ValidationService, TreeDataService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, DetailFormComponentViewmodelForm, []), ɵprd(4608, null, UIState, DetailFormComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [OrganizationRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(169, 4440064, null, 0, DetailFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "detail-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 2, 0); var currVal_2 = ""; var currVal_3 = "e"; _ck(_v, 5, 0, currVal_2, currVal_3); _ck(_v, 6, 0); _ck(_v, 85, 0); _ck(_v, 90, 0); _ck(_v, 169, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 2).splitterCls; _ck(_v, 1, 0, currVal_0); var currVal_1 = ɵnov(_v, 6).klass; _ck(_v, 4, 0, currVal_1); var currVal_4 = ɵnov(_v, 85).cls; _ck(_v, 7, 0, currVal_4); var currVal_5 = ɵnov(_v, 90).klass; _ck(_v, 89, 0, currVal_5); var currVal_6 = ɵnov(_v, 169).cls; _ck(_v, 91, 0, currVal_6); }); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "div", [["class", "f-page f-page-navigate f-page-is-tree-card"], ["id", "root-layout"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.viewModel.form; _ck(_v, 1, 0, currVal_7); var currVal_8 = true; _ck(_v, 5, 0, currVal_8); var currVal_9 = true; _ck(_v, 7, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).ngClassUntouched; var currVal_1 = ɵnov(_v, 3).ngClassTouched; var currVal_2 = ɵnov(_v, 3).ngClassPristine; var currVal_3 = ɵnov(_v, 3).ngClassDirty; var currVal_4 = ɵnov(_v, 3).ngClassValid; var currVal_5 = ɵnov(_v, 3).ngClassInvalid; var currVal_6 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
            function View_RootComponent_0(_l) { return ɵvid(0, [(_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(1, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 1, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 117, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(135680, null, OrganizationRepository, OrganizationRepository, [Injector]), ɵprd(6144, null, Repository, null, [OrganizationRepository]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, ComponentManagerService, ComponentManagerService, []), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService, UploadService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, OrganizationProxy, OrganizationProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, WEBAPI_PREFIX_TOKEN, ɵ0$1, [GSPFrameworkCommonService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(111, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, ENABLE_SERVER_SIDE_CHANGE_DETECTION_TOKEN, false, []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "c346a17f-8b51-444c-b2aa-eee292edb491", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", [])], function (_ck, _v) { _ck(_v, 111, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 111).cls; _ck(_v, 0, 0, currVal_0); }); }
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
            var OrganizationFormModuleNgFactory = exports('OrganizationFormModuleNgFactory', ɵcmf(OrganizationFormModule, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, SingleListComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, SearchPanelComponentNgFactory, SearchFieldPanelComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, LookupAdvancedLayoutComponentNgFactory, LookupFilterBarComponentNgFactory, FilterPanelComponentNgFactory, NgbTooltipWindowNgFactory, ɵaNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, NewHeaderFormComponentNgFactory, SetColumnsComponentNgFactory, PreviewMultiHeadersComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, OverLayHiddenService, OverLayHiddenService, []), ɵmpd(4608, DialogService$1, DialogService$1, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa$1, ɵa$1, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$1, ɵc$1, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$1, FilterService$1, []), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, SolutionService, SolutionService, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, BasePathService, BasePathService, []), ɵmpd(4608, GSPFrameworkCommonService, GSPFrameworkCommonService, []), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$2, NavigationService$2, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, UploadService, UploadService, [HttpService, HttpClient]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService$1, SolutionService$1, [NotifyService]), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, StateService, StateService, [NotifyService, LocaleService]), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ViewChangeService, ViewChangeService, []), ɵmpd(4608, ViewChangeManageService, ViewChangeManageService, []), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService, [2, Injector]]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService], [2, Injector]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService], [2, Injector]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ2$1, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf, ɵf, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SearchBoxModule, SearchBoxModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, FarrisRTFModule, FarrisRTFModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, OrganizationFormRoutingModule, OrganizationFormRoutingModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$2, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, OrganizationFormModule, OrganizationFormModule, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$1, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(256, TabConfig, undefined, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$3, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/apporder/df/web/bo-organization-front/organizationform/", [])]); }));

        }
    };
});
