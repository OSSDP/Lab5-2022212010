import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Pipe } from '@angular/core';
var LangPipe = /** @class */ (function () {
    function LangPipe(injector) {
        this.injector = injector;
    }
    LangPipe.prototype.transform = function (key, langCode, defaultValue) {
        return defaultValue;
    };
    LangPipe = tslib_1.__decorate([
        Pipe({ name: 'lang' }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], LangPipe);
    return LangPipe;
}());
export { LangPipe };
/**
 * page-header-titleHtml
 */
var HtmlTemplatepage_header_titleHtml = /** @class */ (function () {
    function HtmlTemplatepage_header_titleHtml() {
    }
    HtmlTemplatepage_header_titleHtml = tslib_1.__decorate([
        Component({
            selector: 'page-header-titleHtml',
            template: " \n<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'Student'}}</h4>"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HtmlTemplatepage_header_titleHtml);
    return HtmlTemplatepage_header_titleHtml;
}());
export { HtmlTemplatepage_header_titleHtml };
