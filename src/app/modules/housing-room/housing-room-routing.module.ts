import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HousingRoomComponent }          from './housing-room.component';
import { HousingRoomDashboardComponent } from './dashboard/housing-room-dashboard.component';
import { HousingRoomContractCreateComponent }  from './contract/housing-room-contract-create.component';
import { HousingRoomContractUpdateComponent } from './contract/housing-room-contract-update.component';
import { HousingRoomContractRetrieveComponent } from './contract/housing-room-contract-retrieve.component';

import { HousingRoomService }         from './housing-room.service';
import { HousingRoomContractService } from './contract/housing-room-contract.service';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: HousingRoomComponent,
				children: [
					{ path: 'contract/create/:housing_room_id', component: HousingRoomContractCreateComponent },
					{ path: 'contract/update/:housing_room_id', component: HousingRoomContractUpdateComponent },
					{ path: 'contract/retrieve/:housing_room_id', component: HousingRoomContractRetrieveComponent },
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