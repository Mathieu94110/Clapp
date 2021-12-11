import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefibrillatorsPageRoutingModule } from './defibrillators-routing.module';

import { DefibrillatorsPage } from './defibrillators.page';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefibrillatorsPageRoutingModule,
  ],
  declarations: [DefibrillatorsPage, MobileMenuComponent],
  exports: [DefibrillatorsPage],
})
export class DefibrillatorsPageModule {}
