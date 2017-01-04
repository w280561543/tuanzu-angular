import {
	Component,
	OnInit
} from '@angular/core';

import {
	HousingService
} from '../housing.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-dashboard.component.html'
})
export class HousingDashboardComponent implements OnInit {
	public filters: any = {};

	public page: any = {
		"config": {
			"currentPage": 1,
			"itemsPerPage": 15,
			"totalItems": 0
		},
		"rows": [],
		"filteredData": [],
		"isOpen": [],
		"totalPages": 0,
		"pages": []
	};

	private data: any = {};

	public constructor(
		private _housingService: HousingService
	) {}

	public ngOnInit(): void {
		this.getHousing();
	}

	public getHousing(): void {
		this._housingService.getAll()
			.subscribe((r: any) => {
				this.data = r.json().data;
				this.page.config.totalItems = this.data.length;
				this.page.totalPages = this.calculateTotalPages(this.page.config);
				this.changeTable();
			});
	}

	public onChangeFilter(): void {
		if(JSON.stringify(this.filters) !== '{}') {
			let filteredData: Array < any > = this.data;
			for(let f in this.filters) {
				if(this.filters[f]) {
					filteredData = filteredData.filter((i: any) => {
						return i[f].match(this.filters[f]);
					});
				}
			}
			this.page.config.totalItems = filteredData.length;
			this.page.totalPages = this.calculateTotalPages(this.page.config);
			this.page.config.currentPage = 1;
			this.page.filteredData = filteredData;
			this.changeTable();
		}
	}

	public selectPage(currentPage: number, event ? : MouseEvent): void {
		if(event) {
			event.preventDefault();
		}

		if(this.page.config.currentPage !== currentPage) {
			this.page.config.currentPage = currentPage;
			this.changeTable();
		}
	}
	
	private changeTable(): void {
		this.page.rows = this.changePage(this.page.config, this.page.filteredData.length > 0 ? this.page.filteredData : this.data);
		this.page.pages = this.getPages(this.page);
	}

	private calculateTotalPages(pc: any): number {
		return Math.max(pc.itemsPerPage < 1 ? 1 : Math.ceil(pc.totalItems / pc.itemsPerPage) || 0, 1);
	}

	private changePage(pc: any, d: Array < any > ): Array < any > {
		let start = (pc.currentPage - 1) * pc.itemsPerPage;
		let end = pc.itemsPerPage > -1 ? (start + pc.itemsPerPage) : d.length;
		return d.slice(start, end);
	}

	private getPages(p: any): Array < any > {
		let pages: any[] = [];

		let maxSize: number = 4;

		let startPage = 1;
		let endPage = p.totalPages;

		startPage = ((Math.ceil(p.config.currentPage / maxSize) - 1) * maxSize) + 1;
		endPage = Math.min(startPage + maxSize - 1, p.totalPages);

		for(let n = startPage; n <= endPage; n++) {
			pages.push({
				number: n,
				text: n.toString(),
				active: n === p.config.currentPage
			});
		}

		return pages;
	}
}