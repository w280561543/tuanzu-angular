import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { SharedModule }             from '../../shared/shared.module';
import { HousingRoomRoutingModule } from './housing-room-routing.module';

import { HousingRoomComponent }          from './housing-room.component';
import { HousingRoomDashboardComponent } from './dashboard/housing-room-dashboard.component';

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
		HousingRoomDashboardComponent
	]
})

export class HousingRoomModule { }