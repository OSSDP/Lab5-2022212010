import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LangPipe } from './app.component';
import { HtmlTemplatepage_header_titleHtml } from './app.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
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
}());
export { AppModule };
