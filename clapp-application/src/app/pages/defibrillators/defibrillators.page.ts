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

@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements AfterContentInit, OnDestroy {
  searchTerm$ = new Subject<string>();

  public getScreenWidth: number;
  public getScreenHeight: number;
  customers: Object;
  keyupSubscription: Subscription;

  constructor(private apiServices: SpoonacularApiService) {}

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
    this.customers[index].open = !this.customers[index].open;
  }

  search($event) {
    this.searchTerm$.next($event.target.value);
    this.apiServices.search(this.searchTerm$).subscribe((results) => {
      this.customers = results;
    });
  }
  ngOnDestroy() {
    this.keyupSubscription.unsubscribe();
  }
}
