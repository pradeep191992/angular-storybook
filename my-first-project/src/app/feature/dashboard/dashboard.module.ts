import { SvgIconModule } from './../../moules/svg-icon/svg-icon.module';
import { CommonsModule } from './../../moules/common/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { HistoryPopupComponent } from './history-popup/history-popup.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ListComponent,
    HistoryPopupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule,
    SvgIconModule,
  ]
})
export class DashboardModule { }
