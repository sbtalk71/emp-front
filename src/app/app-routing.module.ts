import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindempComponent } from './findemp/findemp.component';
import { ListComponent } from './list/list.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [{path:'addemp',component:AddempComponent},
{path:'findemp',component:FindempComponent},
{path:'update',component:UpdateEmpComponent},
{path:'list',component:ListComponent},
{path:'message',component:MessageComponent},
{path:'',component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
