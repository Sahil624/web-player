import { Component, OnInit } from '@angular/core';
import { CloudServiceService } from '../../../providers/cloud-service/cloud-service.service';

@Component({
    selector: 'app-dropbox',
    templateUrl: './dropbox.component.html',
    styleUrls: ['./dropbox.component.scss']
})
export class DropboxComponent implements OnInit {
    registered = true;

    constructor(
        private cloudService: CloudServiceService
    ) {

        this.cloudService.getLinkedServices().subscribe(res => {
            if(res && res.dropbox){
                this.registered = true;
            } else {
                this.registered = false;
            }
        });
    }

    ngOnInit() {
    }

}
