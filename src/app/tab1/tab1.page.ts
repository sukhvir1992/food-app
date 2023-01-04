import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    slidesPerView: 1.5,
    initialSlide: 1,
    speed: 3000,
    spaceBetween: 10,
    autoplay:true,
    pagination: false,
  };

  constructor() {}

}
