import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefibrillatorsPageRoutingModule } from './defibrillators-routing.module';

import { DefibrillatorsPage } from './defibrillators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefibrillatorsPageRoutingModule,
  ],
  declarations: [DefibrillatorsPage],
  exports: [DefibrillatorsPage],
})
export class DefibrillatorsPageModule {}
