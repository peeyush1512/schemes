import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-average-number-of-diagnostics-available-in-phc-hwc',
  templateUrl: './average-number-of-diagnostics-available-in-phc-hwc.component.html',
  styleUrls: ['./average-number-of-diagnostics-available-in-phc-hwc.component.scss']
})
export class AverageNumberOfDiagnosticsAvailableInPHCHWCComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','nom'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {

    this.apiservice.callapi('andaphchwc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
