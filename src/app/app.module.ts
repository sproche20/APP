
import { PremioComponent } from './componente/premio/premio.component';
import { EstudianteComponent } from './componente/estudiante/estudiante.component';
import { FalloComponent } from './componente/fallo/fallo.component';
import { FelicidadComponent } from './componente/felicidad/felicidad.component';
import { GastoComponent } from './componente/gasto/gasto.component';

//import { NotasComponent } from './notas/notas.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { DomoticaComponent } from './domotica/domotica.component';
import { CronometroComponent } from './cronometro/cronometro.component';
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



 
@NgModule({
  declarations: [
    AppComponent,InicioComponent,
    SemanalComponent,MusicSemComponent,FavoritosComponent,RecomendacionesComponent,UserComponent,
    RegistroComponent,CronometroComponent,DomoticaComponent,AsistenciaComponent,
    GastoComponent,FelicidadComponent,FalloComponent,EstudianteComponent,PremioComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule,FormsModule,AngularFireModule.initializeApp( environment.firebaseConfig),
  AngularFireAuthModule,AngularFirestoreModule,FormsModule,AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
