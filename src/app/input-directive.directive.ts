import { Directive, HostListener , ElementRef , Input } from '@angular/core';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective {

  @Input('appInputDirective') format;
  constructor( private el:ElementRef) { }
  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLocaleUpperCase();
  }
}
