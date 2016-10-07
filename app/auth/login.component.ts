import { Component } from '@angular/core';

import { LoginService } from './login.service';
import { Login }        from './login.model';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	public model: Login = new Login('', '');
	
	public constructor(
		public loginService: LoginService
	) {}

	public onSubmit() {
	};
}