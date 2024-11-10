
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
  return new TranslateHttpLoader(http, BasePathService.convertPath('/apps/apporder/df/web/bo-organization-front/stucard/i18n/'), '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"EnumField/gender_59a52474_g0yq/placeHolder":"","EnumField/gender_59a52474_g0yq/enumData/man":"男","EnumField/gender_59a52474_g0yq/enumData/woman":"女","root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"StuCard","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","main-container":"","like-card-container":"","basic-form-component-ref":"","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","name_05ec4601_lmn1":"姓名","TextBox/name_05ec4601_lmn1/placeHolder":"","gender_59a52474_g0yq":"性别","RadioGroup/gender_59a52474_g0yq/man":"男","RadioGroup/gender_59a52474_g0yq/woman":"女","birth_e01f1a35_elhd":"生日","DateBox/birth_e01f1a35_elhd/placeHolder":"","major_498f38ff_w7gp":"专业名称","EnumField/major_498f38ff_w7gp/placeHolder":"","EnumField/major_498f38ff_w7gp/enumData/cs":"计算机","EnumField/major_498f38ff_w7gp/enumData/math":"数学","EnumField/major_498f38ff_w7gp/enumData/Chinese":"中文","EnumField/major_498f38ff_w7gp/enumData/falv":"法律","phone_PhoneNumber_fdbd27d1_2f83":"手机电话号码","TextBox/phone_PhoneNumber_fdbd27d1_2f83/placeHolder":"","email_Email_866d9869_4nvh":"邮箱","TextBox/email_Email_866d9869_4nvh/placeHolder":"","state_8f5ef340_3lfl":"状态","EnumField/state_8f5ef340_3lfl/placeHolder":"","EnumField/state_8f5ef340_3lfl/enumData/zc":"正常","EnumField/state_8f5ef340_3lfl/enumData/jy":"禁用"}};

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
          const versionKey = "stucard/" + langCode + ".json";
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
