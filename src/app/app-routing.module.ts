import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { InformesViewComponent } from './informes-view/informes-view.component';
import { ProductoViewComponent } from './producto-view/producto-view.component';
import { UsersViewComponent } from './users-view/users-view.component';


const routes: Routes = [
  {path:'home', component:HomeViewComponent},
  {path:'informes', component:InformesViewComponent},
  {path:'producto', component:ProductoViewComponent},
  {path:'users', component:UsersViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
