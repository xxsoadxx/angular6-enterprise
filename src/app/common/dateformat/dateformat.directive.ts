import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[DateFormat]'
})


export class DateFormat {
    private el: any;

    constructor(private elementRef: ElementRef) { 
        this.el = this.elementRef.nativeElement;
    }

    @HostListener('keyup', ['$event']) onKeyUp(event:KeyboardEvent) {
      

        this.el.value = this.el.value.split('/').join("");

        if(this.el.value != "" && this.el.value.length == 8 ){
          this.el.value = this.el.value.substring(0, 2) + "/" + this.el.value.substring(2, 4) + "/" + this.el.value.substring(4, 8) 
        }
        if(this.el.value != "" && (this.el.value.length >= 4 && this.el.value.length <= 8) ){
          this.el.value = this.el.value.substring(0, 2) + "/" + this.el.value.substring(2, 4)  + "/" + this.el.value.substring(4, this.el.value.length)
        }
        if(this.el.value != "" && (this.el.value.length >= 2 && this.el.value.length <= 4) ){
          this.el.value = this.el.value.substring(0, 2) + "/" + this.el.value.substring(2, this.el.value.length)
        }

    }
}

