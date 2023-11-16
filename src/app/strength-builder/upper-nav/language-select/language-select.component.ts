import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
    translate.onLangChange.subscribe(langChangeEvent => {
      this.currentLang = langChangeEvent.lang;
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

}
