import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Promise } from 'rxjs/add/operator/toPromise';

import { Suite } from './suite';

@Injectable()
export class SuiteService {
	//private _url = 'http://127.0.0.1:8080/suite?page=0&size=20&sort=number,desc';
	private _url = 'data/suite.json';

	public constructor(private _http: Http) {}

	public getSuites(): Promise<Suite[]> {
		return this._http
			.get(this._url)
			.toPromise()
			//.then(response => response.json() || {})
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		return res.json() || {};
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}