import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './presentational/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
