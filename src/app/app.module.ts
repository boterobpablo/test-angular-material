import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/* modulo donde estoy importando todos los componentes de angular material */
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { DomRenderer2Component } from './dom-renderer2/dom-renderer2.component';

@NgModule({
  declarations: [
    AppComponent,
    DomRenderer2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
