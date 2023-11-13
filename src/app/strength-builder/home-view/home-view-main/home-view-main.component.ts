import { Component } from '@angular/core';
import { PlanSection } from '../../../data/interfaces/plan-main-view.model';
import { MOCK_PLAN_SECTIONS } from '../../../data/mocks/plans-main-view.mock';

@Component({
  selector: 'app-home-view-main',
  templateUrl: './home-view-main.component.html',
  styleUrls: ['./home-view-main.component.scss']
})
export class HomeViewMainComponent {

  planSections: PlanSection[] = MOCK_PLAN_SECTIONS;

  panelOpenState = false;

}
