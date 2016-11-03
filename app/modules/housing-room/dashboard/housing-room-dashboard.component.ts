import { Component } from '@angular/core';

import { HousingRoomService } from '../housing-room.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-dashboard.component.html'
})
export class HousingRoomDashboardComponent {
	public constructor(
		private _housingRoomService: HousingRoomService
	) {}
}