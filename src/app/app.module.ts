import { ReproductorComponent } from './componente/reproductor/reproductor.component';


//import { NotasComponent } from './notas/notas.component';

import { RegistroComponent } from './componente/registro/registro.component';

//import { ServiciosComponent } from './componente/servicios/SrviciosComponent';
import { RecomendacionesComponent } from './componente/recomendaciones/recomendaciones.component';
import { FavoritosComponent } from './componente/favoritos/favoritos.component';
import { MusicSemComponent } from './componente/musicsem/musicsem.component';
import { UserComponent } from './componente/user/user.component';
import { SemanalComponent } from './componente/semanal/semanal.component';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';



import { InicioComponent } from './componente/inicio/inicio.component';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ListmusicaComponent } from './componente/listmusica/listmusica.component';



 
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SemanalComponent,MusicSemComponent,FavoritosComponent,RecomendacionesComponent,UserComponent,
    RegistroComponent,ListmusicaComponent, ReproductorComponent
   ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    RouterModule,
    FormsModule,AngularFireModule.initializeApp( environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule,
  FormsModule,
  AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
