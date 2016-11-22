import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/catch';

@Injectable()
export class HousingRoomContractService {
	private _url: string = 'http://api.52tuanzu.com/v1';

	private dataSource  = new Subject < Object > ();
	private modelSource = new Subject < Object > ();

	public data$  = this.dataSource.asObservable();
	public model$ = this.modelSource.asObservable();

	public constructor(
		private _http: Http
	) {}
	
	public setData(v: Object) {
		this.dataSource.next(v);
	}

	public setModel(v: Object) {
		this.modelSource.next(v);
	}

	public getOne(housing_room_id: number): Observable < any > {
		return this._http
			.get(`${this._url}/housing_room_contract/${housing_room_id}`)
			.catch(this.handleError);
	}

	private handleError(e: Response | any): any {
		let errMsg: string;
		if(e instanceof Response) {
			errMsg = `${e.status} - ${e.statusText || ''}`;
		} else {
			errMsg = '';
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}