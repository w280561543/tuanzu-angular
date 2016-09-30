import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HousingService {

	public constructor(private http: Http) {}

	public getHousing() {
		return this.http.get('http://127.0.0.1:8080/suite?page=0&size=20')
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}
	
	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}