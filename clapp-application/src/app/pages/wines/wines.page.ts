import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.page.html',
  styleUrls: ['./wines.page.scss'],
})
export class WinesPage {
  winesCategories: any = [];
  public getScreenWidth: number;
  public getScreenHeight: number;
  isRecommandationListItemOpened: boolean = false;
  constructor() {
    fetch('assets/data/fake-wines-items.json')
      .then((response) => response.json())
      .then((data) => {
        this.winesCategories = data;
      });
  }

  ngAfterContentInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  addItem(value: boolean) {
    this.isRecommandationListItemOpened = value
  }
}
