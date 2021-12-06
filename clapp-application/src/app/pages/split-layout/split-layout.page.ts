import { Component, OnInit } from '@angular/core';
import { IEquipmentItems } from 'src/app/models/models';

@Component({
  selector: 'app-split-layout',
  templateUrl: './split-layout.page.html',
  styleUrls: ['./split-layout.page.scss'],
})
export class SplitLayoutPage implements OnInit {
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
}
