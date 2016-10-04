import { NgModule }     from '@angular/core';
//import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';

import { housingRouting } from './housing.routing';

import { HousingComponent } from './housing.component';

import { HousingService } from './housing.service';

@NgModule({
	imports: [
		HttpModule,

		housingRouting
	],
	declarations: [
		HousingComponent
	],
	providers: [
		HousingService
	]
})

export class HousingModule { }