import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../auth/auth-guard.service';

import { HousingComponent }          from './housing.component';
import { HousingDashboardComponent } from './dashboard/housing-dashboard.component';

const housingRoutes: Routes = [
	{
		path: '',
		component: HousingComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: '', component: HousingDashboardComponent }
		]
	}
];

export const housingRouting: ModuleWithProviders = RouterModule.forChild(housingRoutes);