import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewNavComponent } from './home-view-nav/home-view-nav.component';
import { HomeViewMainComponent } from './home-view-main/home-view-main.component';
import { HomeViewFooterComponent } from './home-view-footer/home-view-footer.component';
import { HomeViewComponent } from './home-view.component';
import { MaterialModule } from '../../material/material.module';
import { FadeInOnScrollDirective } from '../../common/directives/fade-in.directive';
import { ScrollToDirective } from '../../common/directives/scroll-to.directive';
import { HomeViewMidArrowComponent } from './home-view-mid-arrow/home-view-mid-arrow.component';
import { AboutComponent } from './home-view-main/about/about.component';
import { PlansComponent } from './home-view-main/plans/plans.component';
import { HomeComponent } from './home-view-main/home/home.component';
import { ScrollProgressDirective } from '../../common/directives/scroll-progress';
import { HomeViewUpperNavComponent } from './home-view-upper-nav/home-view-upper-nav.component';
import { ContactComponent } from './home-view-main/contact/contact.component';



@NgModule({
  declarations: [
    HomeViewComponent,
    HomeViewNavComponent,
    HomeViewMainComponent,
    HomeViewFooterComponent,
    ScrollToDirective,
    FadeInOnScrollDirective,
    HomeViewMidArrowComponent,
    AboutComponent,
    PlansComponent,
    HomeComponent,
    ScrollProgressDirective,
    HomeViewUpperNavComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeViewRoutingModule,
    MaterialModule,
  ]
})
export class HomeViewModule { }
