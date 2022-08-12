import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-slider',
  templateUrl: './prime-slider.component.html',
  styleUrls: ['./prime-slider.component.css']
})
export class PrimeSliderComponent implements OnInit {

  val: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
