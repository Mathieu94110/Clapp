import { Component, OnInit } from '@angular/core';
import { IEquipmentItems } from 'src/app/models/models';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class.navbar-opened') navbarOpened = false;

  burgerImg: string = '../../assets/icon/burger-button-icon.png';
  markImg: string = '../../assets/icon/mark-icon.png';
  constructor() {}

  ngOnInit() {}

  equipmentList: IEquipmentItems[] = [
    {
      path: '/defibrillators',
      title: 'defibrillateurs',
    },
    {
      path: '/orders',
      title: 'commandes',
    },
  ];

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
}
