
import { RegistroComponent } from './componente/registro/registro.component';
import { FavoritosComponent } from './componente/favoritos/favoritos.component';
import { MusicSemComponent } from './componente/musicsem/musicsem.component';
import { RecomendacionesComponent } from './componente/recomendaciones/recomendaciones.component';
import { SemanalComponent } from './componente/semanal/semanal.component';

import { InicioComponent } from './componente/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {  UserComponent } from './componente/user/user.component';

const routes: Routes = [
  {
    path: 'inicio',component: InicioComponent,
  },
  {
    path:'semanal',component:SemanalComponent
  },
  {
    path:'user',component:UserComponent
  },
  {
    path:'musicsem',component:MusicSemComponent
  },
  {
    path:'recomendaciones',component:RecomendacionesComponent
  },
  {
    path:'favoritos',component:FavoritosComponent
  },
  {
    path:'registro',component:RegistroComponent
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 