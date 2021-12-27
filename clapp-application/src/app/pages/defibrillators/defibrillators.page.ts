import { AfterContentInit, HostListener, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SpoonacularApiService } from 'src/services/spoonacular-api.service';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IRecipesObject } from 'src/app/models/models';

@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements AfterContentInit {
  public getScreenWidth: number;
  public getScreenHeight: number;
  public recipes: any;
  public selectedData: any[] = [];
  searchTerm$ = new Subject<string>();

  navigationExtras: NavigationExtras = {
    state: this.selectedData,
  };

  constructor(
    private apiServices: SpoonacularApiService,
    private route: Router,
    public nav: NavController
  ) {
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

  search($event) {
    this.searchTerm$.next($event);
  }

  goToRecipeDetailsPage(id) {
    this.route.navigate(['recipe-details', id]);
  }
}
