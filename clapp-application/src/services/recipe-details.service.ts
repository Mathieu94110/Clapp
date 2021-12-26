import { Injectable } from '@angular/core';
import { IFake, RecipeInfo } from '../app/models/models';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeDetailsService {
  recipesDetails: IFake[];
  constructor() {}
  private recipeInfoSub: Subject<RecipeInfo> = new Subject<RecipeInfo>();

  recipeInfoObs: Observable<RecipeInfo> = this.recipeInfoSub.asObservable();

  updateRecipeInfo(recipeInfo: RecipeInfo) {
    this.recipeInfoSub.next(recipeInfo);
  }

  setNavData(navObj) {
    this.recipesDetails = navObj;
  }

  getNavData() {
    return this.recipesDetails;
  }
}
