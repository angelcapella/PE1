import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { ProductoViewComponent } from './producto-view/producto-view.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InformesViewComponent } from './informes-view/informes-view.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    UsersViewComponent,
    ProductoViewComponent,
    InformesViewComponent,
    LoginButtonComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    HttpClientModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
