
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
  return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/studentcourse/i18n/'), '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/filterText":"筛选","QueryScheme/query-scheme-1/a4ae23b7-fa4e-425d-8349-07ec86fd8942":"主键","QueryScheme/query-scheme-1/a4ae23b7-fa4e-425d-8349-07ec86fd8942/placeHolder":"","QueryScheme/query-scheme-1/77153117-51b3-4cd0-bb7b-0c3a5a43bd32":"版本","QueryScheme/query-scheme-1/77153117-51b3-4cd0-bb7b-0c3a5a43bd32/placeHolder":"","QueryScheme/query-scheme-1/c8a96a10-136b-4552-bd9b-939e9ddc2d91":"学生ID","QueryScheme/query-scheme-1/c8a96a10-136b-4552-bd9b-939e9ddc2d91/placeHolder":"","QueryScheme/query-scheme-1/4d647003-08b8-4450-bc45-f45ffcb18b70":"课程ID","QueryScheme/query-scheme-1/4d647003-08b8-4450-bc45-f45ffcb18b70/placeHolder":"","QueryScheme/query-scheme-1/d3117fe5-7abd-4b35-bafc-6d8aafa40ae8":"选课状态","QueryScheme/query-scheme-1/d3117fe5-7abd-4b35-bafc-6d8aafa40ae8/placeHolder":"","QueryScheme/query-scheme-1/d3117fe5-7abd-4b35-bafc-6d8aafa40ae8/control/enumValues/xz":"已选中","QueryScheme/query-scheme-1/d3117fe5-7abd-4b35-bafc-6d8aafa40ae8/control/enumValues/yc":"异常","QueryScheme/query-scheme-1/c87e9cd9-e2bd-48fb-bbca-f8a346785534":"学生成绩","QueryScheme/query-scheme-1/c87e9cd9-e2bd-48fb-bbca-f8a346785534/placeHolder":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"StudentCourse","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","student_id_c8a96a10_ug84":"学生ID","course_id_4d647003_prh6":"课程ID","state_d3117fe5_13d1":"选课状态","GridField/state_d3117fe5_13d1/enumData/xz":"已选中","GridField/state_d3117fe5_13d1/enumData/yc":"异常","grade_c87e9cd9_v6jm":"学生成绩"}};

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
          const versionKey = "studentcourse/" + langCode + ".json";
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
