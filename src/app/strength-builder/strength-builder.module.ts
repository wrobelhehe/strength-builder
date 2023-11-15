import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrengthBuilderComponent } from './strength-builder.component';
import { StrengthBuilderRoutingModule } from './strength-builder-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import { MaterialModule } from '../material/material.module';
import { FaqComponent } from './upper-nav/faq/faq.component';
import { DataComponent } from './upper-nav/data/data.component';
import { CaloriesCalcComponent } from './upper-nav/calories-calc/calories-calc.component';
import { FfmiCalcComponent } from './upper-nav/ffmi-calc/ffmi-calc.component';
import { BmiCalcComponent } from './upper-nav/bmi-calc/bmi-calc.component';
import { DialogOpenerUpperNav } from './abstracts/dialogOpenerUpperNav.abstract';

@NgModule({
  declarations: [
    StrengthBuilderComponent,
    MainViewComponent,
    FaqComponent,
    DataComponent,
    CaloriesCalcComponent,
    FfmiCalcComponent,
    BmiCalcComponent,
  ],
  imports: [
    CommonModule,
    StrengthBuilderRoutingModule,
    MaterialModule,

  ]
})
export class StrengthBuilderModule { }
