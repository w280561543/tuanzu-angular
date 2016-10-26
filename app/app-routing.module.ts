import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard }          from './auth/auth-guard.service';
import { AuthService }        from './auth/auth.service';
import { LoginComponent }     from './auth/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', redirectTo: '/login', pathMatch: 'full' },

			{ path: 'login',     component: LoginComponent },
			{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

			// Module
			{ path: 'housing', loadChildren: 'app/modules/housing/housing.module#HousingModule', canLoad: [AuthGuard] }
		])
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthGuard,
		AuthService
	]
})
export class AppRoutingModule {}