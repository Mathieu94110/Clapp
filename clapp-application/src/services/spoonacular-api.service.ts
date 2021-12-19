import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularApiService {
  apiKey: string = environment.apiKey;
  url: string = 'https://api.spoonacular.com/recipes/complexSearch';
  constructor(private http: HttpClient) {}

  searchRecipes(search: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(`${this.url}?query=${search}&apiKey=${this.apiKey}`, {
      headers,
    });
  }
}
