import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HousingRoomComponent }          from './housing-room.component';
import { HousingRoomDashboardComponent } from './dashboard/housing-room-dashboard.component';
import { HousingRoomContractComponent }  from './contract/housing-room-contract.component';

import { HousingRoomService }         from './housing-room.service';
import { HousingRoomContractService } from './contract/housing-room-contract.service';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: HousingRoomComponent,
				children: [
					{ path: 'contract/:housing_room_id', component: HousingRoomContractComponent },
					{ path: '', component: HousingRoomDashboardComponent }
				]
			}
		])
	],
	exports: [
		RouterModule
	],
	providers: [
		HousingRoomService,
		HousingRoomContractService
	]
})
export class HousingRoomRoutingModule {}