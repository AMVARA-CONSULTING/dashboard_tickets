import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ToolsService } from '@services/tools.service';
import { Injectable } from '@angular/core';

@Injectable()
export class XSRFInterceptor implements HttpInterceptor {

    constructor(
        private _tools: ToolsService
    ) {}

    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let newOptions = {}

        const xsrf = this._tools.getCookie(document.cookie, 'XSRF-TOKEN') || this._tools.getCookie(localStorage.getItem('cookies'), 'XSRF-TOKEN')
        if (xsrf) {
            newOptions = {
                headers: new HttpHeaders({
                    'X-XSRF-TOKEN':  xsrf
                })
            }
        }
        const xsrfReq = req.clone(newOptions);

        return next.handle(xsrfReq);
    }
}