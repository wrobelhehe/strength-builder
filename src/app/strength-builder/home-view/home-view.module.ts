import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewNavComponent } from './home-view-nav/home-view-nav.component';
import { HomeViewMainComponent } from './home-view-main/home-view-main.component';
import { HomeViewFooterComponent } from './home-view-footer/home-view-footer.component';
import { HomeViewComponent } from './home-view.component';



@NgModule({
  declarations: [
    HomeViewComponent,
    HomeViewNavComponent,
    HomeViewMainComponent,
    HomeViewFooterComponent
  ],
  imports: [
    CommonModule,
    HomeViewRoutingModule
  ]
})
export class HomeViewModule { }
