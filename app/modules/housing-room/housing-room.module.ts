import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { SharedModule }             from '../../shared/shared.module';
import { HousingRoomRoutingModule } from './housing-room-routing.module';

import { HousingRoomComponent }               from './housing-room.component';
import { HousingRoomDashboardComponent }      from './dashboard/housing-room-dashboard.component';
import { HousingRoomContractComponent }       from './contract/housing-room-contract.component';
import { HousingRoomContractInfoComponent }   from './contract/housing-room-contract-info.component';
import { HousingRoomContractPrintComponent }  from './contract/housing-room-contract-print.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,

		SharedModule,
		HousingRoomRoutingModule
	],
	declarations: [
		HousingRoomComponent,
		HousingRoomDashboardComponent,
		HousingRoomContractComponent,
		HousingRoomContractInfoComponent,
		HousingRoomContractPrintComponent
	]
})

export class HousingRoomModule { }