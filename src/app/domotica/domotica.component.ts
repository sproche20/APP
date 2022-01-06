import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domotica',
  templateUrl: './domotica.component.html',
  styleUrls: ['./domotica.component.scss'],
})
export class DomoticaComponent implements OnInit {
  focos:FocoI[]=[
    {
      nombre: "comedor",
      estado:false,
      pin:13
    },
    {
      nombre: "sala",
      estado:false,
      pin:12
    },
    {
      nombre: "dormitorio",
      estado:false,
      pin:11
    },
    {
      nombre: "cocina",
      estado:false,
      pin:10
    },
    
    
    
    
  ]
  constructor() { }

  ngOnInit() {}
  prender(foco:FocoI){
    foco.estado=true;
  }
  pagar(foco:FocoI){
    foco.estado=false;
  }

}
interface FocoI
{
  nombre: string;
  estado: boolean;
  pin:number;
}