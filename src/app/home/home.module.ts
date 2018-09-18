import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CoreModule } from '@app/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComboboxComponent } from '../common/combobox/combobox.component';
import { OnlyNumber } from '../common/onlynumbers/onlynumbers.directive';
import { CiFormat } from '../common/ciformat/ciformat.directive';
import { DateFormat } from '../common/dateformat/dateformat.directive';
import { ClickStopPropagation } from '../common/stoppropagation/stoppropagation.directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,OnlyNumber,CiFormat,DateFormat,ComboboxComponent,ClickStopPropagation
  ],
  providers: [

  ]
})
export class HomeModule { }
