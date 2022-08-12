import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeSliderComponent } from './prime-slider.component';

describe('PrimeSliderComponent', () => {
  let component: PrimeSliderComponent;
  let fixture: ComponentFixture<PrimeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
