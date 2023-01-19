import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, TopnavComponent, SidebarComponent],
  imports: [CommonModule, MaterialModule, LayoutRoutingModule]
})
export class LayoutModule {}
