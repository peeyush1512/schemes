import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-trainingof-healthandwellnessambassado-shwp',
  templateUrl: './trainingof-healthandwellnessambassado-shwp.component.html',
  styleUrls: ['./trainingof-healthandwellnessambassado-shwp.component.scss']
})
export class TrainingofHealthandwellnessambassadoSHWPComponent {

  data:any;
  data1:any;
  displayedColumns: string[] = ["index", 'district', 'target','achiev'];
  displayedColumns1: string[] = ["index", 'district', 'target','achiev'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }
  calldata(){
    this.apiservice.callapi('thawa').subscribe((result:any)=>{
      console.log(result);
      this.data=new MatTableDataSource(result.lastyear);
      this.data1=new MatTableDataSource(result.thisyear);
      console.log(this.data,this.data1);
      
    }) 

  }

}
