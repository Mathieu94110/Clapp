import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-defibrillators',
  templateUrl: './defibrillators.page.html',
  styleUrls: ['./defibrillators.page.scss'],
})
export class DefibrillatorsPage implements OnInit {
  @HostBinding('class.navbar-opened') navbarOpened = false;

  burgerImg: string = '../../assets/icon/burger-button-icon.png';
  markImg: string = '../../assets/icon/mark-icon.png';

  constructor() {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
}
