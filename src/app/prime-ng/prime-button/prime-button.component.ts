import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-button',
  templateUrl: './prime-button.component.html',
  styleUrls: ['./prime-button.component.css']
})
export class PrimeButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickHandle() {
    console.log('PrimeNg button clicked');
  }

}
