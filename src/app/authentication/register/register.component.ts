import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
 selectFile:File = null;

  constructor(private auth:AuthService,private router: Router) { }
    show: boolean = false;

  ngOnInit() {
   
  }

  onFileSelected(event){
  	  
  	this.selectFile = <File>event.target.files[0];
  	console.log(event.target.files[0])
     
  }

   createComerciante(comerciante){
              var fd = new FormData();
              fd.append('image', this.selectFile);            

   	
   	    comerciante.imagen = (this.selectFile)
             
         console.log(comerciante)

    	this.auth.addComerciante(comerciante)
    	.subscribe(
   		    comerciante =>this.router.navigate(['']),
    		error => this.show = true
    	);
      }

}
