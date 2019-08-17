import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDropBoxParams, StartDownloadParams, FoldersRequest, FoldersResponse } from '../../../app.interface';
import { urls } from '../../../shared/constant/urls';

@Injectable({
    providedIn: 'root'
})
export class DropboxService {

    constructor(
        private http: HttpClient
    ) { }

    registerDropbox(params: RegisterDropBoxParams) {
        return this.http.post<string>(urls.registerDropbox, params);
    }

    startDownload(params: StartDownloadParams) {
        return this.http.post(urls.downloadDropbox, params);
    }

    getDirectoryStructure(req: FoldersRequest) {
        return this.http.get<FoldersResponse>(urls.directoryStruture, {
            params: req as any
        });
    }
}
