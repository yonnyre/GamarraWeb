import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	 stado: Boolean
	constructor(private auth:AuthService,private router: Router){7
		  	  this.stado = JSON.parse(localStorage.getItem('loggedIn'));
	}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
        return this.auth.isLoggedIn
        .pipe(
        	take(1),
        	map((isLoggedIn:boolean) => {
        	if(!isLoggedIn){
        		this.router.navigate(['/login']);
        		return false;
        	}
        	return true;
        })
       )
  }
}
