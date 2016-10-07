import { Routes } from '@angular/router';

import { AuthGuard }      from './auth-guard.service';
import { AuthService }    from './auth.service';
import { LoginService }   from './login.service';
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
	{ path: 'login', component: LoginComponent}
];

export const authProviders = [
	AuthGuard,
	AuthService,
	LoginService
];