import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrengthBuilderComponent } from './strength-builder.component';
import { StrengthBuilderRoutingModule } from './strength-builder-routing.module';
import { MainViewComponent } from './main-view/main-view.component';



@NgModule({
  declarations: [
    StrengthBuilderComponent,
    MainViewComponent,

  ],
  imports: [
    CommonModule,
    StrengthBuilderRoutingModule
  ]
})
export class StrengthBuilderModule { }
