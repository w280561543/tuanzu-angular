import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { SharedModule }  from './shared/shared.module';

import { AppComponent }        from './app.component';
import { routing, 
		 appRoutingProviders } from './app.routing';

import { LoginComponent }     from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,

		SharedModule,

		routing
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