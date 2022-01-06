import { FirestorageService } from './../../servicios/firestorage.service';
import { InteractionService } from './../../servicios/interaction.service';

import { FirestoreService } from './../../servicios/firestore.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Musica } from '../models/models';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})

export class InicioComponent implements OnInit {
private path ='musicas/';
musicas:Musica[]=[]
newMusica:Musica;
/*newMusica:Musica={
  titulo: null,
  musica: null,
  id: this.firestore.getId()

}*/

enableNewMusica=false;
newFile: any;

  
  constructor(public popoverController: PopoverController,
    private firestore: FirestoreService,
    private menu: MenuController,
    private interaction: InteractionService ,
    public firestorageService:FirestorageService) {

    }
  
  
    ngOnInit() {
            this.nuevo();

  }
  openMenu(){
    this.menu.open();
  }
  async guardarMusica(){
    const path='musicas';
    const name=this.newMusica.titulo;
    const res= await this.firestorageService.uploadMusic( this.newMusica.musica,path,name );
    this.newMusica.musica= res;
    this.firestore.createDoc(this.newMusica, this.path, this.newMusica.id);
    this.interaction.presentToast('guardado exitoso');
  }
  



  async audio(event) {
   

   if (event.target.files && event.target.files[0]) {
    this.newFile=event.target.files[0];
      const file = URL.createObjectURL(event.target.files[0]); 
      console.log("file ", file);
      console.log("name ", this.newFile.name)
      this.newMusica.titulo = this.newFile.name
      
      let audio_player = document.getElementById("audio_player") as HTMLAudioElement
      audio_player.src = file; 
      audio_player.play();

      const reader = new FileReader();
      reader.onload = ((audio) => {
        
          this.newMusica.musica = audio.target.result as string;
          console.log("audio -", this.newMusica);
          
      });
      reader.readAsDataURL(event.target.files[0]);
      
    }


  }
  nuevo(){
    this.enableNewMusica=true;
    this.newMusica={
      titulo: 'nombre',
      musica: null,
      id: this.firestore.getId()
    }

 

  }


}


