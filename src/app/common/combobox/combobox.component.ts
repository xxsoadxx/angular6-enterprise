import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})

export class ComboboxComponent implements OnInit {
  options:any;
  selected: any;
  theCheckbox:boolean;

  @Input() datamodel: any;


  constructor() { }

  ngOnInit() {
    this.theCheckbox = false;

    if(this.datamodel.value == "" || this.datamodel.value == null){
      this.selected = {"Val": "" ,"Desc":"Seleccione"};
    } else{
      this.selected = this.datamodel.value;
    }
   
    this.options = [
      {"Val": "valor1" ,"Desc":"Descripcion1"},
      {"Val": "valor2" ,"Desc":"Descripcion2"},
      {"Val": "valor3" ,"Desc":"Descripcion3"}
    ]
  }

  closeCombo(){
    this.theCheckbox = false;
  }

  fnCombo(){
    if (this.theCheckbox)
      this.theCheckbox = false;
    else
      this.theCheckbox = true;
  }

  select(parm:any){
    this.theCheckbox = false;
    this.datamodel.setValue(parm);
    this.selected = parm;
  }
}
