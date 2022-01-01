import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinesPageRoutingModule } from './wines-routing.module';

import { WinesPage } from './wines.page';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinesPageRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
  ],
  declarations: [
    WinesPage,
    MobileMenuComponent,
    AccordionComponent,
    CarrouselComponent,
  ],
})
export class WinesPageModule {}
