import { Component }        from '@angular/core';
import { Router,
		 NavigationExtras,
}							from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	selector: 'login',
	templateUrl: 'app/auth/login.component.html'
})

export class LoginComponent {
	public message: string;
	
	public constructor(
		public authService: AuthService,
		public router: Router
	) {
		this.setMessage();
	}
	
	public setMessage() {
		this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
	}
	
	public login() {
		this.message = 'Trying to log in ...';
		
		this.authService.login().subscribe(() => {
			this.setMessage();
			if (this.authService.isLoggedIn) {
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
	}
	
	public logout() {
		this.authService.logout();
		this.setMessage();
	}
}