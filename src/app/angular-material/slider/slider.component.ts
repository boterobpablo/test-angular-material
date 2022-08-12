import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  
  ngOnInit(): void {
  }

  valueChangeEvent(event: MatSliderChange) {
    this.valueChange.emit(event.value as number);
  }

}
