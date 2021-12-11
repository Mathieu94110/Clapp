import { Component, OnInit } from '@angular/core';
import { ICustomers } from 'src/app/models/models';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements OnInit {
  customers: ICustomers[];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('../../../assets/data/customers.json')
      .subscribe((data: any[]) => {
        this.customers = data;
      });
  }
}
