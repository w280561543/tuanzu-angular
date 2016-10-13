import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }      from './auth/auth-guard.service';
import { AuthService }    from './auth/auth.service';
import { LoginComponent } from './auth/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login',     component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent}
];

export const appRoutingProviders: any[] = [
	AuthGuard,
	AuthService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);