import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousingComponent }          from './housing.component';
import { HousingDashboardComponent } from './dashboard/housing-dashboard.component';

const housingRoutes: Routes = [
	{
		path: '',
		component: HousingComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: '', component: HousingDashboardComponent, canActivate: [AuthGuard] }
		]
	}
];

export const housingRouting: ModuleWithProviders = RouterModule.forChild(housingRoutes);