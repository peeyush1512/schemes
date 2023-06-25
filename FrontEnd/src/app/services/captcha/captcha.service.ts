import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http:HttpClient) { }

  getcaptcha(){
    return this.http.get('http://localhost:3000/captcha/getcaptcha');
  }
}
