import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-district-wise-lfu-and-viral-load-pendency',
  templateUrl: './district-wise-lfu-and-viral-load-pendency.component.html',
  styleUrls: ['./district-wise-lfu-and-viral-load-pendency.component.scss']
})
export class DistrictWiseLFUAndViralLoadPendencyComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','lfu','vl'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('dwlfu&vlp').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
