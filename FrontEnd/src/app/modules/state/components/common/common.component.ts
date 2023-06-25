import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {
  username: any;



  constructor(private router:Router,private ProfileService:ProfileService){

  }
  ngOnInit(){
    this.getusername();
  }


  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  getusername(){
    this.ProfileService.getprofilename(localStorage.getItem('user')).subscribe((result:any)=>{
      this.username=result[0];
    })
  }


}
