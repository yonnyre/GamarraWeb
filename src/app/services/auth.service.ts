import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Comerciante} from '../models/comerciante';
import {Tienda} from '../models/tienda';
import {Producto} from '../models/producto';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(false); 
  private dat = JSON.parse(localStorage.getItem('currUser') || null)


  constructor(private http:HttpClient,    private router: Router) {

   }


  setDatos(dato: any){
    this.dat = dato
    localStorage.setItem('currUser', JSON.stringify(dato.message))
  }
   
   get isLoggedIn(){
       return this.loggedIn.asObservable();

   }
    

  login(email: string, password : string){
    return this.http.get("https://gamarra-rest-krobawsky.c9users.io/api/v1/login/user/"+email+"/pwd/"+password)
      .pipe(map((response: Response) => response));   
  };

 
  addComerciante(comerciante: Object): Observable<Comerciante[]>{
  	return this.http.post<Comerciante[]>('https://gamarra-rest-krobawsky.c9users.io/api/v1/usuario',comerciante)
  	  .pipe(catchError((error:any)=> Observable.throw(error.json().error || {message:'Error del servidor'})))
  }


  logout() {                           
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    localStorage.removeItem('currUser');
   }

  showTienda(): Observable<Tienda[]>{
    return this.http.get<Tienda[]>("https://gamarra-rest-krobawsky.c9users.io/api/v1/tiendas")
      .pipe(map(res => res));
   }

  showProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>("https://gamarra-rest-krobawsky.c9users.io/api/v1/productos")
      .pipe(map(res => res));
   }


}
