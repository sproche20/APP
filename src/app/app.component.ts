import { UserI } from './componente/models/models';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

import { Component } from '@angular/core';
import { FirestoreService } from '../app/servicios/firestore.service';
import { PopoverController } from '@ionic/angular';
import { FirestorageService } from '../app/servicios/firestorage.service';
import { InteractionService } from '../app/servicios/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login:boolean=false;
  rol: 'visitante' | 'admin' = null;
  img:string;
  constructor(
    public popoverController: PopoverController,
    private firestore: FirestoreService,
    private interaction: InteractionService ,
    public firestorageService:FirestorageService,
    private auth:AuthService,
    private router:Router
  ) {
    this.auth.stateUuser().subscribe(res=>{
      if(res){
        console.log('bienvenido');
        this.login=true ;
        this.getDatosUser(res.uid)
      }else{
        console.log('no esta logeado');
        this.login=false;
      }
    })
  }
  ngOnInit(){
    this.img='https://png.pngitem.com/pimgs/s/8-81255_music-logo-design-png-transparent-png.png' ;
  }
  loginApp() {
    this.login = true;
}
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/user'])

  }
  getDatosUser(uid:string){
    const path='Users';
    const id=uid;
    this.firestore.getDoc<UserI>(path,id).subscribe(res=>{
      console.log('datos->',res);
      if (res){
        this.rol=res.perfil;
      }
    })
  }

}