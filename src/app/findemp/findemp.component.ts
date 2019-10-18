import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-findemp',
  templateUrl: './findemp.component.html',
  styleUrls: ['./findemp.component.css']
})
export class FindempComponent implements OnInit {
  empId:number=1;
  private emp:Emp={empId:111,name:'',city:'',salary:1111};
  constructor(private _service:EmpService) { }

  ngOnInit() {
  }
onSubmit(){
  this._service.find(this.empId).subscribe(data=>this.emp=data);
}
}
