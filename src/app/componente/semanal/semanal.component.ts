import { AuthService } from './../../servicios/auth.service';
import { LikeI, Musica } from './../models/models';

import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from './../../servicios/firestore.service';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.scss'],
})
/**
 * 
 */
export class SemanalComponent implements OnInit {
like: boolean=false;
private path ='musicas/';
newImage='';
newfile='';
musicas:Musica[]=[];
newMusica:Musica;
enableNewMusica=false;
newFile: any; 

  constructor(public popoverController: PopoverController,private menu: MenuController,
    private firestore: FirestoreService,
    private authService:AuthService
    ) {}
  ngOnInit() {
      this.nuevo();
      this.getMusicas();
      this.loadLikesUser();    


  }
  openMenu(){
    this.menu.open();
    
  }



  getMusicas(){
    this.firestore.getCollection<Musica>(this.path).subscribe( res=>{
      console.log('las musicas son -> ', res);
      
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
  async givelike(musica:Musica){
     console.log("giv like");
    
    const path='musicas/'+ musica.id +'/likes';
    const uid= await this.authService.getUid();
    const data: LikeI={
      uid,
      user:null,
      fecha:new Date(),
      like:!this.like
    }
    this.firestore.createDoc(data,path,uid);
    this.addLike(data.like,musica);
  }
  async loadLikesUser(){
    this.musicas.forEach(async(musica)=>{
      const path='musicas/'+ musica.id +'/likes';
      const uid =await this.authService.getUid();
      this.firestore.getDoc<LikeI>(path,uid).subscribe(res=>{
        if (res) {
          musica["loadlike"]=res.like
        }
      })
    })
 


  }
  addLike(estado:boolean , musica:Musica){
    const path='musicas/';
    let numLikes=0;
    if (musica.likes) {
      numLikes=musica.likes;
    }
    const data={
      likes:estado ? numLikes+1:numLikes-1 
    }
    if (data.likes<0) {
      data.likes=0;
      
    }
    this.firestore.updateDoc(data,path, musica.id)
  }
}
