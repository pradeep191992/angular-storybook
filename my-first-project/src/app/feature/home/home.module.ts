import { CommonsModule } from './../../moules/common/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    HomeComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonsModule,
  ]
})
export class HomeModule { }
