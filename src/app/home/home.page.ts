import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = [
    { url: '/assets/imgs/card1.jpg'},
    { url: '/assets/imgs/card2.jpg'}
  ];

  constructor() {

  }

}
