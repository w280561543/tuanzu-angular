import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from 'app/dashboard/dashboard.component';

import { HousingComponent } from 'app/housing/housing.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'housing',
		component: HousingComponent
	}
	
];

export const routing = RouterModule.forRoot(appRoutes);