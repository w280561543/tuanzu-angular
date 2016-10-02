import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HousingComponent } from './housing.component';

@NgModule({
	imports: [
		HttpModule
	],
	declarations: [
		HousingComponent
	]
})

export class HousingModule { }