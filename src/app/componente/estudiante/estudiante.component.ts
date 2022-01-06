import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss'],
})
export class EstudianteComponent implements OnInit {
 calificaciones:Lista[]=[];
  input:number=0;
  notas:number=0;
  total:number=0;
  cont:number=0;
  div:number=0;

  constructor() { }

  ngOnInit() {}
  registro(){
   
    this.notas=this.notas+this.input
    this.cont=this.cont+1
    this.total=this.notas/this.cont    
    const nuevo:Lista={
      notas:this.input
    }
    this.calificaciones.push(nuevo)
  };
 
}
interface Lista{
  notas:number;

}
