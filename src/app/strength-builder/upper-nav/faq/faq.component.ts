import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogClose } from '../../abstracts/dialog-close.abstract';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent extends DialogClose {

  panelOpenState = false;

  constructor(dialogRef: MatDialogRef<any>) {
    super(dialogRef)
  }

}
