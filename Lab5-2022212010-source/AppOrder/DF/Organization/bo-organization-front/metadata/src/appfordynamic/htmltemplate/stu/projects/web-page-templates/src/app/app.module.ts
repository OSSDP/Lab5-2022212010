import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LangPipe } from './app.component';
import { HtmlTemplatepage_header_titleHtml} from './app.component';
@NgModule({
declarations:[
HtmlTemplatepage_header_titleHtml,LangPipe],
imports:[ CommonModule ],
bootstrap:[
HtmlTemplatepage_header_titleHtml
]
})
export class AppModule { }
