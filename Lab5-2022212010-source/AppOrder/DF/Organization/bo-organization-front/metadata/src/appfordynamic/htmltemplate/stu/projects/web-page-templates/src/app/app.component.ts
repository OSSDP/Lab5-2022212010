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
<span class="f-title-icon f-text-orna-bill"><i class="f-icon f-icon-page-title-record"></i></span><h4 class="f-title-text">{{'title'|lang:lang:'学生'}}</h4><div class="f-title-pagination"><span class="f-icon f-icon-arrow-w" [ngClass]="{'f-state-disabled':!viewModel.stateMachine['canEdit']}" (click)="viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()"></span><span class="f-icon f-icon-arrow-e" [ngClass]="{'f-state-disabled':!viewModel.stateMachine['canEdit']}" (click)="viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()"></span></div>`
})
export class HtmlTemplatepage_header_titleHtml {
    viewModel: any;
    lang: string;
    constructor() { }
}
