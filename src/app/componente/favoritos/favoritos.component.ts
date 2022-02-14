import { Musica } from './../models/models';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from './../../servicios/firestore.service';
import { AuthService } from './../../servicios/auth.service';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-recomendaciones',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class RecomendacionesComponent implements OnInit {

  private path='Users/uid/favoritos';
  favoritos:Musica[]=[];
  enableNewMusica=false;
  newMusica:Musica;
    constructor(public popoverController: PopoverController,
    private menu: MenuController,
    private authService:AuthService,
    private firestore: FirestoreService) {}
  ngOnInit() {
    this.loadFavoritos();
  }
  openMenu(){
    this.menu.open();
    
  }
  getMusicas(){
    const path='top';
    this.firestore.getCollection<Musica>(this.path).subscribe( res=>{
      this.favoritos=res;
    })
 
  }
  async loadFavoritos(){
    const uid=await this.authService.getUid();
   const path='Users/'+uid+'/favoritos';
   this.firestore.getCollection<Musica>(path).subscribe(res=>{
     this.favoritos=res;

   })
  }
  nuevo(){
    this.enableNewMusica=true;
    this.newMusica={
      titulo: 'nombre',
      interprete:' ',
      album:'',
      musica: '',
      nomportada:'',
      portada:'',
      id: this.firestore.getId(),
    }
  }



}

