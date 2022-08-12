import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';

import { PrimeButtonComponent } from './prime-button/prime-button.component';
import { PrimeSliderComponent } from './prime-slider/prime-slider.component';


@NgModule({
  declarations: [
    PrimeButtonComponent,
    PrimeSliderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SliderModule,
  ],
  exports: [
    ButtonModule,
    SliderModule,
    PrimeButtonComponent,
    PrimeSliderComponent,
  ]
})
export class PrimeNgModule { }
