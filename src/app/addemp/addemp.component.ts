import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { MyResponse } from "../MyResponse";

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  public empModel: Emp;
  public message: MyResponse = { "status": "not done" };
  constructor(private _service: EmpService, private router: Router, private mesageService: MessageService) { }

  ngOnInit() {
    this.empModel = { empId: 100, name: 'Shantanu', city: 'Hyderabad', salary: 45000 };
  }
  public onSubmit() {
    this._service.saveEmp(this.empModel).subscribe(data => this.message = data,error=>console.log(error),()=>this.handleMessage());

  }

  handleMessage() {
    this.mesageService.add(this.message);
    console.log(this.message.status);
    this.router.navigate(['/message']);
  }
}
