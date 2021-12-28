import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinesPageRoutingModule } from './wines-routing.module';

import { WinesPage } from './wines.page';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';
import { AccordionComponent } from '../../components/accordion/accordion.component'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, WinesPageRoutingModule],
  declarations: [WinesPage, MobileMenuComponent, AccordionComponent],
})
export class WinesPageModule {}
