import { Injectable }       from '@angular/core';
import {
	Router, Route,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
	CanActivate, CanLoad,
	CanActivateChild,
	NavigationExtras
}							from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
	public constructor(
		private authService: AuthService,
		private router :Router
	) {}
	
	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		//console.log('AuthGuard#canActivate called');
		let url: string = state.url;
	
		return this.checkLogin(url);
	}

	public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.canActivate(route, state);
	}
	
	public canLoad(route: Route): boolean {
		let url = `/${route.path}`;
		
		return this.checkLogin(url);
	}
	
	public checkLogin(url: string): boolean {
		if(this.authService.isLoggedIn) { return true; }
		
		// Store the attempted URL for redirecting
		this.authService.redirectUrl = url;
		
		// Create a dummy session id
		let sessionId = 123456789;
		
		// Set our navigation extras object
		// that contains our global query params and fragment
		let navigationExtras: NavigationExtras = {
			queryParams: { 'session_id': sessionId},
			fragment: 'anchor'
		}
		
		// Navigate to the login page with extras
		this.router.navigate(['/login'], navigationExtras);
		return false;
	}
}