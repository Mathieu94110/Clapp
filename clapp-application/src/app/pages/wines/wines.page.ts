import { Component } from '@angular/core';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.page.html',
  styleUrls: ['./wines.page.scss'],
})
export class WinesPage {
  winesCategories: any = [];

  constructor() {
    fetch('assets/data/fake-wines-items.json')
      .then((response) => response.json())
      .then((data) => {
        this.winesCategories = data;
      });
  }
}
