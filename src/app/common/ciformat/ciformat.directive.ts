import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CiFormat]'
})


export class CiFormat {
    private el: any;

    constructor(private elementRef: ElementRef) { 
        this.el = this.elementRef.nativeElement;
    }

  

    @HostListener('keyup', ['$event']) onKeyUp(event:KeyboardEvent) {
      

        this.el.value = this.el.value.split('.').join("");;

        console.log(this.el.value)

        if(this.el.value != "" && this.el.value.length == 8 ){
          this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, 4) + "." + this.el.value.substring(4, 7) + "-" + this.el.value.substring(7, 8)
        }
        if(this.el.value != "" && (this.el.value.length >= 1 && this.el.value.length <= 4) ){
          this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, this.el.value.length)
        }
        if(this.el.value != "" && (this.el.value.length >= 5 && this.el.value.length <= 7) ){
          this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, 4)  + "." + this.el.value.substring(5, this.el.value.length)
        }
     
        
        
        
       
    }
}

