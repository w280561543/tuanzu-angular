import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { SharedModule }     from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { LoginComponent }     from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,

		SharedModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,

		LoginComponent,
		DashboardComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule { }