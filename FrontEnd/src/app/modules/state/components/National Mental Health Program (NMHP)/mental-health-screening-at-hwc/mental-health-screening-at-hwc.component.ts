import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-mental-health-screening-at-hwc',
  templateUrl: './mental-health-screening-at-hwc.component.html',
  styleUrls: ['./mental-health-screening-at-hwc.component.scss']
})
export class MENTALHEALTHSCREENINGATHWCComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','nmhpsthwc','npsmhihwc','pachiev','tnppmhi'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('mhsahwc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
