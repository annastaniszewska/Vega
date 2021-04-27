import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@Injectable({

  providedIn: 'root'

})

export class AuthHttpInterceptorExtended extends AuthHttpInterceptor {

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
            if (req.method === "GET"){
                return next.handle(req);
            }
            else {
                return super.intercept(req, next);
            }
    }
}