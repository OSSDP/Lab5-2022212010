
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
import { BasePathService } from '@farris/rtf';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/teacher/i18n/'), '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/filterText":"筛选","QueryScheme/query-scheme-1/639d2693-04b3-4336-94e3-248184d67e3e":"主键","QueryScheme/query-scheme-1/639d2693-04b3-4336-94e3-248184d67e3e/placeHolder":"","QueryScheme/query-scheme-1/b6d4bea7-4076-404c-af84-5a70c7cf9278":"版本","QueryScheme/query-scheme-1/b6d4bea7-4076-404c-af84-5a70c7cf9278/placeHolder":"","QueryScheme/query-scheme-1/e14b3b80-8ee4-4949-815f-4a7bac162052":"教师工号","QueryScheme/query-scheme-1/e14b3b80-8ee4-4949-815f-4a7bac162052/placeHolder":"","QueryScheme/query-scheme-1/c8912fac-99d5-4d1b-8e2c-b97f5bd07503":"教师姓名","QueryScheme/query-scheme-1/c8912fac-99d5-4d1b-8e2c-b97f5bd07503/placeHolder":"","QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a":"所在院系","QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/placeHolder":"","QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/cs":"计算机学院","QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/math":"数学学院","QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/Chinese":"中文学院","QueryScheme/query-scheme-1/949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a/control/enumValues/falv":"法学院","QueryScheme/query-scheme-1/dc6f345c-3c31-4feb-9921-11cace685d87":"密码","QueryScheme/query-scheme-1/dc6f345c-3c31-4feb-9921-11cace685d87/placeHolder":"","QueryScheme/query-scheme-1/d61de382-fa0f-456c-9c58-7ab52433e9b2":"邮箱","QueryScheme/query-scheme-1/d61de382-fa0f-456c-9c58-7ab52433e9b2/placeHolder":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"Teacher","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","teacher_id_e14b3b80_1rz4":"教师工号","name_c8912fac_r0fz":"教师姓名","department_949fe0ca_ttk3":"所在院系","GridField/department_949fe0ca_ttk3/enumData/cs":"计算机学院","GridField/department_949fe0ca_ttk3/enumData/math":"数学学院","GridField/department_949fe0ca_ttk3/enumData/Chinese":"中文学院","GridField/department_949fe0ca_ttk3/enumData/falv":"法学院","password_dc6f345c_vpuv":"密码","email_Email_d61de382_gryz":"邮箱"}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get(BasePathService.getBasePath() + "/apps/apporder/df/web/bo-organization-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "teacher/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
