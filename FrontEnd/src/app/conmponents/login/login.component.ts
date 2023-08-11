import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { CaptchaService } from '../../services/captcha/captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('captcha') captcha !: ElementRef;
  loginForm !: FormGroup;
  public getjson: any;
  captchadata: any;
  // public returnuser : any ;

  constructor(
    private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private loginservice: LoginService,
    private CaptchaService: CaptchaService
    // private toastr :ToastrService
    // private authenticationService: AuthenticationService
  ) { }


  ngOnInit() {
    this.checkuser()
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      captchatext: ['', [Validators.required]]
    });
    this.getcaptcha();
  }


  //validation user
  checkuser() {
    if (localStorage.getItem('user')) {
      this.loginservice.getuser('getrole/' + localStorage.getItem('user')).subscribe((results: any) => {
        if (results.message) {
            localStorage.removeItem('user')
        } else {
          if (results[0].role == 1) {
            this.router.navigate(['state']);
          } else if (results[0].role == 2) {
            this.router.navigate(['district']);
          } else if (results[0].role == 3) {
            this.router.navigate(['hospital']);
          }
        }
      })
    }
  }

  //login user
  public loginuser() {
    this.getjson = {
      "username": this.loginForm.controls['username'].value,
      "password": this.loginForm.controls['password'].value

    }
    if (this.loginForm.controls['captchatext'].value == this.captchadata.text) {
      this.loginservice.loginuser('login', this.getjson).subscribe((results: any) => {
        if (results.message) {
          alert(results.message)
          // this.toastr.info(results.message);
          this.router.navigate(['login']);
        }
        else {
          if (results[0].name) {
            // this.toastr.success(results[0].name,"Welcome");
            localStorage.setItem('user', results[0].id)
            if (results[0].role == 1) {
              this.router.navigate(['state']);
            } else if (results[0].role == 2) {
              this.router.navigate(['district']);
            } else if (results[0].role == 3) {
              this.router.navigate(['hospital']);
            }
            else {
              this.router.navigate(['login']);
            }
          }
          else {
            //  this.toastr.error(results);
            this.router.navigate(['login']);
          }
        }
      })
    }
    else {
      window.alert('Invalid Captcha')
    }
  }

  //captcha 
  getcaptcha() {
    this.CaptchaService.getcaptcha().subscribe((result: any) => {
      this.captchadata = result;
      this.captcha.nativeElement.innerHTML = result.data;
    })
  }


  public registration_page() {
    this.router.navigate(['registration']);
  }
  public home_page() {
    this.router.navigate(['home']);

  }

}
