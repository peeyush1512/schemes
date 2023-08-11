import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-ppiucd-acceptance-per',
  templateUrl: './ppiucd-acceptance-per.component.html',
  styleUrls: ['./ppiucd-acceptance-per.component.scss']
})
export class PPIUCDAcceptancePERComponent {


  data:any;
  displayedColumns: string[] = ['index', 'district','ppiucda'];
  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.calldata();
    // this.createChart();
    
  }
  calldata(){
    this.data=[{label:[],data:[]}]
    this.apiservice.callapi('ppiucdap').subscribe((result: any) => {  
      this.data=new MatTableDataSource(result); 
   })
    
  }



}
