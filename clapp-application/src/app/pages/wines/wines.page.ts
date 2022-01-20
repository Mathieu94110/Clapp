import { Component, HostListener } from '@angular/core';
import { ProductMatch } from 'src/app/models/models';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.page.html',
  styleUrls: ['./wines.page.scss'],
})
export class WinesPage {
  public getScreenWidth: number;
  public getScreenHeight: number;

  currentRecommandation: ProductMatch[] = [];
  currentDescription: { wineDescription: string } | {} = {};
  currentAssociation: [] = [];

  isRecommandationDisplay: boolean = false;
  isDescriptionDisplay: boolean = false;
  isAssociationDisplay: boolean = false;

  constructor() {}

  ngAfterContentInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  setRecommandation(value: ProductMatch[]) {
    this.currentRecommandation = value;
    this.isRecommandationDisplay = true;
    this.isDescriptionDisplay = false;
    this.isAssociationDisplay = false;
  }
  setDescription(value: any) {
    this.currentDescription = value;
    console.log(this.currentDescription);
    this.isDescriptionDisplay = true;
    this.isRecommandationDisplay = false;
    this.isAssociationDisplay = false;
  }

  setAssociation(value: any) {
    this.currentAssociation = value;
    this.isAssociationDisplay = true;
    this.isRecommandationDisplay = false;
    this.isDescriptionDisplay = false;
  }
}
