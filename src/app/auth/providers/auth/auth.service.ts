import { Injectable } from '@angular/core';
import { AuthRequest, LoginResponse, SignUpRequest } from '../../auth.interface';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../../shared/constant/urls';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    login(credentails: AuthRequest) {
        return this.http.post<LoginResponse>(urls.loginUrl, credentails);
    }

    signUp(credentails: SignUpRequest) {
        return this.http.post<String>(urls.registerUrl, credentails);
    }
}
