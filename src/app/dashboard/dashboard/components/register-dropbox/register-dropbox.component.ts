import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register-dropbox',
    templateUrl: './register-dropbox.component.html',
    styleUrls: ['./register-dropbox.component.scss']
})
export class RegisterDropboxComponent implements OnInit {
    authToken = new FormControl('', [Validators.required]);

    constructor() { }

    ngOnInit() {
    }

}
