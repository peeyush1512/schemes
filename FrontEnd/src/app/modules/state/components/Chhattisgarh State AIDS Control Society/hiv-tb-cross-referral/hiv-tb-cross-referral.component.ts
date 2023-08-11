import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-hiv-tb-cross-referral',
  templateUrl: './hiv-tb-cross-referral.component.html',
  styleUrls: ['./hiv-tb-cross-referral.component.scss']
})
export class HIVTBCrossReferralComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','cthiv','ncrfsn','ncrfns','perr'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('hivtbcr').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
