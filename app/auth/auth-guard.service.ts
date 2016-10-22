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
		private _authService: AuthService,
		private _router :Router
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
		// TODO 关闭用户验证,方便用于开发.
		/*
		if(this._authService.isLoggedIn) { return true; }

		// Store the attempted URL for redirecting
		this._authService.redirectUrl = url;

		// Navigate to the login page with extras
		this._router.navigate(['/login']);
		return false;
		*/
		return true;
	}
}