import { Component, OnInit, ViewChild } from '@angular/core';
import { Musica } from './../models/models';
import { FirestorageService } from './../../servicios/firestorage.service';
import { InteractionService } from './../../servicios/interaction.service';

import { FirestoreService } from './../../servicios/firestore.service';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listmusica',
  templateUrl: './listmusica.component.html',
  styleUrls: ['./listmusica.component.scss'],
})
export class ListmusicaComponent implements OnInit {
  private path ='recomendaciones/';
  musicas:Musica[]=[]
  newMusica:Musica;
  enableNewMusica=false;
    constructor(public popoverController: PopoverController,
      private firestore: FirestoreService,
      private menu: MenuController,
      private interaction: InteractionService ,
      public firestorageService:FirestorageService) { }
  
    ngOnInit() {
      this.getMusicas();
      this.nuevo();
    }
    openMenu(){
      this.menu.open();
    }
    getMusicas(){
      const path='top';
      this.firestore.getCollection<Musica>(this.path).subscribe( res=>{
        this.musicas=res;
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
  
