import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent implements OnInit {

  constructor(private menu: MenuController,) { }

  ngOnInit() {}
  openMenu(){
    this.menu.open();
  }

}
