import * as tslib_1 from "tslib";
import { Pipe, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { BasePathService } from '@farris/rtf';
export function createTranslateLoader(http, version) {
    var versionSuffix = "";
    if (version) {
        versionSuffix = "?v=" + version;
    }
    return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/employcard11/i18n/'), '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/filterText": "筛选", "QueryScheme/query-scheme-1/e793c221-c461-43d0-a89c-ed3d4aa890e2": "主键", "QueryScheme/query-scheme-1/e793c221-c461-43d0-a89c-ed3d4aa890e2/placeHolder": "", "QueryScheme/query-scheme-1/9eb823f7-a566-40cd-a685-24caa8401d76": "版本", "QueryScheme/query-scheme-1/9eb823f7-a566-40cd-a685-24caa8401d76/placeHolder": "", "QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91": "编号", "QueryScheme/query-scheme-1/60bea67e-f72a-43ad-af7d-2468028d5c91/placeHolder": "", "QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2": "名称", "QueryScheme/query-scheme-1/316a9d3c-bb76-4046-8b32-5fd16cfe41e2/placeHolder": "", "QueryScheme/query-scheme-1/f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10": "备注", "QueryScheme/query-scheme-1/f1b6442a-fa3a-45cc-8f9d-bf4b6d0c0d10/placeHolder": "", "QueryScheme/query-scheme-1/3a5365bd-e608-4e44-b138-df32027577f5": "状态", "QueryScheme/query-scheme-1/3a5365bd-e608-4e44-b138-df32027577f5/placeHolder": "", "QueryScheme/query-scheme-1/e473ce45-685c-47ce-8c1e-e57269039ab8": "组织", "QueryScheme/query-scheme-1/e473ce45-685c-47ce-8c1e-e57269039ab8/placeHolder": "", "QueryScheme/query-scheme-1/58fd9314-f103-44e3-ab45-5d8b5400c8f5": "性别", "QueryScheme/query-scheme-1/58fd9314-f103-44e3-ab45-5d8b5400c8f5/placeHolder": "", "QueryScheme/query-scheme-1/d74fa6c7-e51b-4678-b308-6c6d49adc446": "所属国家或地区", "QueryScheme/query-scheme-1/d74fa6c7-e51b-4678-b308-6c6d49adc446/placeHolder": "", "QueryScheme/query-scheme-1/38a3f824-a04a-4fbe-b99c-df6b721a3239": "常驻地", "QueryScheme/query-scheme-1/38a3f824-a04a-4fbe-b99c-df6b721a3239/placeHolder": "", "QueryScheme/query-scheme-1/fe7c6d11-15ce-496a-b182-7244c051eca7": "职级", "QueryScheme/query-scheme-1/fe7c6d11-15ce-496a-b182-7244c051eca7/placeHolder": "", "QueryScheme/query-scheme-1/13aa1e37-647e-4318-81c9-70f03ffdc334": "人员类别", "QueryScheme/query-scheme-1/13aa1e37-647e-4318-81c9-70f03ffdc334/placeHolder": "", "QueryScheme/query-scheme-1/cf08e0f6-9f84-48fd-9096-df45d9b929d4": "显示姓名", "QueryScheme/query-scheme-1/cf08e0f6-9f84-48fd-9096-df45d9b929d4/placeHolder": "", "QueryScheme/query-scheme-1/03cb4977-efe7-4229-9dfa-a98f33a5c18c": "联系电话", "QueryScheme/query-scheme-1/03cb4977-efe7-4229-9dfa-a98f33a5c18c/placeHolder": "", "QueryScheme/query-scheme-1/fb560c3d-00b1-4021-a52d-717ef9cfd0f0": "密级", "QueryScheme/query-scheme-1/fb560c3d-00b1-4021-a52d-717ef9cfd0f0/placeHolder": "", "QueryScheme/query-scheme-1/ca7ab15d-af8f-41c9-8fed-377471d36f31": "邮箱", "QueryScheme/query-scheme-1/ca7ab15d-af8f-41c9-8fed-377471d36f31/placeHolder": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "111", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "id_e793c221_1nzc": "主键", "version_9eb823f7_sasv": "版本", "code_60bea67e_49il": "编号", "name_316a9d3c_4tqx": "名称", "remark_f1b6442a_yhbi": "备注", "state_3a5365bd_kvai": "状态", "organization_e473ce45_t1cl": "组织", "gender_58fd9314_3uve": "性别", "countryOrArea_d74fa6c7_uuzf": "所属国家或地区", "location_38a3f824_lq1v": "常驻地", "postID_fe7c6d11_pzus": "职级", "category_13aa1e37_gpkh": "人员类别", "displayName_cf08e0f6_f64n": "显示姓名", "telephone_03cb4977_ilcq": "联系电话", "secret_fb560c3d_r80g": "密级", "mailbox_ca7ab15d_acak": "邮箱" } };
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
    LangPipe = tslib_1.__decorate([
        Pipe({ name: 'lang' }),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], LangPipe);
    return LangPipe;
}());
export { LangPipe };
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
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
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
    LangService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService])
    ], LangService);
    return LangService;
}());
export { LangService };
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
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
