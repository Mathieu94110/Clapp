import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  description: string;

  wineForm: FormGroup;
  isSubmitted = false;
  isRecommandationListItemOpened: boolean = false;
  isDescriptionListItemOpened: boolean = false;
  isWineToAssociateListItemOpened: boolean = false;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.wineForm = this.formBuilder.group({
      wine: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      minPrice: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      maxPrice: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
    });
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
      console.log(this.wineForm.value);
    }
  }
}
