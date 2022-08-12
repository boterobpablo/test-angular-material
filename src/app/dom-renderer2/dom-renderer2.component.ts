import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dom-renderer2',
  templateUrl: './dom-renderer2.component.html',
  styleUrls: ['./dom-renderer2.component.css']
})
export class DomRenderer2Component implements OnInit {

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    const pNode = this.renderer2.createElement('p');
    const txtNode = this.renderer2.createText('A new text node');
    this.renderer2.appendChild(pNode, txtNode);
    this.renderer2.appendChild(this.elementRef.nativeElement, pNode);
    console.log(this.elementRef.nativeElement);
  }

}
