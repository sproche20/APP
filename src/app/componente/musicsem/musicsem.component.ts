import { Component, OnInit } from '@angular/core';
import { Musica } from './../models/models';
import { FirestorageService } from './../../servicios/firestorage.service';
import { InteractionService } from './../../servicios/interaction.service';

import { FirestoreService } from './../../servicios/firestore.service';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-music-sem',
  templateUrl: './musicsem.component.html',
  styleUrls: ['./musicsem.component.scss'],
})
export class MusicSemComponent implements OnInit {
  private path ='top/';
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
