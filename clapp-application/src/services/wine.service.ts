import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor() {}

  _messageSource$ = new Subject<any>();
  _wineDescription$ = new Subject<any>();

  setOption(value) {
    this._messageSource$.next(value);
    this._wineDescription$.next(null);
    console.log(value);
  }

  getOption() {
    return this._messageSource$;
  }

  setWineDescription(value) {
    const emptyArray = [];
    console.log(value);
    this._messageSource$.next(emptyArray);
    setTimeout(() => {
      this._wineDescription$.next(value);
    }, 1000);

    console.log(value);
  }

  getWineDescription() {
    return this._wineDescription$;
  }
}
