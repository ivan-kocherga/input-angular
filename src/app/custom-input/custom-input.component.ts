import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export type typeInput = 'text' | 'number' | 'email';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input('formControllerName') controller: FormControl;
  @Input('placeholder') placeholder: string;
  @Input('label') label: string;
  @Input('error') error: boolean;
  @Input('type') typeInputGet: typeInput;

  constructor() {}

  ngOnInit(): void {}

  get isInvalidControl(): boolean {
    return this.controller.invalid;
  }

  get isTouchedControl(): boolean {
    return this.controller.touched;
  }

  getPlaceholder(): string {
    return this.placeholder ? this.placeholder : '';
  }

  get controllerKeys(): string[] {
    return Object.keys(this.controller.errors);
  }
}
