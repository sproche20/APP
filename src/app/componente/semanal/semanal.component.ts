
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.scss'],
})
export class SemanalComponent implements OnInit {

  constructor(public popoverController: PopoverController,private menu: MenuController) {}
  ngOnInit() {}
  openMenu(){
    this.menu.open();
  }
 

}
