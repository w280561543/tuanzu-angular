import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SuiteService {
	private _url = 'http://127.0.0.1:8080/suite?page=0&size=20&sort=number,desc';

	public constructor(private _http: Http) {}

	public getSuites() {
		return this._http
			.get(this._url)
			.toPromise()
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}