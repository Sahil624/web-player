import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DropboxService } from '../../../providers/dropbox/dropbox.service';

@Component({
    selector: 'app-register-dropbox',
    templateUrl: './register-dropbox.component.html',
    styleUrls: ['./register-dropbox.component.scss']
})
export class RegisterDropboxComponent implements OnInit {
    authToken = new FormControl('', [Validators.required]);

    @Output() linked = new EventEmitter();

    constructor(
        private dropBoxService: DropboxService
    ) { }

    ngOnInit() {
    }

    registerDropbox() {
        if (this.authToken.invalid) {
            return false;
        }

        this.dropBoxService.registerDropbox({
            auth_key: this.authToken.value
        }).subscribe(res => {
            console.log(res);
            this.linked.emit(true);
        })
    }
}
