import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
	selector: 'm-sidebar',
	templateUrl: 'app/partials/sidebar.component.html',
	styleUrls: ['app/partials/sidebar.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent {
	public active: Array = [];
}