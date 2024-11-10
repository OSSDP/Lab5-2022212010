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
    return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/employcard/i18n/'), '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "TextBox/name_ff2e5859_wvll/placeHolder": "", "organization_a907d00a_92ml": "组织", "TextBox/organization_a907d00a_92ml/placeHolder": "", "gender_51233fb4_ha88": "性别", "TextBox/gender_51233fb4_ha88/placeHolder": "", "displayName_62f24d5d_n9s7": "显示姓名", "TextBox/displayName_62f24d5d_n9s7/placeHolder": "", "secret_0a814da7_hq3u": "密级", "TextBox/secret_0a814da7_hq3u/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "行政人员维护", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "main-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container": "", "detail-section": "", "Section/detail-section/mainTitle": "", "Section/detail-section/subTitle": "", "detail-tab": "", "jobinfo-tab-page": "工作信息", "jobinfo-component-ref": "", "jobinfo-tab-toolbar": "", "jobinfoAddButton": "新增", "jobinfoRemoveButton": "删除", "eduinfo-tab-page": "教育信息", "eduinfo-component-ref": "", "eduinfo-tab-toolbar": "", "eduinfoAddButton": "新增", "eduinfoRemoveButton": "删除", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "5eeb5876-c50b-4a70-b7ef-e3943f778315": "新增分组", "FieldSet/5eeb5876-c50b-4a70-b7ef-e3943f778315/collapseText": "", "FieldSet/5eeb5876-c50b-4a70-b7ef-e3943f778315/expandText": "", "code_ca1a3fb2_1m5u": "编号", "TextBox/code_ca1a3fb2_1m5u/placeHolder": "", "name_ff2e5859_wvll": "组织", "LookupEdit/name_ff2e5859_wvll/placeHolder": "", "LookupEdit/name_ff2e5859_wvll/dialogTitle": "", "8c768e24-31ec-470f-9262-d8813ba8bdfb": "新增分组", "FieldSet/8c768e24-31ec-470f-9262-d8813ba8bdfb/collapseText": "", "FieldSet/8c768e24-31ec-470f-9262-d8813ba8bdfb/expandText": "", "remark_d42ea20c_sj20": "备注", "TextBox/remark_d42ea20c_sj20/placeHolder": "", "countryOrArea_88fe9039_ke9g": "所属国家或地区", "TextBox/countryOrArea_88fe9039_ke9g/placeHolder": "", "location_fd499f05_bmbu": "常驻地", "TextBox/location_fd499f05_bmbu/placeHolder": "", "category_61bd7708_z4k0": "人员类别", "TextBox/category_61bd7708_z4k0/placeHolder": "", "postID_c9c53a79_k5er": "职级", "TextBox/postID_c9c53a79_k5er/placeHolder": "", "state_6b3e9bc9_40q9": "状态", "TextBox/state_6b3e9bc9_40q9/placeHolder": "", "83a86990-2592-409e-b90b-5a5ae012e751": "联系方式", "FieldSet/83a86990-2592-409e-b90b-5a5ae012e751/collapseText": "", "FieldSet/83a86990-2592-409e-b90b-5a5ae012e751/expandText": "", "mailbox_8d5f92ea_to45": "邮箱", "TextBox/mailbox_8d5f92ea_to45/placeHolder": "", "telephone_cbeb9998_ukhr": "联系电话", "TextBox/telephone_cbeb9998_ukhr/placeHolder": "", "jobinfo-component": "", "jobinfo-component-layout": "", "dataGrid_jobinfo": "", "DataGrid/dataGrid_jobinfo/lineNumberTitle": "", "DataGrid/dataGrid_jobinfo/OperateEditButton": "编辑", "DataGrid/dataGrid_jobinfo/OperateDeleteButton": "删除", "DataGrid/dataGrid_jobinfo/OperateColumn": "操作", "company_420c3a35_2gnr": "工作单位", "GridField/company_420c3a35_2gnr/editor/company_420c3a35_5vy3": "工作单位", "GridField/company_420c3a35_2gnr/editor/TextBox/company_420c3a35_5vy3/placeHolder": "", "timeInterval_c1c46d6f_edm7": "时间区间", "GridField/timeInterval_c1c46d6f_edm7/editor/timeInterval_c1c46d6f_tybt": "时间区间", "GridField/timeInterval_c1c46d6f_edm7/editor/TextBox/timeInterval_c1c46d6f_tybt/placeHolder": "", "position_c51cd3a1_v04x": "岗位", "GridField/position_c51cd3a1_v04x/editor/position_c51cd3a1_d3o9": "岗位", "GridField/position_c51cd3a1_v04x/editor/TextBox/position_c51cd3a1_d3o9/placeHolder": "", "salary_3b56eedf_okgp": "薪资", "GridField/salary_3b56eedf_okgp/editor/salary_3b56eedf_023p": "薪资", "GridField/salary_3b56eedf_okgp/formatter/trueText": "是", "GridField/salary_3b56eedf_okgp/formatter/falseText": "否", "certifier_2688290d_h8l0": "证明人", "GridField/certifier_2688290d_h8l0/editor/certifier_2688290d_36qa": "证明人", "GridField/certifier_2688290d_h8l0/editor/TextBox/certifier_2688290d_36qa/placeHolder": "", "telephone_8ff4aeca_vykt": "证明人联系方式", "GridField/telephone_8ff4aeca_vykt/editor/telephone_8ff4aeca_scfx": "证明人联系方式", "GridField/telephone_8ff4aeca_vykt/editor/TextBox/telephone_8ff4aeca_scfx/placeHolder": "", "eduinfo-component": "", "eduinfo-component-layout": "", "dataGrid_eduinfo": "", "DataGrid/dataGrid_eduinfo/lineNumberTitle": "", "DataGrid/dataGrid_eduinfo/OperateEditButton": "编辑", "DataGrid/dataGrid_eduinfo/OperateDeleteButton": "删除", "DataGrid/dataGrid_eduinfo/OperateColumn": "操作", "empolyeeID_54068d87_wp5l": "人员ID", "GridField/empolyeeID_54068d87_wp5l/editor/empolyeeID_54068d87_3ng2": "人员ID", "GridField/empolyeeID_54068d87_wp5l/editor/TextBox/empolyeeID_54068d87_3ng2/placeHolder": "", "schoolName_3100ddda_di17": "学校名称", "GridField/schoolName_3100ddda_di17/editor/schoolName_3100ddda_liee": "学校名称", "GridField/schoolName_3100ddda_di17/editor/TextBox/schoolName_3100ddda_liee/placeHolder": "", "timeInterval_556dd1d1_8rcf": "时间区间", "GridField/timeInterval_556dd1d1_8rcf/editor/timeInterval_556dd1d1_emfg": "时间区间", "GridField/timeInterval_556dd1d1_8rcf/editor/TextBox/timeInterval_556dd1d1_emfg/placeHolder": "", "studyType_2f896fda_h66a": "学习形式", "GridField/studyType_2f896fda_h66a/editor/studyType_2f896fda_6ykx": "学习形式", "GridField/studyType_2f896fda_h66a/editor/TextBox/studyType_2f896fda_6ykx/placeHolder": "", "major_5e64f7eb_fdno": "专业", "GridField/major_5e64f7eb_fdno/editor/major_5e64f7eb_zaln": "专业", "GridField/major_5e64f7eb_fdno/editor/TextBox/major_5e64f7eb_zaln/placeHolder": "", "education_f8b3b3e8_azw8": "学历", "GridField/education_f8b3b3e8_azw8/editor/education_f8b3b3e8_nuyg": "学历", "GridField/education_f8b3b3e8_azw8/editor/TextBox/education_f8b3b3e8_nuyg/placeHolder": "", "eduSystem_50d4bac9_bhm8": "学制", "GridField/eduSystem_50d4bac9_bhm8/editor/eduSystem_50d4bac9_xq7h": "学制", "GridField/eduSystem_50d4bac9_bhm8/editor/TextBox/eduSystem_50d4bac9_xq7h/placeHolder": "", "degree_304819a8_wsms": "学位", "GridField/degree_304819a8_wsms/editor/degree_304819a8_chb3": "学位", "GridField/degree_304819a8_wsms/editor/TextBox/degree_304819a8_chb3/placeHolder": "", "isFirstDegree_d1e3393b_3ncw": "是否第一学历", "GridField/isFirstDegree_d1e3393b_3ncw/editor/isFirstDegree_d1e3393b_waxw": "是否第一学历", "GridField/isFirstDegree_d1e3393b_3ncw/formatter/trueText": "是", "GridField/isFirstDegree_d1e3393b_3ncw/formatter/falseText": "否", "isHighest_290b3ac4_z4oq": "是否最高学历", "GridField/isHighest_290b3ac4_z4oq/editor/isHighest_290b3ac4_8259": "是否最高学历", "GridField/isHighest_290b3ac4_z4oq/formatter/trueText": "是", "GridField/isHighest_290b3ac4_z4oq/formatter/falseText": "否" } };
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
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
