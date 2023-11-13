import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-view-nav',
  templateUrl: './home-view-nav.component.html',
  styleUrls: ['./home-view-nav.component.scss']
})
export class HomeViewNavComponent {

  isExpanded = false;
  isInfoPanelHidden = true;

  constructor(private dialog: MatDialog) { }

  toggleButton(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleInfoPanel(): void {
    this.isInfoPanelHidden = !this.isInfoPanelHidden;
  }



}
