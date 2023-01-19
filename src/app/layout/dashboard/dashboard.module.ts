import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { StatusComponent } from '../components/status/status.component';
import { BlogComponent } from '../components/blog/blog.component';

@NgModule({
  declarations: [DashboardComponent, StatusComponent, BlogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class DashboardModule {}
