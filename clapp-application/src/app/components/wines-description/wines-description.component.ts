import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wines-description',
  templateUrl: './wines-description.component.html',
  styleUrls: ['./wines-description.component.scss'],
})
export class WinesDescriptionComponent implements OnInit {
  @Input() description: any;
  constructor() {}

  ngOnInit() {}
}
