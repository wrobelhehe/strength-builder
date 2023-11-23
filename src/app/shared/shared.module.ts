import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from '../strength-builder/upper-nav/language-select/language-select.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInOnScrollDirective } from '../common/directives/fade-in.directive';
import { ScrollToDirective } from '../common/directives/scroll-to.directive';
import { ScrollProgressDirective } from '../common/directives/scroll-progress';
import { UpperNavComponent } from '../strength-builder/upper-nav/upper-nav.component';
import { BottomFooterComponent } from '../strength-builder/bottom-footer/bottom-footer.component';



@NgModule({
  declarations: [LanguageSelectComponent, ScrollToDirective,
    FadeInOnScrollDirective, ScrollProgressDirective, UpperNavComponent, BottomFooterComponent


  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forChild(),

  ],
  exports: [
    LanguageSelectComponent,
    ScrollProgressDirective, ScrollToDirective, FadeInOnScrollDirective, UpperNavComponent, BottomFooterComponent
  ]

})
export class SharedModule { }
