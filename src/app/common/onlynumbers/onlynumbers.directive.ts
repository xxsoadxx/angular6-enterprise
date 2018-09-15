import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})


export class OnlyNumber {

    private el: any;

    regexStr = '^[0-9]*$';
    constructor(private elementRef: ElementRef) { 
        this.el = this.elementRef.nativeElement;
    }
  
    @Input() OnlyNumber: boolean;
  
    @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {

      let e = <KeyboardEvent> event;
      
      if (this.OnlyNumber) {
          console.log(e.keyCode);
          if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
          // Allow: Ctrl+A
          (e.keyCode == 65 && e.ctrlKey === true) ||
          // Allow: Ctrl+C
          (e.keyCode == 67 && e.ctrlKey === true) ||
          // Allow: Ctrl+V
          (e.keyCode == 86 && e.ctrlKey === true) ||
          // Allow: Ctrl+X
          (e.keyCode == 88 && e.ctrlKey === true) ||
          // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
          }
        let ch = String.fromCharCode(e.keyCode);
        let regEx =  new RegExp(this.regexStr);    

        if(e.keyCode == 190) {
            e.preventDefault();
        }
        if(regEx.test(ch))
            return;
        else
            e.preventDefault();
        }
        
        
    }
 
}