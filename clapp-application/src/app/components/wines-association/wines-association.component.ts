import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wines-association',
  templateUrl: './wines-association.component.html',
  styleUrls: ['./wines-association.component.scss'],
})
export class WinesAssociationComponent implements OnInit {
  @Input() association: string;
  constructor() {}

  ngOnInit() {}
  round(number: number) {
    return Math.round(number * 100) / 10;
  }
}
