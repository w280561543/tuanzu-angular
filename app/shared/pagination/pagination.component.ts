import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 't-pagination',
    template: `
    	<ul class="pagination pagination-sm mt-0 mb-0">
    		<li class="page-item" [class.disabled]="config.current === 1"  (click)="selectPage(1, $event)"><a class="page-link" href="javascript:void(0);">首页</a></li>
			<li class="page-item" [class.disabled]="config.current === 1"  (click)="selectPage(config.current - 1, $event)"><a class="page-link" href="javascript:void(0);">&laquo;</a></li>
			<li class="page-item" *ngFor="let pg of pages;" [class.active]="pg.active" (click)="selectPage(pg.number, $event)"><a class="page-link" href="javascript:void(0);">{{ pg.text }}</a></li>
			<li class="page-item" [class.disabled]="config.current === config.totalPages"  (click)="selectPage(config.current + 1, $event)"><a class="page-link" href="javascript:void(0);">&raquo;</a></li>
			<li class="page-item" [class.disabled]="config.current === config.totalPages"  (click)="selectPage(config.totalPages, $event)"><a class="page-link" href="javascript:void(0);">尾页</a></li>
		</ul>
    `
})
export class PaginationComponent implements OnChanges {

	@Input() public config: any;

	@Output() public pageChanged: EventEmitter < any > = new EventEmitter < any > (false);

	public pages: Array < any > ;

	public ngOnChanges(): void {
		if(typeof this.config.current !== "undefined") {
			this.getPages();
		}
	}

	public selectPage(page: number, event ? : MouseEvent): void {
		if(event) {
			event.preventDefault();
		}

		if(this.config.current !== page) {
			this.config.current = page;
			this.pageChanged.emit(this.config.current);
			this.getPages();
		}
	}

	private getPages(): void {
		let pages: any[] = [];

		let maxSize: number = 4;

		if(maxSize > this.config.totalPages) {
			maxSize = this.config.totalPages;
		}

		let startPage = Math.max(this.config.current - Math.floor(maxSize / 2), 1);
		let endPage = startPage + maxSize - 1;
		
		if(endPage > this.config.totalPages) {
			endPage = this.config.totalPages;
			startPage = endPage - maxSize + 1;
		}

		for(let n = startPage; n <= endPage; n++) {			
			pages.push({
				number: n,
				text: n.toString(),
				active: n === this.config.current
			});
		}

		this.pages = pages;
	}
}