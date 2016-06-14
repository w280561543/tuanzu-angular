import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login.component';

import { Suite.IndexComponent } from './suite/index.component';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS
	]
})

@RouteConfig([
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent,	useAsDefault: true },
	{ path: '/login', name: 'Login', component: LoginComponent },
	
	{ path: '/suite', name: 'SuiteIndex', component: Suite.IndexComponent }
])

export class AppComponent { }