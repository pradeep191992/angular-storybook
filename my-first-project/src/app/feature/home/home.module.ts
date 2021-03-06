import { SvgIconModule } from './../../moules/svg-icon/svg-icon.module';
import { CommonsModule } from './../../moules/common/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonsModule,
    SvgIconModule,
  ]
})
export class HomeModule { }
