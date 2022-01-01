import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { RecipeInfo } from '../app/models/models';
import { catchError } from 'rxjs/operators';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularApiService {
  url: string = 'https://api.spoonacular.com/recipes';
  constructor(private http: HttpClient, private wineService: WineService) {}

  search(terms: Observable<string>) {
    console.log(terms);
    return terms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term) => this.searchRecipes(term))
    );
  }

  searchRecipes(term) {
    const value = term.detail.value;

    return this.http.get(`${this.url}/complexSearch?query=${value}`);
  }

  getRecipeInfo(recipeId: string): Observable<RecipeInfo> {
    return this.http
      .get<RecipeInfo>(
        `${this.url}/${recipeId}/information?includeNutrition=false`
      )
      .pipe(catchError(() => of({} as RecipeInfo)));
  }

  getWinePairing(food: string, maxPrice: number) {
    return this.http.get(
      `https://api.spoonacular.com/food/wine/pairing?food=${food}&maxPrice=${maxPrice}`
    );
  }

  getWineDescription(wine: string) {
    return this.http.get(
      `https://api.spoonacular.com/food/wine/description?wine=${wine}`
    );
  }

  getWineRecommandation(
    wine: string,
    quantity: number,
    maxPrice: number,
    minRating: number
  ): Observable<any> {
    return this.http.get(
      `https://api.spoonacular.com/food/wine/recommendation?wine=${wine}&number=${quantity}&maxPrice=${maxPrice}&minRating=${minRating}`
    );
  }
}
