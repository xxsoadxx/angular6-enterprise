import { AbstractControl } from '@angular/forms';
declare function validate_ci(arg:string):any;

export function ValidateCI(control: AbstractControl) {
  const civalid = validate_ci(control.value);
  return { "civalid" : civalid };
}

