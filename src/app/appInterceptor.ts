import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class appInterceptor implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token=localStorage.getItem("jwtTk");
        console.log(req);
        req = req.clone({ headers: req.headers.append('Content-Type', 'application/json')});
        req = req.clone({ headers: req.headers.set('Authorization', "Bearer " + token)});

        return next.handle(req); 
    }

}

