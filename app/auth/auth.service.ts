import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	private url: string = 'http://api.52tuanzu.com/';
	
	public isLoggedIn: boolean = false;
	
	public redirectUrl: string;
	
	public constructor(
		private http: Http
	) {}
	
	public login(data: {email: string; password: string}): Observable<any> {
		return this.http
			.post(this.url + 'staff/login', JSON.stringify(data))
			.map((res: Response) => {
				let j = res.json() || {};
				if(JSON.stringify(j) !== '{}' && j.code === 1) {
					this.isLoggedIn = true;
				} else {
					this.isLoggedIn = false;
				}
				return j;
			})
			.catch(this.handleError);
	}
	
	public logout(): void {
		this.isLoggedIn = false;
	}
	
	private handleError(error: any): any {
		this.isLoggedIn = false;
		console.error(error);
		throw `${error.status} +  -  + ${error.statusText}`;
	}
}