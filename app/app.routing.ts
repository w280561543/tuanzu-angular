import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }          from './auth/auth-guard.service';
import { AuthService }        from './auth/auth.service';
import { CanDeactivateGuard } from './auth/can-deactivate-guard.service';
import { LoginComponent }     from './auth/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login',     component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

	{ path: 'housing', loadChildren: 'app/module/housing/housing.module#HousingModule', canLoad: [AuthGuard] }
];

export const appRoutingProviders: any[] = [
	AuthGuard,
	AuthService,
	CanDeactivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);