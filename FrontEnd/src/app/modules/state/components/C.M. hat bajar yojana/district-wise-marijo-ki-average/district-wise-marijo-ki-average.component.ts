import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-district-wise-marijo-ki-average',
  templateUrl: './district-wise-marijo-ki-average.component.html',
  styleUrls: ['./district-wise-marijo-ki-average.component.scss']
})
export class DistrictWiseMarijoKiAverageComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','lyear','tyear','status'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('jmkrakvts').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
