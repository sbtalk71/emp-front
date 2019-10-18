import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './emp';
import { MyResponse } from "./MyResponse";

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  

  private base_url="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public getEmpList(): Observable<Emp[]>{
    return this.http.get<Emp[]>(this.base_url+'emp/list1')
  }

  saveEmp(empModel: Emp):Observable<MyResponse> {
    console.log('saveEmp called...');
    return this.http.post<MyResponse>(this.base_url+'emp/save',empModel)
  }


  find(empId: number): Observable<Emp> {
    return this.http.get<Emp>(this.base_url+'emp/find/'+empId);
  }
}
