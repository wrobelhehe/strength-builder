import { MatDialog } from '@angular/material/dialog';
import { BmiCalcComponent } from '../upper-nav/bmi-calc/bmi-calc.component';
import { CaloriesCalcComponent } from '../upper-nav/calories-calc/calories-calc.component';
import { DataComponent } from '../upper-nav/data/data.component';
import { FaqComponent } from '../upper-nav/faq/faq.component';
import { FfmiCalcComponent } from '../upper-nav/ffmi-calc/ffmi-calc.component';

export abstract class DialogOpenerUpperNav {
    constructor(private dialog: MatDialog) { }


    components: any = [
        { name: 'FAQ', component: FaqComponent },
        { name: 'Data', component: DataComponent },
        { name: 'Calories Calculator', component: CaloriesCalcComponent },
        { name: 'FFMI Calculator', component: FfmiCalcComponent },
        { name: 'BMI Calculator', component: BmiCalcComponent }
    ];

    openDialog(component: any) {
        this.dialog.open(component, {
            width: '100vh',
            height: '80vh'
        });

    }

}
