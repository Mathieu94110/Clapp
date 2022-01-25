import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipeDetailsPage } from './recipe-details.page';
import { RecipeDetailsPageRoutingModule } from './recipe-details-routing.module';
import { MobileMenuModule } from 'src/app/components/mobile-menu/mobile-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailsPageRoutingModule,
    MobileMenuModule,
  ],
  declarations: [RecipeDetailsPage],
  exports: [RecipeDetailsPage],
})
export class RecipeDetailsPageModule {}
