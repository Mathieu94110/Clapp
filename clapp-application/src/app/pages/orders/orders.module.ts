import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrdersPageRoutingModule],
  declarations: [OrdersPage,MobileMenuComponent],
  exports: [OrdersPage],
})
export class OrdersPageModule {}
