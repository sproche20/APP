import { Component, Input, OnInit } from '@angular/core';
import { LikeI, Musica, UserI } from './../models/models';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from './../../servicios/firestore.service';
import { AuthService } from './../../servicios/auth.service';


@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss'],
})
export class MusicaComponent implements OnInit {
like: boolean=false;
@Input() musica:Musica;
@Input() user:UserI;

  constructor(
    public popoverController: PopoverController,private authService:AuthService,
    private firestore: FirestoreService,
    private menu: MenuController
    ) {
    
   }


  ngOnInit() {
    console.log("el input es ->",this.musica)
    this.loadLikesUser();    
  }
  openMenu(){
    this.menu.open();
    
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
   this.addFavorito(data.like)

 }
 async loadLikesUser(){
     const path='musicas/'+ this.musica.id +'/likes';
     const uid =await this.authService.getUid();
     this.firestore.getDoc<LikeI>(path,uid).subscribe(res=>{
       if (res) {
        this.like =res.like
       }
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
 async addFavorito(estado:boolean){
   
   const uid=await this.authService.getUid();
   const path='Users/'+uid+'/favoritos';
   if(estado){
        this.firestore.createDoc(this.musica,path,this.musica.id)

   }else{
     this.firestore.deleteDoc(path,this.musica.id);
   }
 }

 

}
