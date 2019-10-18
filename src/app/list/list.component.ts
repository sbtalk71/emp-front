import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

public empList:Emp[];
  constructor(private _service:EmpService) { }

  ngOnInit() {
    this._service.getEmpList().subscribe(data=>this.empList=data);
  }

}
