import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	private model: Object;
	
	public message: string = '';
	
	public constructor(
		private authService: AuthService,
		private router: Router
	) {
		this.model = {};
	}

	public onSubmit(form: any) {
		this.authService.login(form.value).subscribe((j: any) => {
			this.message = '';
			if(this.authService.isLoggedIn) {
				console.log(j);
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

				// Redirect
				this.router.navigate([redirect]);
			} else {
				this.message = j.message;
			}
		});
	}
	
}