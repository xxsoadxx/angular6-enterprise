import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { Step2RoutingModule } from './step2-routing.module';
import { Step2Component } from './step2.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    Step2RoutingModule
  ],
  declarations: [
    Step2Component
  ],
  providers: [

  ]
})
export class Step2Module { }
