import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserService } from 'src/services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzLayoutModule,
    NzIconModule,
    NzTableModule,
    NzModalModule,
    NzNotificationModule,
    NzButtonModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    HttpClientModule,
    NzLayoutModule,
    NzIconModule,
    NzTableModule,
    NzModalModule,
    NzNotificationModule,
    NzButtonModule
  ],
  providers: [UserService]
})
export class SharedModule { }
