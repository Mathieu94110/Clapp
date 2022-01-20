import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinesPageRoutingModule } from './wines-routing.module';

import { WinesPage } from './wines.page';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { SwiperModule } from 'swiper/angular';
import { WinesDescriptionComponent } from 'src/app/components/wines-description/wines-description.component';
import { WinesAssociationComponent } from 'src/app/components/wines-association/wines-association.component';

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
    WinesDescriptionComponent,
    WinesAssociationComponent,
  ],
})
export class WinesPageModule {}
