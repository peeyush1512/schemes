import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-state-scenario-blood-collection',
  templateUrl: './state-scenario-blood-collection.component.html',
  styleUrls: ['./state-scenario-blood-collection.component.scss']
})
export class StateScenarioBloodCollectionComponent {


  data:any;
  displayedColumns: string[] = ['head', 'lastyear', 'thisyear'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }
  calldata(){
    this.apiservice.callapi('ssbc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    }) 

  }
}
