import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HousingService {
	private _url: string = 'http://api.52tuanzu.com/v1';

	private urlSearchParams: URLSearchParams;

	public constructor(
		private _http: Http
	) {
		this.urlSearchParams = new URLSearchParams();
	}

	public setPage(v: any): void {
		this.urlSearchParams.set('page', v);
	}

	public setFilters(v: string): void {
		this.urlSearchParams.set('filters', v);
	}
	
	public deleteFilters(): void {
		this.urlSearchParams.delete('filters');
	}

	public getAll(): Observable < any > {
		return this._http
			.get(this._url + '/housing', {
				search: this.urlSearchParams
			})
			.catch(this.handleError);
	}

	private handleError(e: any): any {
		console.error(e);
		throw `${e.status} +  -  + ${e.statusText}`;
	}
}