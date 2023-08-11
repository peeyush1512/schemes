import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-district-wise-viheicles',
  templateUrl: './district-wise-viheicles.component.html',
  styleUrls: ['./district-wise-viheicles.component.scss']
})
export class DistrictWiseViheiclesComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','lyear','tyear','status'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('jvps').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
