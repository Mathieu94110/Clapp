import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { RecipeInfo } from '../app/models/models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularApiService {
  apiKey: string = environment.apiKey;
  url: string = 'https://api.spoonacular.com/recipes';
  constructor(private http: HttpClient) {}

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
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      `${this.url}/complexSearch?query=${value}&apiKey=${this.apiKey}`,
      {
        headers,
      }
    );
  }

  getRecipeInfo(recipeId: string): Observable<RecipeInfo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .get<RecipeInfo>(
        `${this.url}/${recipeId}/information?includeNutrition=false&apiKey=${this.apiKey}`,
        {
          headers,
        }
      )
      .pipe(catchError(() => of({} as RecipeInfo)));
  }
}
