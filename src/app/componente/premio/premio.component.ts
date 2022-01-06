import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.scss'],
})
export class PremioComponent implements OnInit {
  input: number = 0;
  puntos: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {}

  registrar(){
    this.puntos = this.puntos + this.input
  }

  nav(){
    this.router.navigate(['/felicidades'])
  }

}