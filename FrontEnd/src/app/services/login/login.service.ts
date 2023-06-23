import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginuser(data: any){
    return this.http.post("http://localhost:3000/login/login",data);
  }
}
