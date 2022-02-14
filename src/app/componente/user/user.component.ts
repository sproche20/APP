import { InteractionService } from './../../servicios/interaction.service';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit {
  constructor(private auth:AuthService,
              private interaction:InteractionService,
              private router:Router) { 

  }


  ngOnInit() {}
  credenciales= {
    correo: null,
    password: null,
  }
  async  login(){

    //await this.interaction.presentLoading('ingresando...')
    console.log('credenciales->',this.credenciales);
    const res= await this.auth.login(this.credenciales.correo,this.credenciales.password).catch(error=>{
      console.log("error");
      this.interaction.closeLoading();
      this.interaction.presentToast('usuario o contraseña invalido ')
    
    
    });
    if (res){
      console.log('res->',res);
      this.interaction.closeLoading();
       this.interaction.presentToast('Bienvenido');
       this.router.navigate(['/listmusica'])

    }
  }
  
}
  



