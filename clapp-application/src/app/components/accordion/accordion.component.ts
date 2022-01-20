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
import { Output, EventEmitter } from '@angular/core';

SwiperCore.use([Pagination, Virtual]);

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit, AfterContentChecked {
  @Output() recommandationData = new EventEmitter<any>();
  @Output() descriptionData = new EventEmitter<any>();
  @Output() associationData = new EventEmitter<any>();

  wineRecommandationForm: FormGroup;
  wineDescriptionForm: FormGroup;
  wineAssociateForm: FormGroup;

  isSubmitted = false;

  // list opened
  isDescriptionListItemOpened: boolean = false;
  isAssociationListItemOpened: boolean = false;
  isRecommandationListItemOpened: boolean = false;

  currentDescription: { wineDescription: string };
  winesAssociation: any;

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  touchAllowed: boolean = false;
  public getScreenWidth: number;
  public getScreenHeight: number;

  constructor(
    public formBuilder: FormBuilder,
    private spoonacularService: SpoonacularApiService
  ) {}

  ngOnInit() {
    this.wineRecommandationForm = this.formBuilder.group({
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

  formRecommandationClicked() {
    this.isRecommandationListItemOpened = !this.isRecommandationListItemOpened;
  }
  formDescriptionClicked() {
    this.isDescriptionListItemOpened = !this.isDescriptionListItemOpened;
  }

  formAssociationClicked() {
    this.isAssociationListItemOpened = !this.isAssociationListItemOpened;
  }

  submitRecommandationForm() {
    this.isSubmitted = true;
    if (!this.wineRecommandationForm.valid) {
      console.log('Il manque des valeurs !');
      return false;
    } else {
      const wine = this.wineRecommandationForm.get('wine').value;
      const quantity = this.wineRecommandationForm.get('quantity').value;
      const maxPrice = this.wineRecommandationForm.get('maxPrice').value;
      const minRating = this.wineRecommandationForm.get('minRating').value;

      this.spoonacularService
        .getWineRecommandation(wine, quantity, maxPrice, minRating)
        .subscribe((data) => {
          console.log(data);
          this.recommandationData.emit(data);
        });
      this.isRecommandationListItemOpened =
        !this.isRecommandationListItemOpened;
    }
  }

  submitDescriptionForm() {
    this.isSubmitted = true;
    if (!this.wineDescriptionForm.valid) {
      console.log('Il manque des valeurs !');
      return false;
    } else {
      const wineDescription =
        this.wineDescriptionForm.get('wineDescription').value;
      this.spoonacularService
        .getWineDescription(wineDescription)
        .subscribe((data: any) => {
          this.descriptionData.emit(data);
        });

      this.isDescriptionListItemOpened = !this.isDescriptionListItemOpened;
    }
  }

  submitAssociateForm() {
    this.isSubmitted = true;
    if (!this.wineAssociateForm.valid) {
      console.log('Il manque des valeurs !');
      return false;
    } else {
      const dish = this.wineAssociateForm.get('dish').value;
      const maxPricetoAssociate = this.wineAssociateForm.get(
        'maxPricetoAssociate'
      ).value;

      this.spoonacularService
        .getWinePairing(dish, maxPricetoAssociate)
        .subscribe((data) => {
          this.associationData.emit(data);
        });
      this.isAssociationListItemOpened = !this.isAssociationListItemOpened;
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

  shownList = null;

  toggleList(list) {
    if (this.isListExpanded(list)) {
      this.shownList = null;
    } else {
      this.shownList = list;
    }
  }

  isListExpanded(list) {
    return this.shownList === list;
  }
}
