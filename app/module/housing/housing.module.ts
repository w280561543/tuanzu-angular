import { NgModule }   from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from 'app/shared/shared.module';

import { housingRouting } from './housing.routing';

import { HousingComponent }          from './housing.component';
import { HousingBillComponent }      from './bill/housing-bill.component';
import { HousingDashboardComponent } from './dashboard/housing-dashboard.component';

import { HousingService } from './housing.service';

@NgModule({
	imports: [
		HttpModule,

		SharedModule,

		housingRouting
	],
	declarations: [
		HousingComponent,
		HousingBillComponent,
		HousingDashboardComponent
	],
	providers: [
		HousingService
	]
})

export class HousingModule { }