import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login.component';

import { Room.Contract.IndexComponent } from './room/contract/index.component';

@Component({
    selector: 'm-app',
    template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent,	useAsDefault: true },
	{ path: '/login', name: 'Login', component: LoginComponent },
	
	{ path: '/room/contract/index', name: 'RoomContractIndex', component: Room.Contract.IndexComponent}
])

export class AppComponent {
}
