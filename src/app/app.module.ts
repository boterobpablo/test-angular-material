import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DomRenderer2Component } from './dom-renderer2/dom-renderer2.component';

/* modulo donde estoy importando todos los componentes de angular material
o de primeng*/
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, DomRenderer2Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PrimeNgModule,
    ConfirmDialogModule
  ],
  exports: [],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
