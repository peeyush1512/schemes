import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  getprofilename(data:any){
    return this.http.get("http://localhost:3000/profile/profile/"+data);
  }
}
