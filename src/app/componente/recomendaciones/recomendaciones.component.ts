import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.scss'],
})
export class RecomendacionesComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}
  ngOnInit() {}


}

