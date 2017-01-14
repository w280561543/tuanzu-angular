import { Component, OnInit } from '@angular/core';

import { HousingRoomService } from '../housing-room.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-dashboard.component.html'
})
export class HousingRoomDashboardComponent implements OnInit {

	private data: any = {};

	public constructor(
		private _housingRoomService: HousingRoomService
	) {}
	
	public ngOnInit(): void {
		this.getHousingRoom();
	}
	
	public getHousingRoom(): void {
		this._housingRoomService.getAll()
			.subscribe((r: any) => {
				this.data = r.json().data;
				console.log(this.data);
			});
	}
}