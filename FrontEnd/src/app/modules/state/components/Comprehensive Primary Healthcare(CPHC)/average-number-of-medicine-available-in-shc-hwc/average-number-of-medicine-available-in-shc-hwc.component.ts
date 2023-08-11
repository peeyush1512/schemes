import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-average-number-of-medicine-available-in-shc-hwc',
  templateUrl: './average-number-of-medicine-available-in-shc-hwc.component.html',
  styleUrls: ['./average-number-of-medicine-available-in-shc-hwc.component.scss']
})
export class AverageNumberOfMedicineAvailableInSHCHWCComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','nom'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('anmashchwc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
