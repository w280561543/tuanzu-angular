import { Injectable }       from '@angular/core';
import { Router,
		 NavigationExtras
}							from '@angular/router';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { AuthService } from './auth.service';

import { Staff }       from './staff.model';

@Injectable()
export class LoginService {
	//public url: string = '';
	public message: string;

	public constructor(
		private authService: AuthService,
		private router: Router,
		private http: Http
	) {
		this.setMessage();
	}

	public setMessage() {
		this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
	}

	public login(data: {email: string; password: string}): Observable<Staff> {
		console.log(data);
		/*
		this.message = 'Trying to log in ...';

		this.authService.login().subscribe(() => {
			this.setMessage();
			if(this.authService.isLoggedIn) {
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

				// Set our navigation extras object
				// that passes on our global query params and fragment
				let navigationExtras: NavigationExtras = {
					preserveQueryParams: true,
					preserveFragment: true
				};

				// Redirect the user
				this.router.navigate([redirect], navigationExtras);
			}
		});
		*/
	}

	public logout() {
		this.authService.logout();
		this.setMessage();
	}
}