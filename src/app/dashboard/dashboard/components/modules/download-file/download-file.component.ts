import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DropboxService } from 'src/app/dashboard/providers/dropbox/dropbox.service';

@Component({
    selector: 'app-download-file',
    templateUrl: './download-file.component.html',
    styleUrls: ['./download-file.component.scss']
})
export class DownloadFileComponent implements OnInit {

    downloadLink = new FormControl(null, [Validators.required]);

    constructor(
        private dropBoxService: DropboxService
    ) { }

    ngOnInit() {
    }

    startDownload() {
        if (this.downloadLink.invalid) {
            return;
        }
        this.dropBoxService.startDownload({
            link: this.downloadLink.value,
            cloud_service: 0
        }).subscribe(res => {
            console.log(res);
        }, (err) => {
            alert(err);
        });
    }
}
