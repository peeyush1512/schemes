import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm !: FormGroup;
    public getjson:any;
    // public returnuser : any ;
    
    constructor(
        private formBuilder: FormBuilder, private route: ActivatedRoute,
        private router: Router ,private LoginService:LoginService
        // private toastr :ToastrService
        // private authenticationService: AuthenticationService
    ){  }
    

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
        
    }

    //login user
  public loginuser() {
        this.getjson={
            "username":this.loginForm.controls['name'].value,
            "password":this.loginForm.controls['password'].value
            
        }
        this.LoginService.loginuser(this.getjson).subscribe((results : any )=>{
          if(results.message){
                alert(results.message) 
                // this.toastr.info(results.message);
                  this.router.navigate(['login']);
            }
            else{              
              if(results[0].name){
                // this.toastr.success(results[0].name,"Welcome");
                localStorage.setItem('user',results[0].id)
                if(results[0].role==1){
                  this.router.navigate(['state']);
                }else if(results[0].role==2){
                  this.router.navigate(['district']);
                }else if(results[0].role==3){
                  this.router.navigate(['hospital']);
                }
                else{
                  this.router.navigate(['pagenotfound']);
                } 
              }
              else{
                //  this.toastr.error(results);
                 this.router.navigate(['login']);
              }            
            }      
        })  
    }
    public registration_page() {
      this.router.navigate(['registration']);
    }
    public home_page() {
      this.router.navigate(['home']);
      
    }
    
}
