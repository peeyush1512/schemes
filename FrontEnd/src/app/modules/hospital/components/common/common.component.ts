import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {

  constructor(private router: Router, private loginservice: LoginService) { }
  ngOnInit() {

    this.checkuser();

  }
  checkuser() {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['login']);
    } else {
      this.loginservice.getuser('getrole/' + localStorage.getItem('user')).subscribe((results: any) => {
        if (results.message) {
          this.router.navigate([results.navigate])
        } else {
          if (results[0].role == 1) {
            this.router.navigate(['state']);
          } else if (results[0].role == 2) {
            this.router.navigate(['district']);
          } else if (results[0].role == 3) {
            this.router.navigate(['hospital']);
          } else {
            this.router.navigate(['login']);
          }
        }
      })
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login'])
  }
  changepassword() {

  }
}
