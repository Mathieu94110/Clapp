import { Component, OnInit } from '@angular/core';
import { IEquipmentItems } from 'src/app/models/models';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

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
}
