import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { IMenuItems } from 'src/app/models/models';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  @HostBinding('class.navbar-opened') navbarOpened = false;
  menuItems: IMenuItems[];
  burgerImg: string = '../../assets/icon/burger-button-icon.png';
  markImg: string = '../../assets/icon/mark-icon.png';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('../../../assets/data/menu-items.json')
      .subscribe((data: any[]) => {
        this.menuItems = data;
      });
  }
  
  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
}
