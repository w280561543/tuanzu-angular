import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login.component';

@Component({
    selector: 'm-app',
    template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent,	useAsDefault: true },
	{ path: '/login', name: 'Login', component: LoginComponent }
])

export class AppComponent {
}
