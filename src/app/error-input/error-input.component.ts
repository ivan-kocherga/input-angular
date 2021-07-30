import { Component, Input, OnInit } from '@angular/core';
import errorTextConst from "../errorText.const";

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss']
})

export class ErrorInputComponent implements OnInit {
  @Input('typeError') error
  errorText = errorTextConst

  constructor() { }

  ngOnInit(): void {
  }
}
