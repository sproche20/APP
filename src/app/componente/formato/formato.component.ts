import { Component,Input, OnInit } from '@angular/core';
import { LikeI, Musica, UserI } from './../models/models';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from './../../servicios/firestore.service';
import { AuthService } from './../../servicios/auth.service';

@Component({
  selector: 'app-formato',
  templateUrl: './formato.component.html',
  styleUrls: ['./formato.component.scss'],
})
export class FormatoComponent implements OnInit {
  like: boolean=false;
@Input() musica:Musica;

  constructor(
    public popoverController: PopoverController,private authService:AuthService,
    private firestore: FirestoreService,
    private menu: MenuController
    ) {
    
   }


  ngOnInit() {
    console.log("el input es ->",this.musica)
  }
  openMenu(){
    this.menu.open();
  }
  
 


}
