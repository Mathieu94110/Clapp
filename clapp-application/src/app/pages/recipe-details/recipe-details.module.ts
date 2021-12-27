import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipeDetailsPage } from './recipe-details.page';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';
import { RecipeDetailsPageRoutingModule } from './recipe-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailsPageRoutingModule,
  ],
  declarations: [RecipeDetailsPage, MobileMenuComponent],
  exports: [RecipeDetailsPage],
})
export class RecipeDetailsPageModule {}
