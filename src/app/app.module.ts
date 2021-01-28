import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { ProductoViewComponent } from './producto-view/producto-view.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { InformesViewComponent } from './informes-view/informes-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    UsersViewComponent,
    ProductoViewComponent,
    InformesViewComponent,
    LoginViewComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
