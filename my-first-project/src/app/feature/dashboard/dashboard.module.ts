import { CommonsModule } from './../../moules/common/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule,
  ]
})
export class DashboardModule { }
