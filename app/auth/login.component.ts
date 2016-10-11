import { Component } from '@angular/core';

import { LoginService } from './login.service';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	private model: Object;

	public constructor(
		public loginService: LoginService
	) {
		this.model = {};
	}

	public onSubmit(from: any) {
		this.loginService.login(from.value);
	}
}