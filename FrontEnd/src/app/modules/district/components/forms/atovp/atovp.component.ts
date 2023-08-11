import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsService } from '../../../services/forms/forms.service';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-atovp',
  templateUrl: './atovp.component.html',
  styleUrls: ['./atovp.component.scss']
})
export class AtovpComponent {

  atovpform:any;
  jsondata:any;
  districtname:any;

  constructor(private fb:FormBuilder,private forms: FormsService,private district:ProfileService){

  }
  ngOnInit(){
    this.atovpform=this.fb.group({
      lastyear: ['', [Validators.required]],
      thisyear: ['', [Validators.required]],
    })
  }



  atovpsubmit(){

    this.district.getdistrict(localStorage.getItem('user')).subscribe((result:any)=>{
      if(result.message){
        alert(result.message)
        this.atovpform.reset();
      }
      this.districtname=result[0].distname;
    })
    if(this.atovpform.invalid){
      alert('Error to submit')
    }
    this.jsondata={
      lastyear:this.atovpform.controls['lastyear'].value,
      thisyear:this.atovpform.controls['thisyear'].value,
      district:this.districtname
    }
    this.forms.adddata('atovp',this.jsondata).subscribe((result:any)=>{
      alert(result.message);
    })
    
  }

}
