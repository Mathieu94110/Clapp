import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileMenuComponent } from './mobile-menu.component';
import { MobileMenuRoutingModule } from './mobile-routing.module';

@NgModule({
  entryComponents: [],
  imports: [IonicModule, CommonModule, FormsModule, MobileMenuRoutingModule],
  declarations: [MobileMenuComponent],
  exports: [MobileMenuComponent],
})
export class MobileMenuModule {}
