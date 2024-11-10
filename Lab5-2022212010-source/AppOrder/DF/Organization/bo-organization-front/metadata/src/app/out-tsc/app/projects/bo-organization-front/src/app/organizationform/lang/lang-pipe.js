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
    return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/organizationform/i18n/'), '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "TextBox/currency_3cd5ae49_ir1e/placeHolder": "", "TextBox/dutyLevel_125fb816_uixh/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "page-header-toolbar": "", "button-addSibling": "新增同级", "button-addChild": "新增子级", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "main-container": "", "content-splitter": "", "content-tree": "", "tree-grid-component-ref": "", "content-main": "", "detail-component-ref": "", "tree-grid-component": "", "tree-grid-section": "", "Section/tree-grid-section/mainTitle": "", "Section/tree-grid-section/subTitle": "", "treeGrid": "", "code_2a2ef993_kge5": "编号", "shortName_c85c7df9_fbyj": "名称", "dutyLevel_125fb816_ketd": "层级", "TreeGridField/dutyLevel_125fb816_ketd/enumData/01": "单位", "TreeGridField/dutyLevel_125fb816_ketd/enumData/02": "部门", "detail-form-component": "", "detail-form-section": "", "Section/detail-form-section/mainTitle": "基本信息", "Section/detail-form-section/subTitle": "", "detail-form-layout": "", "code_2a2ef993_3f3b": "编号", "TextBox/code_2a2ef993_3f3b/placeHolder": "", "shortName_c85c7df9_03wl": "名称", "TextBox/shortName_c85c7df9_03wl/placeHolder": "", "dutyLevel_125fb816_uixh": "层级", "EnumField/dutyLevel_125fb816_uixh/placeHolder": "", "EnumField/dutyLevel_125fb816_uixh/enumData/01": "单位", "EnumField/dutyLevel_125fb816_uixh/enumData/02": "部门", "leader_a9cc51db_sy5i": "分管领导", "TextBox/leader_a9cc51db_sy5i/placeHolder": "", "owner_1659abe1_k0qx": "负责人", "TextBox/owner_1659abe1_k0qx/placeHolder": "", "area_922add7f_m7et": "国家或地区", "TextBox/area_922add7f_m7et/placeHolder": "", "currency_3cd5ae49_ir1e": "币种", "EnumField/currency_3cd5ae49_ir1e/placeHolder": "", "EnumField/currency_3cd5ae49_ir1e/enumData/rmb": "人民币", "EnumField/currency_3cd5ae49_ir1e/enumData/dollar": "美元", "EnumField/currency_3cd5ae49_ir1e/enumData/euro": "欧元", "EnumField/currency_3cd5ae49_ir1e/enumData/yen": "日元", "EnumField/currency_3cd5ae49_ir1e/enumData/other": "其他", "summary_30eb4bb2_w7ia": "摘要", "TextBox/summary_30eb4bb2_w7ia/placeHolder": "", "flag_38c372ff_sydv": "启用标识" } };
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
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
