import { Component, OnInit, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  customers: any[];
  @ViewChildren('childItem') childItem;

  constructor(private http: HttpClient) {}

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

  toggleSection(index) {
    this.customers[index].open = !this.customers[index].open;
  }
}
