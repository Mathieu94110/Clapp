import { Component, OnInit } from '@angular/core';
import { IEquipmentItems } from 'src/app/models/models';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-split-layout',
  templateUrl: './split-layout.page.html',
  styleUrls: ['./split-layout.page.scss'],
})
export class SplitLayoutPage implements OnInit {
  @HostBinding('class.navbar-opened') navbarOpened = false;

  burgerImg: string = '../../assets/icon/burger-button-icon.png';
  markImg: string = '../../assets/icon/mark-icon.png';
  constructor() {}

  ngOnInit() {}

  equipmentList: IEquipmentItems[] = [
    {
      path: '/app/defibrillators',
      title: 'defibrillateurs',
    },
    {
      path: '/app/orders',
      title: 'commandes',
    },
  ];

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
}
