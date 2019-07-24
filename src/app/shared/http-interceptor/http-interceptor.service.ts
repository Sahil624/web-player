import { Injectable } from '@angular/core';
import {
    HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,
    HttpResponse, HttpErrorResponse, HttpClient
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
    Router
} from '@angular/router';
import { Utils } from '../Utils/utils';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = Utils.storageHelper.UserInfo &&
            Utils.storageHelper.UserInfo.accessToken;

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        console.log('Interceptot request', request);

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.handle401(request).pipe(
                        map((event: HttpEvent<any>) => {
                            console.log('401 REQEST REPLAY', event);
                            return event;
                        })
                    );
                } else if (error.error instanceof ErrorEvent) {
                    this.presentToast(error.error.message);
                } else if (error.message) {
                    this.presentToast(error.message);
                }
                return throwError(error);
            }));
    }

    handle401(request: HttpRequest<any>) {
        // console.log('401!!!!, Trying refresh access token');
        // this.authService.refreshToken().subscribe(response => {
        //     const tokenParts = response.access.split(/\./);
        //     const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));

        //     utils.storageHelper.userInfo = {
        //         accessToken: response.access,
        //         getTime: Date.now(),
        //         refreshToken: utils.storageHelper.userInfo.refreshToken,
        //         username: tokenDecoded.username,
        //         expires: tokenDecoded.exp * 1000,
        //         phoneHash: utils.storageHelper.userInfo.username
        //     };

        // }, (err) => {
            console.log('Could not validate token, Logging Out');
            localStorage.clear();
            this.router.navigateByUrl('/auth');
            this.presentToast('Logged out');
        // })

        return this.http.request(request);
    }

    async presentToast(msg) {
        console.log('Error', msg);
        // const toast = await this._toastController.create({
        //     message: msg,
        //     duration: 2000,
        //     position: 'top'
        // });
        // toast.present();
    }
}
