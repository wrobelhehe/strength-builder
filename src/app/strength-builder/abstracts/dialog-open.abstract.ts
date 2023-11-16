import { MatDialog } from '@angular/material/dialog';
import { BmiCalcComponent } from '../upper-nav/bmi-calc/bmi-calc.component';
import { CaloriesCalcComponent } from '../upper-nav/calories-calc/calories-calc.component';
import { DataComponent } from '../upper-nav/data/data.component';
import { FaqComponent } from '../upper-nav/faq/faq.component';
import { FfmiCalcComponent } from '../upper-nav/ffmi-calc/ffmi-calc.component';

export abstract class DialogOpen {
    constructor(private dialog: MatDialog) { }


    components: any = [
        { name: 'faq', component: FaqComponent },
        { name: 'data', component: DataComponent },
        { name: 'caloriesCalculator', component: CaloriesCalcComponent },
        { name: 'ffmiCalculator', component: FfmiCalcComponent },
        { name: 'bmiCalculator', component: BmiCalcComponent }
    ];

    openDialog(component: any) {
        this.dialog.open(component, { restoreFocus: false })
    }

}
