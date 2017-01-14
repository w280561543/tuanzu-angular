import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HousingRoomService {
	private _url: string = 'http://api.52tuanzu.com/v1';

	public constructor(
		private _http: Http
	) {}

	public getAll(): Observable < any > {
		return this._http
			.get(this._url + '/housing_room')
			.catch(this.handleError);
	}

	private handleError(e: any): any {
		console.error(e);
		throw `${e.status} +  -  + ${e.statusText}`;
	}
}