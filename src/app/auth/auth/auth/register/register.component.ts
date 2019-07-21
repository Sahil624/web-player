import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../providers/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    signupForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    })
    constructor(
        private authService:AuthService
    ) { }

    ngOnInit() {
    }

    signUp() {
        if (this.signupForm.invalid) {
            return;
        }
        const rawValues = this.signupForm.getRawValue();

        this.authService.signUp({
            email: rawValues.email,
            password: rawValues.password
        }).subscribe(res => {
            console.log(res);
        })
    }

}
