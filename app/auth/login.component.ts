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
		private _authService: AuthService,
		private _router: Router
	) {
		this.model = {};
	}

	public onSubmit(form: any) {
		this._authService.login(form.value).subscribe((j: any) => {
			this.message = '';
			if(this._authService.isLoggedIn) {
				console.log(j);
				let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/dashboard';

				// Redirect
				this._router.navigate([redirect]);
			} else {
				this.message = j.message;
			}
		});
	}
	
}