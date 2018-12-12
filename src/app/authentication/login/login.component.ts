import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { SidebarComponent } from '../../componentes/sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  stado: Boolean;
  navbar: SidebarComponent;
  public form= {
		email : null,
		password : null
	};

  constructor(private router: Router,private authService: AuthService) { 
  	  this.stado = JSON.parse(localStorage.getItem('loggedIn'));

  }

  ngOnInit() {

  	          this.authService.logout();
  }  	      

   onSubmit(){

  	this.authService.login(this.form.email ,this.form.password).subscribe(
  		data => {
         var success = data.type.toString();
  		 if( success == "success"){ 
            this.authService.loggedIn.next(true)
            this.router.navigate(['perfil'])
            this.authService.setDatos(data)
         }else {
           console.log(Error);
         }
  		 });
 
  }


}
