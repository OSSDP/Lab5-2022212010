/*! UPDATE TIME: 2024/11/8 21:58:03 */
System.register(['tslib', '@angular/common', '@angular/core'], function (exports, module) {
    'use strict';
    var __decorate, __metadata, CommonModule, Pipe, Injector, Component, NgModule;
    return {
        setters: [function (module) {
            __decorate = module.__decorate;
            __metadata = module.__metadata;
        }, function (module) {
            CommonModule = module.CommonModule;
        }, function (module) {
            Pipe = module.Pipe;
            Injector = module.Injector;
            Component = module.Component;
            NgModule = module.NgModule;
        }],
        execute: function () {

            var LangPipe = /** @class */ (function () {
                function LangPipe(injector) {
                    this.injector = injector;
                }
                LangPipe.prototype.transform = function (key, langCode, defaultValue) {
                    return defaultValue;
                };
                LangPipe = __decorate([
                    Pipe({ name: 'lang' }),
                    __metadata("design:paramtypes", [Injector])
                ], LangPipe);
                return LangPipe;
            }());
            /**
             * page-header-titleHtml
             */
            var HtmlTemplatepage_header_titleHtml = /** @class */ (function () {
                function HtmlTemplatepage_header_titleHtml() {
                }
                HtmlTemplatepage_header_titleHtml = __decorate([
                    Component({
                        selector: 'page-header-titleHtml',
                        template: " \n<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'\u5B66\u751F'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
                    }),
                    __metadata("design:paramtypes", [])
                ], HtmlTemplatepage_header_titleHtml);
                return HtmlTemplatepage_header_titleHtml;
            }());

            var AppModule = exports('AppModule', /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    NgModule({
                        declarations: [
                            HtmlTemplatepage_header_titleHtml, LangPipe
                        ],
                        imports: [CommonModule],
                        bootstrap: [
                            HtmlTemplatepage_header_titleHtml
                        ]
                    })
                ], AppModule);
                return AppModule;
            }()));

        }
    };
});
