import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { maxlength, minlength } from './errorText.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  form: FormGroup

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(minlength), Validators.maxLength(maxlength)]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  getControlField(name): FormControl{
    return this.form.controls[name] as FormControl
  }

}
