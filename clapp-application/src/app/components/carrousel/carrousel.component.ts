import {
  OnInit,
  Component,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  HostListener,
  Input,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Virtual } from 'swiper';
import { ProductMatch } from 'src/app/models/models';

SwiperCore.use([Pagination, Virtual]);
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrouselComponent implements OnInit {
  @Input() recommandation: any;

  wineForm: FormGroup;
  isSubmitted = false;
  isRecommandationListItemOpened: boolean = false;
  isDescriptionListItemOpened: boolean = false;
  isWineToAssociateListItemOpened: boolean = false;

  winesRecommandation: ProductMatch[];

  isLoading: boolean = false;
  subscription: Subscription;

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  touchAllowed: boolean;
  public getScreenWidth: number;
  public getScreenHeight: number;
  constructor(public formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    cdr.detach();
    setInterval(() => {
      this.cdr.detectChanges();
    }, 2000);
  }

  ngOnInit() {
    this.cdr.detach();
    this.cdr.detectChanges();
    this.cdr.markForCheck();
  }
  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  swiperSlideChanged(e) {
    this.cdr.detach();
    this.cdr.detectChanges();
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
  formAssociationClicked(): void {
    this.isWineToAssociateListItemOpened =
      !this.isWineToAssociateListItemOpened;
  }

  round(number: number) {
    return Math.round(number * 100) / 10;
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
}
