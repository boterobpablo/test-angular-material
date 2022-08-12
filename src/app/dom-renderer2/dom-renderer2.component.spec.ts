import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomRenderer2Component } from './dom-renderer2.component';

describe('DomRenderer2Component', () => {
  let component: DomRenderer2Component;
  let fixture: ComponentFixture<DomRenderer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomRenderer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomRenderer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
