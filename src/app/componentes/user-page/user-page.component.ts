import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Comerciante} from '../../models/comerciante';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: []
})
export class UserPageComponent implements OnInit {
  stado: Boolean;
  currentUser: Comerciante;

   message= "Loadingg..."
  constructor(private user: AuthService,private router: Router) {
    	  this.stado = JSON.parse(localStorage.getItem('loggedIn'));
    	  this.currentUser = JSON.parse(localStorage.getItem('currUser'));

 }

  ngOnInit() {
  
    if(this.stado==true ){
    	this.router.navigate([''])
    }    
    
  }


}
