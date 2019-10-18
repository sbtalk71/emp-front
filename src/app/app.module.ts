import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { FindempComponent } from './findemp/findemp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpService } from './emp.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    FindempComponent,
    UpdateEmpComponent,
    ListComponent,
    DashboardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
