import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HousingModule } from './housing/housing';

@NgModule({
	imports: [
		BrowserModule,
		routing,

		HousingModule
	],
	declarations: [
		AppComponent,
		DashboardComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }