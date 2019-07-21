import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../providers/auth/auth.service';
import { Utils } from '../../../../shared/Utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const rawValues = this.loginForm.getRawValue()

    this.authService.login({
      email: rawValues.email,
      password: rawValues.password
    }).subscribe(response => {
      const tokenParts = response.access.split(/\./);
      const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));

      Utils.storageHelper.UserInfo = {
        accessToken: response.access,
        getTime: Date.now(),
        refreshToken: response.refresh,
        username: tokenDecoded.username,
        expires: tokenDecoded.exp * 1000,
      };
      this.router.navigateByUrl('dashboard');
    })

  }

  ngOnInit() {
  }

}
