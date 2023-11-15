import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogClose } from '../../abstracts/dialog-close.abstract';

@Component({
  selector: 'app-calories-calc',
  templateUrl: './calories-calc.component.html',
  styleUrls: ['./calories-calc.component.scss']
})
export class CaloriesCalcComponent extends DialogClose {

  constructor(dialogRef: MatDialogRef<any>) {
    super(dialogRef)
  }




}
