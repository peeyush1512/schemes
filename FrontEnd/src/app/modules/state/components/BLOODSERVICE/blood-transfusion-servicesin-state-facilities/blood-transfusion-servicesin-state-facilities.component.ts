import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-blood-transfusion-servicesin-state-facilities',
  templateUrl: './blood-transfusion-servicesin-state-facilities.component.html',
  styleUrls: ['./blood-transfusion-servicesin-state-facilities.component.scss']
})
export class BloodTransfusionServicesinStateFacilitiesComponent {


  data:any;
  displayedColumns: string[] = ['activity', 'achiev'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }
  calldata(){
    this.apiservice.callapi('btssf').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    }) 

  }
}
