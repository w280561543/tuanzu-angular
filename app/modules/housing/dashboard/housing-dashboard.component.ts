import { Component, OnInit } from '@angular/core';

import { HousingService } from '../housing.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-dashboard.component.html'
})
export class HousingDashboardComponent implements OnInit {
	public rows: Array < any > = [];

	public filters: any = {};
	
	public page: any = {
		"config": {
			"currentPage": 1,
			"itemsPerPage": 15,
			"totalItems": 0
		},
		"totalPages": 0,
		"pages": []
	};

	public isOpen: Array<number> = [];

	private data: any = {};

	public constructor(
		private _housingService: HousingService
	) {}

	public ngOnInit(): void {
		this.getHousing();
	}

	public getAll(): void {
		this.filters = {};
	}

	public getHousing(): void {
		this._housingService.getAll()
			.subscribe((r: any) => {
				this.data = r.json().data;
				this.page.config.totalItems = this.data.length;
				this.onChangeTable();
			});
	}

	public changePage(p: any): void {
		let start = (p.currentPage - 1) * p.itemsPerPage;
		let end = p.itemsPerPage > -1 ? (start + p.itemsPerPage): this.data.length;
		this.rows = this.data.slice(start, end);
	}

	public onChangeTable(): void {
		this.changePage(this.page.config);
		this.getPages();
	}

	public selectPage(currentPage: number, event ? : MouseEvent): void {
		if(event) {
			event.preventDefault();
		}

		if(this.page.config.currentPage !== currentPage) {
			this.page.config.currentPage = currentPage;
			this.onChangeTable();
		}
	}

	private getPages(): void {
		this.calculateTotalPages();
		let pages:any[] = [];
		
		let maxSize: number = 4;
		
		let startPage = 1;
		let endPage = this.page.totalPages;
		
		startPage = Math.max(this.page.config.currentPage - Math.floor(maxSize / 2), 1);
		endPage = startPage + maxSize - 1;
		
		if(endPage > this.page.totalPages) {
			endPage = this.page.totalPages;
			startPage = endPage - maxSize + 1;
		}
		
		for(let n = startPage; n <= endPage; n++) {
			pages.push({
				number: n,
				text: n.toString(),
				active: n === this.page.config.currentPage
			});
		}

		this.page.pages = pages;
	}

	private calculateTotalPages(): void {
		let totalPages = this.page.config.itemsPerPage < 1 ? 1 : Math.ceil(this.page.config.totalItems / this.page.config.itemsPerPage);
		this.page.totalPages = Math.max(totalPages || 0, 1);
	}
}