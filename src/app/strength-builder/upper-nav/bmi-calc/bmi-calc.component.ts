import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogClose } from '../../abstracts/dialog-close.abstract';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.scss']
})
export class BmiCalcComponent extends DialogClose {

  constructor(dialogRef: MatDialogRef<any>) {
    super(dialogRef)
  }



}
