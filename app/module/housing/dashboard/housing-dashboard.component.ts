import { Component, OnInit } from '@angular/core';

import { HousingService } from '../housing.service';

@Component({
	moduleId: module.id,
	selector: 'housing-dashboard',
	templateUrl: 'housing-dashboard.component.html'
})

export class HousingDashboardComponent implements OnInit {
	
	public constructor(
		private _housingService: HousingService
	) {}
	
	public ngOnInit(): void {
		this._housingService.getAll()
			.subscribe((r: any) => {
				console.log(r.json());
			});
	}
}