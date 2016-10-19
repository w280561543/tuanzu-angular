import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 't-siderbar',
    template: `
    	<ul class="nav nav-pills nav-stacked">
			<li class="nav-item">
				<a class="nav-link" routerLink="/dashboard" routerLinkActive="active">首页</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="javascript:void(0);">Link</a>
			</li>
			<li class="small text-muted">管理</li>
			<li class="nav-item dropdown" [class.open]="false">
				<a class="nav-link dropdown-toggle" href="javascript:void(0);">Housing</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="javascript:void(0);">Dashboard</a>
				</div>
			</li>
		</ul>
    `,
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {
}