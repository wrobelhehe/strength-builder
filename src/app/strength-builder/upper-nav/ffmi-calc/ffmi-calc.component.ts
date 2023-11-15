import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogClose } from '../../abstracts/dialog-close.abstract';

@Component({
  selector: 'app-ffmi-calc',
  templateUrl: './ffmi-calc.component.html',
  styleUrls: ['./ffmi-calc.component.scss']
})
export class FfmiCalcComponent extends DialogClose {
  constructor(dialogRef: MatDialogRef<any>) {
    super(dialogRef)
  }
}
