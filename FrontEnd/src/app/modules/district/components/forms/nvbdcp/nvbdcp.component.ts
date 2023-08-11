import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsService } from '../../../services/forms/forms.service';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-nvbdcp',
  templateUrl: './nvbdcp.component.html',
  styleUrls: ['./nvbdcp.component.scss']
})
export class NvbdcpComponent {

  entryform:any;
  jsondata:any;
  districtname: any;

  constructor(private fb:FormBuilder,private forms: FormsService,private district:ProfileService){

  }
  ngOnInit(){
    this.entryform=this.fb.group({
      data1: ['', [Validators.required]],
      dat2: ['', [Validators.required]],
    })
    this.getdistrict();
  }



  getdistrict(){
    this.district.getdistrict(localStorage.getItem('user')).subscribe((result:any)=>{
      if(result.message){
        alert(result.message)
      }
      
      this.districtname=result[0].distname;
    
      console.log(this.districtname);
    })
  }
  formsubmit(){
  
    if(this.entryform.invalid){
      alert('Error to submit')
    }
    this.jsondata={
      tabsrdt:this.entryform.controls['data1'].value,
      irspc:this.entryform.controls['data2'].value,
      Dcase:this.entryform.controls['data3'].value,
      mmdpsflc:this.entryform.controls['data4'].value,
      mms:this.entryform.controls['data5'].value,
      hs:this.entryform.controls['data6'].value,
      district:this.districtname
    }
    
    this.forms.adddata('nvbdcp',this.jsondata).subscribe((result:any)=>{
      if(result.message){
        alert(result.message);
      }
      else{
        alert(result.err)
      }
    })
    this.entryform.reset();
    
  }

}
