import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { WineService } from 'src/services/wine.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.page.html',
  styleUrls: ['./wines.page.scss'],
})
export class WinesPage {
  winesCategories: any = [];
  public getScreenWidth: number;
  public getScreenHeight: number;
  isRecommandationListItemOpened: boolean = false;
  carouselDatas: any = [];
  descriptionDatas: { wineDescription: string | null };

  accordionItemClicked: boolean;
  astring$: Observable<string>;
  constructor(private wineService: WineService) {
    this.wineService.getOption().subscribe((data) => {
      this.carouselDatas = data;
    });
    this.wineService.getWineDescription().subscribe((data) => {
      this.descriptionDatas = data;
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

  showHideRecommandation(value: any) {
    this.accordionItemClicked = value;
  }
  showHideDescription(value: any) {
    this.accordionItemClicked = value;
  }
  showHideAssociation(value: any) {
    this.accordionItemClicked = value;
  }
}
