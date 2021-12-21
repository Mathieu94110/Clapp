import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularApiService {
  apiKey: string = environment.apiKey;
  url: string = 'https://api.spoonacular.com/recipes/complexSearch';
  constructor(private http: HttpClient) {}

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((value) => this.searchRecipes(value))
    );
  }

  searchRecipes(value) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(`${this.url}?query=${value}&apiKey=${this.apiKey}`, {
      headers,
    });
  }
}
