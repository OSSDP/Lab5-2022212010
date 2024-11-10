
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class StudentCourseProxy extends BefProxy {

    private apiUrl = 'api/apporder/df/v1.0/studentcourse_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
}