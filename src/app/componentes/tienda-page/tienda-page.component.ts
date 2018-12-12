import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Observable } from 'rxjs';
import {Comerciante} from '../../models/comerciante';
import {Tienda} from '../../models/tienda';

@Component({
  selector: 'app-tienda-page',
  templateUrl: './tienda-page.component.html',
  styleUrls: []
})
export class TiendaPageComponent implements OnInit {
    currentUser: Comerciante;
    tiendas: Observable<Tienda[]>;


  constructor(private userService: AuthService) { 
    	  this.currentUser = JSON.parse(localStorage.getItem('currUser'));
}

  ngOnInit() {
  	  	   this.tiendas= this.userService.showTienda();

  }

}
