import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {Tienda} from '../../models/tienda';
import {Producto} from '../../models/producto';
import {Comerciante} from '../../models/comerciante';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: []
})
export class ProductosPageComponent implements OnInit {
    currentUser: Comerciante;
    productos: Observable<Producto[]>;
    tiendas: Observable<Tienda[]>;

  constructor(private userService: AuthService) {
    	  this.currentUser = JSON.parse(localStorage.getItem('currUser'));

   }

  ngOnInit() {
  	  	  	   this.tiendas= this.userService.showTienda();
     	  	   this.productos= this.userService.showProductos();
  }

}
