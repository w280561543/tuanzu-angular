import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router }    from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	private model: Object;

	public constructor(
		private authService: AuthService,
		private router: Router
	) {
		this.model = {};
	}

	public onSubmit(form: any) {
		let val = form.value;
		//val['password'] = '';
		//form.resetForm(val);
		this.authService.login(form.value).subscribe((res: Response) => {
			//console.log(res);
			if(this.authService.isLoggedIn) {
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

				// Set our navigation extras object
				// that passes on our global query params and fragment

				// Redirect
				this.router.navigate([redirect], {
					preserveQueryParams: true,
					preserveFragment: true
				});
			}
		});
	}
}