import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  baseurl="http://localhost:3000/forms/";
  constructor(private http:HttpClient) { }

  adddata(method:any,data:any){    
    return this.http.post(this.baseurl+method,data)
  }
}
