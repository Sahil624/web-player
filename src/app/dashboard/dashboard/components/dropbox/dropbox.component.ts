import { Component, OnInit } from '@angular/core';
import { CloudServiceService } from '../../../providers/cloud-service/cloud-service.service';
import { DropboxService } from '../../../providers/dropbox/dropbox.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-dropbox',
    templateUrl: './dropbox.component.html',
    styleUrls: ['./dropbox.component.scss']
})
export class DropboxComponent implements OnInit {
    registered = true;
    downloadLink = new FormControl(null, [Validators.required]);

    constructor(
        private cloudService: CloudServiceService,
        private dropBoxService: DropboxService
    ) {

        this.cloudService.getLinkedServices().subscribe(res => {
            if (res && res.dropbox) {
                this.registered = true;
            } else {
                this.registered = false;
            }
        });
    }

    registerEvent(event) {
        console.log('Register Event', event);
        this.registered = event;
    }

    startDownload() {
        if (this.downloadLink.invalid){
            return;
        }
        this.dropBoxService.startDownload({
            link: this.downloadLink.value,
            cloud_service: 0
        }).subscribe(res => {
             console.log(res);
        },(err) => {
            alert(err);
        });
    }

    ngOnInit() {
    }

}
