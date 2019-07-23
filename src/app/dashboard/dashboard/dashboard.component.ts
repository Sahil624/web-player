import { Component, OnInit } from '@angular/core';
import { Routes } from '../../app.interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    links: Routes[] = [
        {
            name: 'Dropbox',
            link: '/dashboard/dropbox'
        }
    ]

    constructor() { }

    ngOnInit() {
    }

}
