import { Component } from '@angular/core';

@Component({
	selector: 't-siderbar',
    template: `
    	<ul class="nav nav-pills nav-stacked">
			<li class="nav-item">
				<a class="nav-link" routerLink="/dashboard" routerLinkActive="active">首页</a>
			</li>

			<li class="small text-muted">管理</li>

			<li class="nav-item dropdown" [class.open]="isOpen[0]" routerLinkActive="open">
				<a class="nav-link dropdown-toggle" href="javascript:void(0);" (click)="toggle($event, 0)">房源管理</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" routerLink="/housing" routerLinkActive="active" [routerLinkActiveOptions]="{exact:
true}">套房管理(旧)</a>
					<a class="dropdown-item" routerLink="/housing/bill" routerLinkActive="active">套房账单</a>
				</div>
			</li>

			<li class="nav-item dropdown" [class.open]="isOpen[1]" routerLinkActive="open">
				<a class="nav-link dropdown-toggle" href="javascript:void(0);" (click)="toggle($event, 1)">出租管理</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="javascript:void(0);">租客合同(旧)</a>
					<a class="dropdown-item" href="javascript:void(0);">租客账单</a>
				</div>
			</li>

		</ul>
    `,
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {
	public isOpen: any[] = [];

	public toggle(e: Event, n: number): void {
		e.stopPropagation();
		this.isOpen[n] = !this.isOpen[n];
	}
}