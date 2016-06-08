import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SuiteService {
	private suitesUrl = '127.0.0.1:8080/suite';

	private http;

	public constructor() {
		this.http = new Http();
	}

	public getSuites() {
		return this.http.get(this.suitesUrl).map(this.extractData).catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		console.log(body);
		return {};
	}

	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}