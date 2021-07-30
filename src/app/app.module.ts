import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorInputComponent } from './error-input/error-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    ErrorInputComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
