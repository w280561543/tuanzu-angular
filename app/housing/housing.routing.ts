import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousingComponent } from './housing.component';

const housingRoutes: Routes = [
	{ path:'housing', component: HousingComponent}
];

export const housingRouting: ModuleWithProviders = RouterModule.forChild(housingRoutes);