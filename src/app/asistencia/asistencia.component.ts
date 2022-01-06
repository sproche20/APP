import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  estudiantes: AsitenciaI[]=[];
  nombre: string='';
  constructor() { }

  ngOnInit() {}
  registrar(){
    const nuevo: AsitenciaI={
      nombre: this.nombre,
      time: new Date()

    };
    this.estudiantes.push(nuevo)
    this.nombre=" ";
  }
  remove(index:number){
    this.estudiantes.splice(index);

  }

}
interface AsitenciaI{
  nombre: string;
  time: Date;


}
