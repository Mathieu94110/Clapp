import {
  Input,
  OnInit,
  Component,
  AfterContentChecked,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpoonacularApiService } from 'src/services/spoonacular-api.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Pagination, Virtual } from 'swiper';
import { HttpClient } from '@angular/common/http';
SwiperCore.use([Pagination, Virtual]);
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.page.html',
  styleUrls: ['./carrousel.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarrouselPage implements OnInit {
  wineForm: FormGroup;
  isSubmitted = false;
  isRecommandationListItemOpened: boolean = false;
  isDescriptionListItemOpened: boolean = false;
  isWineToAssociateListItemOpened: boolean = false;
  // winesRecommandation$: Observable<any[]>;
  winesRecommandation: any;
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  // config: SwiperOptions = {
  //   slidesPerView: 2,
  //   spaceBetween: 50,
  //   pagination: true,
  // };
  touchAllowed: boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    private spoonacularService: SpoonacularApiService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.http.get('assets/data/basic-recipes.json').subscribe((data) => {
    //   this.winesRecommandation = data;
    //   console.log(this.winesRecommandation);
    // });

    const wine = 'merlot';
    const quantity = 6;
    const maxPrice = 100;
    const minRating = 0;

    this.spoonacularService
      .getWineRecommandation(wine, quantity, maxPrice, minRating)
      .subscribe((data) => {
        this.winesRecommandation = data;
        console.log(this.winesRecommandation);
      });
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  swiperSlideChanged(e) {
    console.log('changed ', e);
  }
  next() {
    this.swiper.swiperRef.slideNext(500);
  }
  prev() {
    this.swiper.swiperRef.slidePrev(500);
  }

  wineRecommandationToggleAccordion(): void {
    this.isRecommandationListItemOpened = !this.isRecommandationListItemOpened;
  }
  wineDescriptionToggleAccordion(): void {
    this.isDescriptionListItemOpened = !this.isDescriptionListItemOpened;
  }
  winesToAssociateToggleAccordion(): void {
    this.isWineToAssociateListItemOpened =
      !this.isWineToAssociateListItemOpened;
  }

  round(number: number) {
    return Math.round(number * 100) / 10;
  }
}
