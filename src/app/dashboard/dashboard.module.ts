import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule, MatButtonModule } from '@angular/material';
import { RegisterDropboxComponent } from './dashboard/components/register-dropbox/register-dropbox.component';
import { DropboxComponent } from './dashboard/components/dropbox/dropbox.component';


@NgModule({
    declarations: [
        DashboardComponent,
        RegisterDropboxComponent,
        DropboxComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatSidenavModule,
        MatButtonModule
    ]
})
export class DashboardModule { }
