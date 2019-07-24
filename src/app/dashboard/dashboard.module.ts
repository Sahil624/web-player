import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule, MatButtonModule, MatInputModule } from '@angular/material';
import { RegisterDropboxComponent } from './dashboard/components/register-dropbox/register-dropbox.component';
import { DropboxComponent } from './dashboard/components/dropbox/dropbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
        MatInputModule
    ]
})
export class DashboardModule { }
