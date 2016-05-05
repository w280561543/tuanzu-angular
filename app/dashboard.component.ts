import { Component } from '@angular/core';

import { NavbarComponent } from './partials/navbar.component';
import { SidebarComponent } from './partials/sidebar.component';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/dashboard.component.html',
	directives:[NavbarComponent, SidebarComponent]
})

export class DashboardComponent { }