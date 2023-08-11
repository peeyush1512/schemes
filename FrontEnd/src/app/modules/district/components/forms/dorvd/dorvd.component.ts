import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsService } from '../../../services/forms/forms.service';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-dorvd',
  templateUrl: './dorvd.component.html',
  styleUrls: ['./dorvd.component.scss']
})
export class DorvdComponent {

  dorvdform:any;
  districtname: any;
  jsondata:any;

  constructor(private fb:FormBuilder,private forms: FormsService,private district:ProfileService){

  }
  ngOnInit(){
    this.dorvdform=this.fb.group({
      lastyear: ['', [Validators.required]],
      thisyear: ['', [Validators.required]],
    })
  }



  dorvdsubmit(){
    this.district.getdistrict(localStorage.getItem('user')).subscribe((result:any)=>{
      if(result.message){
        alert(result.message)
        this.dorvdform.reset();
      }
      this.districtname=result[0].distname;
    })
    if(this.dorvdform.invalid){
      alert('Error to submit')
    }
    this.jsondata={
      lastyear:this.dorvdform.controls['lastyear'].value,
      thisyear:this.dorvdform.controls['thisyear'].value,
      district:this.districtname
    }
    this.forms.adddata('dorvd',this.jsondata).subscribe((result:any)=>{
      alert(result.message);
    })
    
  }

}
