import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
    MatSidenavModule, MatButtonModule, MatInputModule, MatIconModule,
    MatDialogModule, MatCardModule, MatTooltipModule
} from '@angular/material';
import { RegisterDropboxComponent } from './dashboard/components/register-dropbox/register-dropbox.component';
import { DropboxComponent } from './dashboard/components/dropbox/dropbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadFileModule } from './dashboard/components/modules/download-file/download-file.module';


@NgModule({
    declarations: [
        DashboardComponent,
        RegisterDropboxComponent,
        DropboxComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatInputModule,
        DownloadFileModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatTooltipModule
    ]
})
export class DashboardModule { }
