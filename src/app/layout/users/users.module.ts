import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { UsersRoutingModule } from './users-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { UsersComponent } from './users.component';
import { UsercardComponent } from '../components/usercard/usercard.component';

@NgModule({
  declarations: [UsersComponent, UsercardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    UsersRoutingModule,
    DataTablesModule
  ],
  providers: []
})
export class UsersModule {}
