import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepsmenu',
  templateUrl: './stepsmenu.component.html',
  styleUrls: ['./stepsmenu.component.scss']
})
export class StepsmenuComponent implements OnInit {

  @Input() steps: any;

  constructor() { }

  ngOnInit() {
    
  }

}
