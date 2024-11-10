
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
  return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/student/i18n/'), '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/filterText":"筛选","QueryScheme/query-scheme-1/5124f73b-6cd9-4d6c-8182-c7936b94b675":"主键","QueryScheme/query-scheme-1/5124f73b-6cd9-4d6c-8182-c7936b94b675/placeHolder":"","QueryScheme/query-scheme-1/66e663da-d074-4dd9-b2c0-7db33363d517":"版本","QueryScheme/query-scheme-1/66e663da-d074-4dd9-b2c0-7db33363d517/placeHolder":"","QueryScheme/query-scheme-1/187b1ada-deb6-4bbf-b454-ae2f03019104":"学号","QueryScheme/query-scheme-1/187b1ada-deb6-4bbf-b454-ae2f03019104/placeHolder":"","QueryScheme/query-scheme-1/cd4d8a2b-4696-434b-b3d6-ec4ee806a138":"姓名","QueryScheme/query-scheme-1/cd4d8a2b-4696-434b-b3d6-ec4ee806a138/placeHolder":"","QueryScheme/query-scheme-1/b09c1344-806c-4f91-82f5-54dd31c279aa":"性别","QueryScheme/query-scheme-1/b09c1344-806c-4f91-82f5-54dd31c279aa/placeHolder":"","QueryScheme/query-scheme-1/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/man":"男","QueryScheme/query-scheme-1/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/woman":"女","QueryScheme/query-scheme-1/72231dcb-4fa5-491b-bca7-a1c25f92a4ea":"密码","QueryScheme/query-scheme-1/72231dcb-4fa5-491b-bca7-a1c25f92a4ea/placeHolder":"","QueryScheme/query-scheme-1/99cae752-386f-4b3f-be5e-e7291871d419":"生日","QueryScheme/query-scheme-1/99cae752-386f-4b3f-be5e-e7291871d419/placeHolder":"","QueryScheme/query-scheme-1/615161ef-a709-431a-b0b7-77a0dec433d9":"专业名称","QueryScheme/query-scheme-1/615161ef-a709-431a-b0b7-77a0dec433d9/placeHolder":"","QueryScheme/query-scheme-1/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/cs":"计算机","QueryScheme/query-scheme-1/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/math":"数学","QueryScheme/query-scheme-1/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/Chinese":"中文","QueryScheme/query-scheme-1/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/falv":"法律","QueryScheme/query-scheme-1/46c77ec9-88d1-4769-bb7a-5490d92893fa":"手机电话号码","QueryScheme/query-scheme-1/46c77ec9-88d1-4769-bb7a-5490d92893fa/placeHolder":"","QueryScheme/query-scheme-1/503c6e67-fa0f-456c-9c58-7ab52433e9b2":"邮箱","QueryScheme/query-scheme-1/503c6e67-fa0f-456c-9c58-7ab52433e9b2/placeHolder":"","QueryScheme/query-scheme-1/c7b052e8-afdf-4a2c-8ac8-814fc57c39d9":"状态","QueryScheme/query-scheme-1/c7b052e8-afdf-4a2c-8ac8-814fc57c39d9/placeHolder":"","QueryScheme/query-scheme-1/c7b052e8-afdf-4a2c-8ac8-814fc57c39d9/control/enumValues/zc":"正常","QueryScheme/query-scheme-1/c7b052e8-afdf-4a2c-8ac8-814fc57c39d9/control/enumValues/jy":"禁用","root-component":"","root-layout":"","query-scheme-container-o1fj":"","Section/query-scheme-container-o1fj/mainTitle":"","Section/query-scheme-container-o1fj/subTitle":"","query-scheme-o1fj":"默认筛选方案","QueryScheme/query-scheme-o1fj/filterText":"筛选","QueryScheme/query-scheme-o1fj/187b1ada-deb6-4bbf-b454-ae2f03019104":"学号","QueryScheme/query-scheme-o1fj/187b1ada-deb6-4bbf-b454-ae2f03019104/placeHolder":"","QueryScheme/query-scheme-o1fj/cd4d8a2b-4696-434b-b3d6-ec4ee806a138":"姓名","QueryScheme/query-scheme-o1fj/cd4d8a2b-4696-434b-b3d6-ec4ee806a138/placeHolder":"","QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa":"性别","QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/placeHolder":"","QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/man":"男","QueryScheme/query-scheme-o1fj/b09c1344-806c-4f91-82f5-54dd31c279aa/control/enumValues/woman":"女","QueryScheme/query-scheme-o1fj/99cae752-386f-4b3f-be5e-e7291871d419":"生日","QueryScheme/query-scheme-o1fj/99cae752-386f-4b3f-be5e-e7291871d419/placeHolder":"","QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9":"专业名称","QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/placeHolder":"","QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/cs":"计算机","QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/math":"数学","QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/Chinese":"中文","QueryScheme/query-scheme-o1fj/615161ef-a709-431a-b0b7-77a0dec433d9/control/enumValues/falv":"法律","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"Student","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","student_id_187b1ada_5ngh":"学号","name_cd4d8a2b_lj1y":"姓名","gender_b09c1344_gzd2":"性别","GridField/gender_b09c1344_gzd2/enumData/man":"男","GridField/gender_b09c1344_gzd2/enumData/woman":"女","password_72231dcb_iwrs":"密码","birth_99cae752_zwqe":"生日","major_615161ef_22fk":"专业名称","GridField/major_615161ef_22fk/enumData/cs":"计算机","GridField/major_615161ef_22fk/enumData/math":"数学","GridField/major_615161ef_22fk/enumData/Chinese":"中文","GridField/major_615161ef_22fk/enumData/falv":"法律","phone_PhoneNumber_46c77ec9_ljvn":"手机电话号码","email_Email_503c6e67_8ros":"邮箱","state_c7b052e8_jonh":"状态","GridField/state_c7b052e8_jonh/enumData/zc":"正常","GridField/state_c7b052e8_jonh/enumData/jy":"禁用"}};

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
          const versionKey = "student/" + langCode + ".json";
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
