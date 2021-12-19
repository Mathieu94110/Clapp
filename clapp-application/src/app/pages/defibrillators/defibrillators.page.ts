import {
  AfterContentInit,
  HostListener,
  Component,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { environment } from '../../../environments/environment';
import { fromEvent, Subscription } from 'rxjs';
import { SpoonacularApiService } from 'src/services/spoonacular-api.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements AfterContentInit, OnDestroy {
  apiKey: string = environment.apiKey;
  @ViewChild('searchText', { static: true }) searchText: ElementRef;

  public getScreenWidth: number;
  public getScreenHeight: number;
  customers: any[];
  keyupSubscription: Subscription;

  constructor(private apiServices: SpoonacularApiService) {}

  ngAfterContentInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.keyupSubscription = fromEvent(this.searchText.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: Event) => (<HTMLInputElement>event.target).value),
        distinctUntilChanged(),
        switchMap((value) => this.apiServices.searchRecipes(value))
      )
      .subscribe((data) => {
        console.log(data);
        // this.customers= data
      });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  toggleSection(index) {
    this.customers[index].open = !this.customers[index].open;
  }

  ngOnDestroy() {
    this.keyupSubscription.unsubscribe();
  }
}
