import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMasterRoutingModule } from './admin-master-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from 'src/shared/shared.module';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    AdminMasterRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminMasterModule { }
