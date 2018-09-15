import { Directive, ElementRef, HostListener, Input } from '@angular/core';
declare function validation_digit(arg:string):any;

@Directive({
  selector: '[CiFormat]'
})


export class CiFormat {
    private el: any;

    constructor(private elementRef: ElementRef) { 
        this.el = this.elementRef.nativeElement;
    }

    @HostListener('keyup', ['$event']) onKeyUp(event:KeyboardEvent) {
        let e = <KeyboardEvent> event;
        if(e.keyCode == 8 && this.el.value.length > 7){
          this.el.value = "";
        }
        this.el.value = this.el.value.split('.').join("");
        this.el.value = this.el.value.split('-').join("");

        if (this.el.value.length > 7){
          this.el.value = this.el.value.substring(0, 7)
        }
          
        if(this.el.value != "" && (this.el.value.length >= 7) ){
          this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, 4)  + "." + this.el.value.substring(4, this.el.value.length) + '-' + validation_digit(this.el.value)
        }
        if(this.el.value != "" && (this.el.value.length >= 4 && this.el.value.length <= 7) ){
          this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, 4)  + "." + this.el.value.substring(4, this.el.value.length)
        }
        if(this.el.value != "" && (this.el.value.length >= 1 && this.el.value.length <= 4) ){
          this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, this.el.value.length)
        }
    }
}

