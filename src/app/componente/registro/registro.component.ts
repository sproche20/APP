import { Router } from '@angular/router';
import { InteractionService } from './../../servicios/interaction.service';
import { FirestoreService } from './../../servicios/firestore.service';
import { AuthService } from './../../servicios/auth.service';
import { UserI } from './../models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  
    datos: UserI ={
    nombre:null,
    apellido:null,
    correo:null,
    uid:null,
    password:null,
    perfil:'visitante'
  }
   

  constructor(private auth:AuthService,
    private firestore:FirestoreService,
    private interaction: InteractionService ,
    private router:Router) { }

  ngOnInit() {}
 async registrar(){
   
    console.log('datos->',this.datos)
     const res= await this.auth.registroUser(this.datos).catch(error=>{
      console.log("error");
    })
    if (res){
      console.log('usuario registrado');
      const path='Users';
      const id= res.user.uid;
      this.datos.uid=id;
      this.datos.password=null
      await this.firestore.createDoc(this.datos,path,id).catch
      this.interaction.presentToast('registro exitoso');
      
      this.router.navigate(['/inicio'])
    }
  }

}
