import { PremioComponent } from './componente/premio/premio.component';

import { EstudianteComponent } from './componente/estudiante/estudiante.component';
import { FalloComponent } from './componente/fallo/fallo.component';
import { FelicidadComponent } from './componente/felicidad/felicidad.component';
import { GastoComponent } from './componente/gasto/gasto.component';

import { AsistenciaComponent } from './asistencia/asistencia.component';
import { DomoticaComponent } from './domotica/domotica.component';
import { CronometroComponent } from './cronometro/cronometro.component';
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
  {
    path:'cronometro',component:CronometroComponent
  },
  {
    path:'domotica',component:DomoticaComponent
  },
  {
    path:'asistencia',component:AsistenciaComponent
  },

  {
    path:'gasto',component:GastoComponent
  },
  
  {
    path:'feliz',component:FelicidadComponent
  },

  
  {
    path:'fallo',component:FalloComponent
  },
  {
    path:'estudiante',component:EstudianteComponent
  },
  {
    path:'premio',component:PremioComponent
  },





  

  

  
  

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 