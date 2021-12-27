import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRecipesPageRoutingModule } from './my-recipes-routing.module';

import { MyRecipesPage } from './my-recipes.page';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyRecipesPageRoutingModule],
  declarations: [MyRecipesPage, MobileMenuComponent],
  exports: [MyRecipesPage],
})
export class MyRecipesPageModule {}
