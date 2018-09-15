import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@app/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComboboxComponent } from '../common/combobox/combobox.component';
import { OnlyNumber } from '../common/onlynumbers/onlynumbers.directive';
import { CiFormat } from '../common/ciformat/ciformat.directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,ComboboxComponent,OnlyNumber,CiFormat
  ],
  providers: [

  ]
})
export class HomeModule { }
