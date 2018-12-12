import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Importacion de Authentication
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
//Importacion de Componentes
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { UserPageComponent } from './componentes/user-page/user-page.component';
import { TiendaPageComponent } from './componentes/tienda-page/tienda-page.component';
import { ProductosPageComponent } from './componentes/productos-page/productos-page.component';
import { ProductoRegisterComponent } from './componentes/producto-register/producto-register.component';

//Importacion de Servicios
import { AuthService } from './services/auth.service';
//Importacion de Guards
import { AuthGuard } from './guards/auth.guard';

//Añadiendo rutas 
//Las rutas nos indicara al enrutador qué vista mostrar 
const appRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',canActivate:[AuthGuard],
  children:[
  {path: 'perfil' , component:UserPageComponent},
  {path: 'tienda', component:TiendaPageComponent},
  {path: 'productos', component:ProductosPageComponent},
  {path: 'productosregister', component:ProductoRegisterComponent}

  ]

  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    UserPageComponent,
    TiendaPageComponent,
    ProductosPageComponent,
    ProductoRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
