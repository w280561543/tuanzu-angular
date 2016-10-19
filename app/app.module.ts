import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './app.component';
import { routing, 
		 appRoutingProviders } from './app.routing';

import { LoginComponent }     from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidebarComponent }   from './components/sidebar/sidebar.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		SidebarComponent
	],
	providers: [
		...appRoutingProviders
	],
	bootstrap: [AppComponent]
})

export class AppModule { }