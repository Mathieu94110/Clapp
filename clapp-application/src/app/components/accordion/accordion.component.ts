import {
  Input,
  OnInit,
  Component,
  AfterContentChecked,
  ViewChild,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpoonacularApiService } from 'src/services/spoonacular-api.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Virtual } from 'swiper';
import { ProductMatch } from 'src/app/models/models';
import { WineService } from 'src/services/wine.service';
import { Output, EventEmitter } from '@angular/core';
 
  
SwiperCore.use([Pagination, Virtual]);

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit, AfterContentChecked {
  @Input()
  name: string;

  @Input()
  description: string;

  @Output() newItemEvent = new EventEmitter<boolean>();

  wineForm: FormGroup;
  wineDescriptionForm: FormGroup;
  wineAssociateForm: FormGroup;

  isSubmitted = false;
  isRecommandationListItemOpened: boolean = false;
  isDescriptionListItemOpened: boolean = false;
  isWineToAssociateListItemOpened: boolean = false;

  winesRecommandation: ProductMatch[] = [];
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  touchAllowed: boolean = false;
  public getScreenWidth: number;
  public getScreenHeight: number;

  constructor(
    public formBuilder: FormBuilder,
    private spoonacularService: SpoonacularApiService,
    private wineServices: WineService
  ) {}

  ngOnInit() {
    this.wineForm = this.formBuilder.group({
      wine: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      minRating: ['', [Validators.required, Validators.pattern(/[0-9]{0,1}/)]],
      maxPrice: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
    });
    this.wineDescriptionForm = this.formBuilder.group({
      wineDescription: ['', [Validators.required, Validators.minLength(2)]],
    });
    this.wineAssociateForm = this.formBuilder.group({
      dish: ['', [Validators.required, Validators.minLength(2)]],
      maxPricetoAssociate: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
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
  ToggleTouch() {
    this.touchAllowed = this.touchAllowed;
    this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
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
  submitForm() {
    this.isSubmitted = true;
    if (!this.wineForm.valid) {
      console.log('Il manque des valeurs !');
      return false;
    } else {
      const wine = this.wineForm.get('wine').value;
      const quantity = this.wineForm.get('quantity').value;
      const maxPrice = this.wineForm.get('maxPrice').value;
      const minRating = this.wineForm.get('minRating').value;

      this.spoonacularService
        .getWineRecommandation(wine, quantity, maxPrice, minRating)
        .subscribe((data) => {
          console.log(data);
          this.wineServices.setOption(data);
        });
      this.isRecommandationListItemOpened =
        !this.isRecommandationListItemOpened;
     this.addNewItem(this.isRecommandationListItemOpened);
    }
  }
  submitDescriptionForm() {
    this.isSubmitted = true;
    if (!this.wineForm.valid) {
      console.log('Il manque des valeurs !');
      return false;
    } else {
      const wineDescription = this.wineForm.get('wineDescription').value;

      this.spoonacularService
        .getWineDescription(wineDescription)
        .subscribe((data) => {
          console.log(data);
          this.wineServices.setOption(data);
        });
    }
  }
  submitAssociateForm() {
    this.isSubmitted = true;
    if (!this.wineForm.valid) {
      console.log('Il manque des valeurs !');
      return false;
    } else {
      const dish = this.wineForm.get('dish').value;
      const maxPricetoAssociate = this.wineForm.get(
        'maxPricetoAssociate'
      ).value;

      this.spoonacularService
        .getWinePairing(dish, maxPricetoAssociate)
        .subscribe((data) => {
          console.log(data);
          this.wineServices.setOption(data);
        });
    }
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
  addNewItem(value: boolean) {
    this.newItemEvent.emit(value);
  }
}
