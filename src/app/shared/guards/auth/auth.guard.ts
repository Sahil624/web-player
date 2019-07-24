import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utils } from '../../Utils/utils';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(
        private router:Router
    ) {}
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        console.log('is Auth', Utils.isAuthenticated());
        if (Utils.isAuthenticated()) {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
        return true;
    }
}
