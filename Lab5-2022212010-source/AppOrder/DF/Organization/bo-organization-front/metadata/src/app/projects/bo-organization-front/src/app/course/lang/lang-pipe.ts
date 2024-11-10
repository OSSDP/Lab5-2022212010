
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
  return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/course/i18n/'), '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/filterText":"筛选","QueryScheme/query-scheme-1/ece48b07-a07e-4516-824e-ef9cdaf87405":"主键","QueryScheme/query-scheme-1/ece48b07-a07e-4516-824e-ef9cdaf87405/placeHolder":"","QueryScheme/query-scheme-1/2caadeea-35e0-4efa-ac2d-3a6a5529a6c8":"版本","QueryScheme/query-scheme-1/2caadeea-35e0-4efa-ac2d-3a6a5529a6c8/placeHolder":"","QueryScheme/query-scheme-1/f727a729-a38a-43a9-b08e-c9b9e2c806f8":"课程编号","QueryScheme/query-scheme-1/f727a729-a38a-43a9-b08e-c9b9e2c806f8/placeHolder":"","QueryScheme/query-scheme-1/0fe03859-e264-42ea-bf7c-036bbbf86549":"课程名称","QueryScheme/query-scheme-1/0fe03859-e264-42ea-bf7c-036bbbf86549/placeHolder":"","QueryScheme/query-scheme-1/94b90941-beef-473f-acdf-8ee16183ae31":"课程学分","QueryScheme/query-scheme-1/94b90941-beef-473f-acdf-8ee16183ae31/placeHolder":"","QueryScheme/query-scheme-1/15e20fea-976b-407f-be36-2b1c23615cdd":"授课教师","QueryScheme/query-scheme-1/15e20fea-976b-407f-be36-2b1c23615cdd/placeHolder":"","QueryScheme/query-scheme-1/3b170260-120d-4d54-9969-ab8e81748093":"最大选课人数","QueryScheme/query-scheme-1/3b170260-120d-4d54-9969-ab8e81748093/placeHolder":"","QueryScheme/query-scheme-1/72076de8-d624-4799-8c56-225c35c38dfe":"课程学期","QueryScheme/query-scheme-1/72076de8-d624-4799-8c56-225c35c38dfe/placeHolder":"","QueryScheme/query-scheme-1/58813dc6-0046-49c8-8269-4becf6337d9c":"课程安排","QueryScheme/query-scheme-1/58813dc6-0046-49c8-8269-4becf6337d9c/placeHolder":"","QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505":"课程状态","QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505/placeHolder":"","QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505/control/enumValues/jxz":"进行中","QueryScheme/query-scheme-1/4663043d-914b-44ad-89e4-091a013e0505/control/enumValues/yjs":"已结束","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"Course","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","courseId_f727a729_2l2j":"课程编号","course_name_0fe03859_zolf":"课程名称","credits_94b90941_e0xq":"课程学分","teacher_id_15e20fea_lxuh":"授课教师","max_students_3b170260_6s75":"最大选课人数","semester_72076de8_1eqr":"课程学期","schedule_58813dc6_8qob":"课程安排","state_4663043d_cg5t":"课程状态","GridField/state_4663043d_cg5t/enumData/jxz":"进行中","GridField/state_4663043d_cg5t/enumData/yjs":"已结束"}};

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
          const versionKey = "course/" + langCode + ".json";
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
