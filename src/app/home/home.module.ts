import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
