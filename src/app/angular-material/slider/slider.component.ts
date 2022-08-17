import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();

  valueChangeEvent(event: MatSliderChange): void {
    this.valueChange.emit(event.value as number);
  }
}
