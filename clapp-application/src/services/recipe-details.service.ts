import { Injectable } from '@angular/core';
import { IFake } from '../app/models/models';

@Injectable({
  providedIn: 'root',
})
export class RecipeDetailsService {
  recipesDetails: IFake[];
  constructor() {}

  setNavData(navObj) {
    this.recipesDetails = navObj;
  }

  getNavData() {
    return this.recipesDetails;
  }
}
