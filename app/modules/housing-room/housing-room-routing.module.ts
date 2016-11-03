import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HousingRoomComponent }          from './housing-room.component';
import { HousingRoomDashboardComponent } from './dashboard/housing-room-dashboard.component';

import { HousingRoomService } from './housing-room.service';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: HousingRoomComponent,
				children: [
					{ path: '',     component: HousingRoomDashboardComponent }
				]
			}
		])
	],
	exports: [
		RouterModule
	],
	providers: [
		HousingRoomService
	]
})
export class HousingRoomRoutingModule {}