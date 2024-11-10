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
    return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/employcard1/i18n/'), '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "111", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "main-container": "", "like-card-container": "", "basic-form-component-ref": "", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "id_bad77a08_01l0": "主键", "TextBox/id_bad77a08_01l0/placeHolder": "", "version_67ae2ffa_irq7": "版本", "DateBox/version_67ae2ffa_irq7/placeHolder": "", "code_f79cb2d9_r8ec": "编号", "TextBox/code_f79cb2d9_r8ec/placeHolder": "", "name_c44d08f4_082r": "名称", "TextBox/name_c44d08f4_082r/placeHolder": "", "remark_21ed9883_1eg7": "备注", "TextBox/remark_21ed9883_1eg7/placeHolder": "", "state_9ffaba7a_v1dw": "状态", "TextBox/state_9ffaba7a_v1dw/placeHolder": "", "organization_62270c20_lb6d": "组织", "TextBox/organization_62270c20_lb6d/placeHolder": "", "gender_429efa25_to3c": "性别", "TextBox/gender_429efa25_to3c/placeHolder": "", "countryOrArea_d6a89160_03rq": "所属国家或地区", "TextBox/countryOrArea_d6a89160_03rq/placeHolder": "", "location_508ce566_9ubr": "常驻地", "TextBox/location_508ce566_9ubr/placeHolder": "", "postID_3cfd3482_zod6": "职级", "TextBox/postID_3cfd3482_zod6/placeHolder": "", "category_c97816d4_m7ug": "人员类别", "TextBox/category_c97816d4_m7ug/placeHolder": "", "displayName_57101eee_9bw2": "显示姓名", "TextBox/displayName_57101eee_9bw2/placeHolder": "", "telephone_66c54664_nb5m": "联系电话", "TextBox/telephone_66c54664_nb5m/placeHolder": "", "secret_47662b25_581g": "密级", "TextBox/secret_47662b25_581g/placeHolder": "", "mailbox_e17ee73a_8d03": "邮箱", "TextBox/mailbox_e17ee73a_8d03/placeHolder": "" } };
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
                    var versionKey_1 = "employcard1/" + langCode + ".json";
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
