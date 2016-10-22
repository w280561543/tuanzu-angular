import { NgModule }   from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule }         from '../../shared/shared.module';
import { HousingRoutingModule } from './housing-routing.module';

import { HousingComponent }          from './housing.component';
import { HousingBillComponent }      from './bill/housing-bill.component';
import { HousingDashboardComponent } from './dashboard/housing-dashboard.component';

@NgModule({
	imports: [
		HttpModule,

		SharedModule,
		HousingRoutingModule
	],
	declarations: [
		HousingComponent,
		HousingBillComponent,
		HousingDashboardComponent
	]
})

export class HousingModule { }