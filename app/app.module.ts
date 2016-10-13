import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './app.component';
import { routing, 
		 appRoutingProviders } from './app.routing';

import { LoginComponent }     from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HousingModule } from './module/housing/housing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		
		HousingModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent
	],
	providers: [
		...appRoutingProviders
	],
	bootstrap: [AppComponent]
})

export class AppModule { }