import { Component, Input } from '@angular/core';

export interface PaginationConfig {
	firstText: string;
	previousText: string;
	nextText: string;
	lastText: string;
}

const paginationConfig: PaginationConfig = {
	firstText: '首页',
	previousText: '<<',
	nextText: '>>',
	lastText: '尾页'
}

@Component({
	selector: 'pagination',
	template: `
	<ul class="pagination">
		<li><a href="javascript:void(0);" (click)="selectPage($event)"><span>{{ getText('first') }}</span></a></li>
		<li><a href="javascript:void(0);" (click)="selectPage($event)"><span>{{ getText('previous') }}</span></a></li>
		<li><a href="javascript:void(0);"><span>1</span></a></li>
		<li><a href="javascript:void(0);" (click)="selectPage($event)"><span>{{ getText('next') }}</span></a></li>
		<li><a href="javascript:void(0);" (click)="selectPage($event)"><span>{{ getText('last') }}</span></a></li>
	</ul>`
})
export class PaginationComponent {
	private _config: PaginationConfig;

	@Input
	public get config(): PaginationConfig {
		return this._config;
	}

	public set config(v: PaginationConfig) {
		for(let i in v) {
			this._config[i] = v[i];
		}
	}

	public constructor() {
		this._config = paginationConfig;
	}

	public getText(key: string): string {
		return this.config[key + 'Text'];
	}

	private selectPage(e ? : MouseEvent): void {
		if(e) {
			e.preventDefault();
		}
	}
}