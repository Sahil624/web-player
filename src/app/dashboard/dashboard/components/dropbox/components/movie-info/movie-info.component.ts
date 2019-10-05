import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DropboxService } from 'src/app/dashboard/providers/dropbox/dropbox.service';
import { CloudServiceEnum } from 'src/app/app.structs';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-movie-info',
    templateUrl: './movie-info.component.html',
    styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit, OnDestroy {

    fileInfo = null;
    private subscriptions: Subscription = new Subscription();

    @Input() set path(val: string) {
        if (val) {
            this.fetchFileInfo(val);
        }
    }

    constructor(
        private dropboxService: DropboxService
    ) { }

    ngOnInit() {
    }

    fetchFileInfo(path) {
        this.subscriptions.add(
            this.dropboxService.fetchFileInfo({
                cloud_service: CloudServiceEnum.dropbox,
                file_path: path
            }).subscribe(data => {
                this.fileInfo = data;
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
