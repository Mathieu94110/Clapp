import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IMenuItems } from 'src/app/models/models';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  menuItems: IMenuItems[];
  isListItemOpened: boolean = false;
  burgerImg: string = '../../assets/icon/burger-button-icon.png';
  markImg: string = '../../assets/icon/mark-icon.png';

  constructor(private http: HttpClient) {
    this.http
      .get('../../../assets/data/menu-items.json')
      .subscribe((data: any[]) => {
        this.menuItems = data;
      });
  }

  toggleAccordion(): void {
    this.isListItemOpened = !this.isListItemOpened;
  }
}
