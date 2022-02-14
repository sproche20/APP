import { RegtopComponent } from './componente/regtop/regtop.component';
import { RegcomComponent } from './componente/regcom/regcom.component';
import { MusicaComponent } from './componente/musica/musica.component';

import { RegistroComponent } from './componente/registro/registro.component';
import { MusicSemComponent } from './componente/musicsem/musicsem.component';
import { RecomendacionesComponent } from './componente/favoritos/favoritos.component';
import { SemanalComponent } from './componente/semanal/semanal.component';


import { InicioComponent } from './componente/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {  UserComponent } from './componente/user/user.component';
import { ListmusicaComponent } from './componente/listmusica/listmusica.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs/operators';
import { canActivate } from '@angular/fire/compat/auth-guard';
const uidAdmin='xwXfkVblY4VFZfTxppgmUyFLDx93';
const onlyAdmin = () => map((user:any) => !!user && user.uid === uidAdmin);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },

  {
    path: 'inicio',component: InicioComponent,...canActivate(onlyAdmin)
  },
  {
    path:'semanal',component:SemanalComponent, canActivate: [AngularFireAuthGuard]
  },

  {
    path:'user',component:UserComponent
  },
  {
    path:'musicsem',component:MusicSemComponent, canActivate: [AngularFireAuthGuard]
  },
  {
    path:'favoritos',component:RecomendacionesComponent, canActivate: [AngularFireAuthGuard]
  },
  {
    path:'registro',component:RegistroComponent
  },
  {
    path:'listmusica',component:ListmusicaComponent, canActivate: [AngularFireAuthGuard]
  }, 
  {
    path:'regrecomendados',component:RegcomComponent, ...canActivate(onlyAdmin)
  }, 
  {
    path:'regtop',component:RegtopComponent, ...canActivate(onlyAdmin)
  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 