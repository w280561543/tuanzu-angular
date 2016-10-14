import { Injectable }       from '@angular/core';
import {
	Router, Route,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
	CanActivate, CanLoad
}							from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
	public constructor(
		private authService: AuthService,
		private router :Router
	) {}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;

		return this.checkLogin(url);
	}

	public canLoad(route: Route): boolean {
		let url = `/${route.path}`;

		return this.checkLogin(url);
	}

	public checkLogin(url: string): boolean {
		if(this.authService.isLoggedIn) { return true; }

		// Store the attempted URL for redirecting
		this.authService.redirectUrl = url;

		// Navigate to the login page with extras
		this.router.navigate(['/login']);
		return false;
	}
}