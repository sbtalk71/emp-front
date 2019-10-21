import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  showFlag: boolean = false;
  showForm:boolean=false;
  public emp: Emp;
  empId: number = 1;
  constructor(private _service: EmpService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log("data submitted")
    this._service.find(this.empId).subscribe(data => this.emp = data, error => console.log(error), () => this.toggle())
  }
  toggle(): void {
    this.showFlag = true;
  }

  doEdit():void{
    this.showFlag = false;
    this.showForm=true;
  }

  onSubmit2() {
    console.log("data submitted")
    this.showFlag = false;
    this.showForm=false;
  }
}
