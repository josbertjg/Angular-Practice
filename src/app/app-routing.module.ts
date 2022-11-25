import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"descripcion/:id",
    component:DescripcionComponent
  },
  {
    path:"",
    redirectTo: "header",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"header"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
