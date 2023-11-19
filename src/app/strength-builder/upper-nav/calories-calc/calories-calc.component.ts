import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogClose } from '../../abstracts/dialog-close.abstract';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calories-calc',
  templateUrl: './calories-calc.component.html',
  styleUrls: ['./calories-calc.component.scss']
})
export class CaloriesCalcComponent extends DialogClose {

  caloricRequirement: any

  personalFormGroup = this.formBuilder.group({
    weight: ['', Validators.required],
    height: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
  });

  activityFormGroup = this.formBuilder.group({
    activity: ['', Validators.required],
  });

  goalFormGroup = this.formBuilder.group({
    goal: ['', Validators.required],
  });

  activities: any[] = [
    { value: 0, translation: 'activity-0', description: 'activity-0-desc' },
    { value: 1, translation: 'activity-1', description: 'activity-1-desc' },
    { value: 2, translation: 'activity-2', description: 'activity-2-desc' },
    { value: 3, translation: 'activity-3', description: 'activity-3-desc' },
    { value: 4, translation: 'activity-4', description: 'activity-4-desc' },

  ];

  goals: any[] = [
    { value: 0, translation: 'goal-0' },
    { value: 1, translation: 'goal-1' },
    { value: 2, translation: 'goal-2' },

  ];


  constructor(dialogRef: MatDialogRef<any>, private formBuilder: FormBuilder) {
    super(dialogRef)
  }

  calculateCaloricRequirement() {
    const weight: any = this.personalFormGroup.get('weight')?.value;
    const height: any = this.personalFormGroup.get('height')?.value;
    const age: any = this.personalFormGroup.get('age')?.value;
    const gender: any = this.personalFormGroup.get('gender')?.value;
    const activityLevel: any = this.activityFormGroup.get('activity')?.value;

    let bmr: number;

    if (gender === 'm') {
      // Wzór dla mężczyzn
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      // Wzór dla kobiet
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Mnożnik aktywności
    const activityMultiplier = [1.2, 1.375, 1.55, 1.725, 1.9][activityLevel];

    // Całkowite zapotrzebowanie kaloryczne
    this.caloricRequirement = bmr * activityMultiplier;
    console.log(this.caloricRequirement)
  }



}
