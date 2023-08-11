import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseurl="http://localhost:3000/reports/";
  constructor(private http:HttpClient) { }

  getdata(method:any,data:any){    
    return this.http.post(this.baseurl+method,{district:data})
  }
}
