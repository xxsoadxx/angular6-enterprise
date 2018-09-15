import { Component, OnInit } from '@angular/core';
import { ScopeService } from '../services/scope.service';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { ValidateCI } from '../common/ci_validator/ci-validator.directive';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  viewForm: FormGroup;
  scope:any;
  
  

  constructor(private formBuilder: FormBuilder,
              private ScopeService:ScopeService,
              private router:Router) { }

  ngOnInit() {
    this.scope = this.ScopeService.getScope();

      this.viewForm = this.formBuilder.group({
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          cedula: ['', [Validators.required , ValidateCI ]]
      });
  }
  
  get f() { return this.viewForm.controls; }

  continuar() {
   
        //call function
       
       
     
     

      this.viewForm.controls.nombre.setValue("Santiago");
      console.log(this.f.nombre.value);
      console.log(this.f.apellido.value);

      //this.router.navigate(['step2'],{ skipLocationChange : true }); 
  }

}
