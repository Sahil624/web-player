import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropboxComponent } from './dashboard/components/dropbox/dropbox.component';


const routes: Routes = [
    {
        path:'',
        component: DashboardComponent,
        children: [
            {
                path:'',
                pathMatch: 'full',
                redirectTo: 'dropbox'
            },
            {
                path:'dropbox',
                component: DropboxComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
