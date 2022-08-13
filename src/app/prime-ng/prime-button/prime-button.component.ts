import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-button',
  templateUrl: './prime-button.component.html',
  styleUrls: ['./prime-button.component.css']
})
export class PrimeButtonComponent {
  constructor() {}

  clickHandle() {
    console.log('PrimeNg button clicked');
  }
}
