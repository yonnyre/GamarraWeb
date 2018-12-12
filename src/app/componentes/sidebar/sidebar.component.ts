import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Observable } from 'rxjs';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'perfil', title: 'Perfil',  icon:'ti-user', class: '' },
    { path: 'tienda', title: 'Tienda', icon:'ti-home', class: '' },
    { path: 'productos', title: 'Productos',  icon:'ti-clipboard', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' }];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {
    public menuItems: any[];
   

    isLoggedIn$: Observable<boolean>; 

  constructor(public authService: AuthService) { 
}

  ngOnInit() {
  	  this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.isLoggedIn$ = this.authService.isLoggedIn; // {2}  	 
  }

   onLogout(){
    this.authService.logout();                      // {3}
  }

    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }


}
