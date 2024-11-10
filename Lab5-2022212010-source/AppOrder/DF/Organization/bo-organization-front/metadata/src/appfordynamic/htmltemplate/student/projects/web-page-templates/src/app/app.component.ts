import { AfterViewInit, Component, ElementRef,Injector } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
    constructor(private injector: Injector) { }
    transform(key: string, langCode: string, defaultValue?: string) {
        return defaultValue;
    }
}
/**
 * page-header-titleHtml
 */
@Component({
    selector: 'page-header-titleHtml',
    template: ` 
<span class="f-title-icon f-text-orna-manage"><i class="f-icon f-icon-page-title-administer"></i></span><h4 class="f-title-text">{{'title'|lang:lang:'Student'}}</h4>`
})
export class HtmlTemplatepage_header_titleHtml {
    viewModel: any;
    lang: string;
    constructor() { }
}
