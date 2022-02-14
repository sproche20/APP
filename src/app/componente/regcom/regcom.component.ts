import { Component, OnInit } from '@angular/core';
import { Musica } from './../models/models';
import { FirestorageService } from './../../servicios/firestorage.service';
import { InteractionService } from './../../servicios/interaction.service';

import { FirestoreService } from './../../servicios/firestore.service';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-regcom',
  templateUrl: './regcom.component.html',
  styleUrls: ['./regcom.component.scss'],
})
export class RegcomComponent implements OnInit {
  private path ='recomendaciones/';
newimage='';
newfile='';
musicas:Musica[]=[]
newMusica:Musica;
/*newMusica:Musica={
  titulo: null,
  musica: null,
  id: this.firestore.getId()

}*/

enableNewMusica=false;
newImage: any;
newFile: any;

  constructor( public popoverController: PopoverController,
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
  async guardarMusica(){
    const path='recomendaciones';
    const name=this.newMusica.titulo;
    const names=this.newMusica.nomportada;
    const res= await this.firestorageService.uploadMusic( this.newFile,path,name);
    const resp= await this.firestorageService.uploadImage(this.newImage,path,names);
    this.newMusica.musica= res;
    this.newMusica.portada=resp;
    this.firestore.createDoc(this.newMusica, this.path, this.newMusica.id);
    this.interaction.presentToast('guardado exitoso');
    /**---------------------------------------------------- */
    
    
    

  }
  getMusicas(){
    const path='recomendaciones';
    this.firestore.getCollection<Musica>(this.path).subscribe( res=>{
      this.musicas=res;
    })
 
  }
  deletemusic(musica:Musica){
    this.firestore.deleteDoc(this.path,musica.id)
      
  }
  async audio(event:any ) {
    console.log(event);
   if (event.target.files && event.target.files[0]) {
    this.newFile=event.target.files[0];
      const file = URL.createObjectURL(event.target.files[0]); 
      console.log("file ", file);
      console.log("name ", this.newFile.name);
      this.newMusica.titulo = this.newFile.name
      let audio_player = document.getElementById("audio_player1") as HTMLAudioElement
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
      interprete:' ',
      album:'',
      musica: '',
      nomportada:'',
      portada:'',
      id: this.firestore.getId(),
    }
  }

  async newImageUpload(event:any){
    if (event.target.files && event.target.files[0]) {
      this.newImage= event.target.files[0];
      this.newMusica.nomportada = this.newImage.name
      const reader= new FileReader();
      reader.onload=((image)=>{
        this.newMusica.portada=image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
      
    }

 
    

  }


}
