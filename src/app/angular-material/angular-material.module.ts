import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SliderComponent } from './slider/slider.component';
import { DialogComponent } from './dialog/dialog.component';

/* Componentes de Angular Material */
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AutocompleteComponent,
    DialogComponent,
    SliderComponent,
  ],

  /* modulos */
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
  ],

  /* exporto lo que quiero usar fuera de este modulo */
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSliderModule,
    AutocompleteComponent,
    DialogComponent,
    SliderComponent,
  ]
})
export class AngularMaterialModule { }
