import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 't-siderbar',
    template: `
    	<ul class="nav nav-pills nav-stacked">
			<li class="nav-item">
				<a class="nav-link" routerLink="/dashboard" routerLinkActive="active">首页</a>
			</li>

			<li class="small text-muted">管理</li>

			<li class="nav-item dropdown" (click)="toggle($event, 0)" [class.open]="isOpen[0]">
				<a class="nav-link dropdown-toggle" href="javascript:void(0);">Housing</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" routerLink="/housing" routerLinkActive="active" [routerLinkActiveOptions]="{exact:
true}">Housing</a>
					<a class="dropdown-item" routerLink="/housing/bill" routerLinkActive="active">Housing-bill</a>
				</div>
			</li>

			<li class="nav-item dropdown" (click)="toggle($event, 1)" [class.open]="isOpen[1]">
				<a class="nav-link dropdown-toggle" href="javascript:void(0);">Room</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="javascript:void(0);">Room</a>
					<a class="dropdown-item" href="javascript:void(0);">Room-bill</a>
				</div>
			</li>

		</ul>
    `,
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {
	public isOpen: any[] = [false, false];

	public toggle(e: Event, n: number): void {
		e.stopPropagation();
		this.isOpen[n] = !this.isOpen[n];
	}
}