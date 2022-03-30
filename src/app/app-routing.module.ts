import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemComponent } from './components/pages/item/item.component';
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';

const routes: Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'buscar/:textoBusq', component:BusquedaComponent},
  {path:'**',component:HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
