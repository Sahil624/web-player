import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudServiceService } from '../../../providers/cloud-service/cloud-service.service';
import { DropboxService } from '../../../providers/dropbox/dropbox.service';
import { MatDialog } from '@angular/material';
import { DownloadFileComponent } from '../modules/download-file/download-file.component';
import { CloudServiceEnum } from 'src/app/app.structs';
import { Subscription } from 'rxjs';
import { FoldersResponse } from 'src/app/app.interface';

@Component({
    selector: 'app-dropbox',
    templateUrl: './dropbox.component.html',
    styleUrls: ['./dropbox.component.scss']
})
export class DropboxComponent implements OnInit, OnDestroy {
    registered = true;
    private subscriptions: Subscription = new Subscription();
    directries: FoldersResponse = null;

    constructor(
        private cloudService: CloudServiceService,
        private dropBoxService: DropboxService,
        private dialog: MatDialog
    ) {

        this.subscriptions.add(
            this.cloudService.getLinkedServices().subscribe(res => {
                if (res && res.dropbox) {
                    this.registered = true;
                } else {
                    this.registered = false;
                }
            })
        );

        this.subscriptions.add(
            this.dropBoxService.getDirectoryStructure({
                cloud_service: CloudServiceEnum.dropbox
            }).subscribe(dir => {
                this.directries = dir;
            })
        );
    }

    openDownloadDialog() {
        this.dialog.open(DownloadFileComponent, {
            height: '500',
            width: '600'
        });
    }

    registerEvent(event) {
        this.registered = event;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    get filesNames() {
        try {
            return Object.keys(this.directries);
        } catch (err) {
            return [];
        }
    }
}
