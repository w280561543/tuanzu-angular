import { Component, OnInit } from '@angular/core';

import { HousingRoomService } from '../housing-room.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-dashboard.component.html'
})
export class HousingRoomDashboardComponent implements OnInit {
	public data: any = {};
	
	public isOpen: Array<number> = [];
	
	public pageConfig: any = {};

	public constructor(
		private _housingRoomService: HousingRoomService
	) {}
	
	public ngOnInit(): void {
		this.getHousingRoom();
	}
	
	public pageChanged(page: number): void {
		this.isOpen = [];
		this._housingRoomService.setPage(page);
		this.getHousingRoom();
	}
	
	public getHousingRoom(): void {
		this._housingRoomService.getAll()
			.subscribe((r: any) => {
				this.data = r.json().data;
				this.pageConfig = {
					current: this.data.current,
					totalPages: this.data.total_pages
				}
			});
	}
}