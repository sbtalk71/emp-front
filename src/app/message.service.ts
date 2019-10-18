import { Injectable } from '@angular/core';
import { MyResponse } from "./MyResponse";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: string;
  constructor() { }

  public add(message: MyResponse) {
    this.message = message.status;
    //console.log(JSON.stringify(message));
  }
}
