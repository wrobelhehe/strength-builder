import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOpenerUpperNav } from '../abstracts/dialog-opener-upper-nav.abstract';

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.scss']
})
export class UpperNavComponent extends DialogOpenerUpperNav {

  constructor(dialog: MatDialog) {
    super(dialog)
  }
}
