import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsService } from '../../../services/forms/forms.service'
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-ficip',
  templateUrl: './ficip.component.html',
  styleUrls: ['./ficip.component.scss']
})
export class FicipComponent {

  ficipform:any;
  jsondata:any;
  districtname: any;

  constructor(private fb:FormBuilder,private forms: FormsService,private district:ProfileService){

  }
  ngOnInit(){
    this.ficipform=this.fb.group({
      lastyear: ['', [Validators.required]],
      thisyear: ['', [Validators.required]],
    })
    this.getdistrict();
  }



  getdistrict(){
    this.district.getdistrict(localStorage.getItem('user')).subscribe((result:any)=>{
      if(result.message){
        alert(result.message)
      }
      this.districtname=result[0].distname;
    })
  }
  ficipsubmit(){
  
    if(this.ficipform.invalid){
      alert('Error to submit')
    }
    this.jsondata={
      lastyear:this.ficipform.controls['lastyear'].value,
      thisyear:this.ficipform.controls['thisyear'].value,
      district:this.districtname
    }
    
    this.forms.adddata('fullimmunization',this.jsondata).subscribe((result:any)=>{
      if(result.message){
        alert(result.message);
      }
      else{
        alert(result.err)
      }
    })
    this.ficipform.reset();
    
  }

}
