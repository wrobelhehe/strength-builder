import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from '../strength-builder/upper-nav/language-select/language-select.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [LanguageSelectComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forChild(),

  ],
  exports: [
    LanguageSelectComponent
  ]

})
export class SharedModule { }
