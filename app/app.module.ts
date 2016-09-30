import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent } from 'app/app.component';
import { routing }      from 'app/app.routing';

import { DashboardComponent } from 'app/dashboard/dashboard.component';

import { HousingComponent } from 'app/housing/housing.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,

		routing
	],
	declarations: [
		AppComponent,
		DashboardComponent,

		HousingComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }