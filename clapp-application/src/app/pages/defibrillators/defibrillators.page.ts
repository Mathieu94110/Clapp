import {
  AfterContentInit,
  HostListener,
  Component,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  fromEvent,
  Subscription,
  BehaviorSubject,
  Observable,
  Subject,
} from 'rxjs';
import { SpoonacularApiService } from 'src/services/spoonacular-api.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import * as fakeData from '../../../assets/data/basic-recipes.json';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

interface IRecipesObject {
  number: number;
  offset: number;
  results: IRecipes;
  totalResults: number;
}
interface IRecipes {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements AfterContentInit {
  public getScreenWidth: number;
  public getScreenHeight: number;
  public recipes: any;
  public fakeData = {};
  searchTerm$ = new Subject<string>();
  recipeDetails: any;

  navigationExtras: NavigationExtras = {
    queryParams: {
      type: this.fakeData,
    },
  };

  constructor(
    private apiServices: SpoonacularApiService,
    private http: HttpClient,
    private route: Router,
    public nav: NavController
  ) {
    this.http
      .get('../../../assets/data/basic-recipes.json')
      .subscribe((data) => {
        this.fakeData = data;
      });
    this.apiServices
      .search(this.searchTerm$)
      .subscribe((results: IRecipesObject) => {
        this.recipes = results.results;
        console.log(this.recipes);
      });
  }

  ngAfterContentInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  toggleSection(index) {
    // this.recipes[index].open = !this.recipes[index].open;
  }

  private search($event) {
    this.searchTerm$.next($event);
  }

  private getRecipeInfo(recipeId: number): void {
    this.apiServices.getRecipeInfo(recipeId).subscribe((recipeInfo) => {
      this.navigationExtras.queryParams.type = recipeInfo;
    });
    this.pushToNextScreenWithParams();
  }

  private pushToNextScreenWithParams() {
    this.route.navigate(['recipe-detail'], this.navigationExtras);
  }
}
