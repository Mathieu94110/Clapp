import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipePageRoutingModule } from './recipe-routing.module';
import { RecipePage } from './recipe.page';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { MobileMenuModule } from 'src/app/components/mobile-menu/mobile-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePageRoutingModule,
    MobileMenuModule,
  ],
  declarations: [RecipePage, FilterPipe],
  exports: [RecipePage],
})
export class RecipePageModule {}
