import { Component, OnInit, ViewChildren } from '@angular/core';
import { ICustomers } from 'src/app/models/models';
import { HttpClient } from '@angular/common/http';
// import { Platform } from '@ionic/angular';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  customers: any[]; /* ICustomers[]; */
  // automaticClose = false;
  selected: any;
  @ViewChildren('childItem') childItem;

  // isShown: { [key: number, opened: boolean] } = false;

  // mobileScreen: boolean;

  // screenSize: any = {
  //   width: 0,
  //   height: 0,
  // };

  constructor(private http: HttpClient /* , private platform: Platform */) {
    // this.getScreenSize();
    // this.platform.ready().then(() => {
    //   this.screenSize.width = this.platform.width();
    //   this.screenSize.height = this.platform.height();
    // });
  }

  ngOnInit(): void {
    this.http
      .get('../../../assets/data/customers.json')
      .subscribe((data: any[]) => {
        this.customers = data;
      });
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  // trackItems(index: number, itemObject: any) {
  //   return itemObject.id;
  // }

  toggleSection(index) {
    this.customers[index].open = !this.customers[index].open;
  }

  toggleItem(index) {
    this.customers[index].open = !this.customers[index].open;
  }

  
}
