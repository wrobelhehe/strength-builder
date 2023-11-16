import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOpen } from '../../abstracts/dialog-open.abstract';

@Component({
  selector: 'app-home-view-nav',
  templateUrl: './home-view-nav.component.html',
  styleUrls: ['./home-view-nav.component.scss']
})
export class HomeViewNavComponent extends DialogOpen {

  isExpanded = false;
  constructor(dialog: MatDialog) {
    super(dialog)
  }

  toggleButton(): void {
    this.isExpanded = !this.isExpanded;
  }
}
