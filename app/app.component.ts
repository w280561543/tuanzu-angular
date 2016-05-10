import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login.component';

@Component({
    selector: 'm-app',
    templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent,	useAsDefault: true },
	{ path: '/login', name: 'Login', component: LoginComponent }
])

export class AppComponent implements OnInit{
}
