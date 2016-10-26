import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HousingComponent }          from './housing.component';
import { HousingBillComponent }      from './bill/housing-bill.component';
import { HousingDashboardComponent } from './dashboard/housing-dashboard.component';

import { HousingService } from './housing.service';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: HousingComponent,
				children: [
					{ path: 'bill', component: HousingBillComponent },
					{ path: '',     component: HousingDashboardComponent }
				]
			}
		])
	],
	exports: [
		RouterModule
	],
	providers: [
		HousingService
	]
})
export class HousingRoutingModule {}