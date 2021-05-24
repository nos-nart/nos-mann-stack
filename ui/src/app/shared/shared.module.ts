import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent],
  declarations: [MainLayoutComponent],
  providers: [],
})
export class SharedModule {}
