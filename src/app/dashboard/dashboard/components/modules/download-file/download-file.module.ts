import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadFileComponent } from './download-file.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        DownloadFileComponent
    ],
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        CommonModule
    ],
    exports: [
        DownloadFileComponent
    ],
    entryComponents: [
        DownloadFileComponent
    ]
})
export class DownloadFileModule { }
