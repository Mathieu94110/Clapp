import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileMenuComponent } from './mobile-menu.component';
import { MobileMenuRoutingModule } from './mobile-routing.module';
import { AccordionComponent } from '../accordion/accordion.component';

@NgModule({
  entryComponents: [AccordionComponent],
  imports: [IonicModule, CommonModule, FormsModule, MobileMenuRoutingModule],
  declarations: [MobileMenuComponent, AccordionComponent],
  exports: [MobileMenuComponent, AccordionComponent],
})
export class MobileMenuModule {}
