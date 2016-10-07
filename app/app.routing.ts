import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }      from './auth/auth-guard.service';
import { AuthService }    from './auth/auth.service';
import { LoginService }   from './auth/login.service';
import { LoginComponent } from './auth/login.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent }
];

export const appRoutingProviders: any[] = [
	AuthGuard,
	AuthService,
	LoginService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);