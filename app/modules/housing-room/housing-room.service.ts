import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HousingRoomService {
	private _url: string = 'http://api.52tuanzu.com/v1/';

	private urlSearchParams: URLSearchParams;

	public constructor(
		private _http: Http
	) {
		this.urlSearchParams = new URLSearchParams();
	}
}