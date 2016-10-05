import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }        from './app.component';
import { routing, 
		 appRoutingProviders } from './app.routing';

import { LoginComponent }     from './auth/login.component';

import { HousingModule } from './module/housing/housing';

@NgModule({
	imports: [
		BrowserModule,
		routing,
		
		HousingModule
	],
	declarations: [
		AppComponent,
		LoginComponent
	],
	providers: [
		...appRoutingProviders
	],
	bootstrap: [AppComponent]
})

export class AppModule { }