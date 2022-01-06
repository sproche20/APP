import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  img:string;
  constructor() {}
  ngOnInit(){
    this.img='https://png.pngitem.com/pimgs/s/8-81255_music-logo-design-png-transparent-png.png' ;
  }

}
