import { Component, OnInit } from '@angular/core';

import { HousingService } from '../housing.service';

@Component({
	moduleId: module.id,
	selector: 'housing-dashboard',
	templateUrl: 'housing-dashboard.component.html'
})
export class HousingDashboardComponent implements OnInit {

	public data: any = {};

	public filters: any = {};

	public pageConfig: any = {};

	public constructor(
		private _housingService: HousingService
	) {}

	public ngOnInit(): void {
		this.getHousing();
	}

	public onFilter(): void {
		if(typeof this.filters === 'object' && JSON.stringify(this.filters) !== '{}') {
			this._housingService.setPage(1);
			this._housingService.setFilters(JSON.stringify(this.filters));
			this.getHousing();
		}
	}

	public getAll(): void {
		this._housingService.setPage(1);
		this._housingService.deleteFilters();
		this.getHousing();
		this.filters = {};
	}

	public pageChanged(page: number): void {
		this._housingService.setPage(page);
		this.getHousing();
	}

	public getHousing(): void {
		this._housingService.getAll()
			.subscribe((r: any) => {
				this.data = r.json().data;
				this.pageConfig = {
					current: this.data.current,
					totalPages: this.data.total_pages
				}
			});
	}
}