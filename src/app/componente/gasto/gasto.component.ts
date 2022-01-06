import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.scss'],
})
export class GastoComponent implements OnInit {
input :number=0;
input2:number=0;
ingresos: number=0;
gastos: number=0;
promedio: number=0;
cont:number=0;
  constructor() { }

  ngOnInit() {}
  registrar(){
    this.ingresos=this.ingresos+this.input
    this.cont=this.cont++
  }
  gastos1(){
    this.gastos=this.gastos+this.input2
    this.cont=this.cont++

  }
  total(){
    this.promedio=this.ingresos-this.gastos
    console.log("total",this.promedio)
  }

}
