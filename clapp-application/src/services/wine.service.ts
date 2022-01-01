// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import { ProductMatch } from 'src/app/models/models';

// @Injectable({
//   providedIn: 'root',
// })
// export class WineService {
//   constructor() {}

//   // public subject = new Subject<any>();
//   // public winesRecommandation: any = [];
//   // private messageSource = new BehaviorSubject(this.winesRecommandation);
//   // currentMessage = this.messageSource.asObservable();
//   messageSource: Subject<any> = new Subject();

//   setOption(value) {
//     this.messageSource.next(value);
//     console.log(value);
//   }

//   getOption() {
//     return this.messageSource;
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ProductMatch } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor() { }
  
  _messageSource$ = new Subject<any>();

  setOption(value) {
    this._messageSource$.next(value);
    console.log(value);
  }

  getOption() {
    return this._messageSource$;
  }
}
