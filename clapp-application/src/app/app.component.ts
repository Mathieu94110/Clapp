import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IEquipmentItems } from 'src/app/models/models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  equipmentList: IEquipmentItems[];
  constructor(private http: HttpClient) {
    this.http.get('assets/data/menu-items.json').subscribe((data: any[]) => {
      this.equipmentList = data;
    });
  }
}
