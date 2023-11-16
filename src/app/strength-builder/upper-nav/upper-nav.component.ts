import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOpen } from '../abstracts/dialog-open.abstract';
import { LanguageSelectComponent } from './language-select/language-select.component';

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.scss']
})
export class UpperNavComponent extends DialogOpen {

  langComponent = LanguageSelectComponent

  constructor(dialog: MatDialog) {
    super(dialog)
  }

}
