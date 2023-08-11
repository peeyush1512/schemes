import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApiService } from '../../../services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-per-injectable-mpa-users-among-eligiblecouples',
  templateUrl: './per-injectable-mpa-users-among-eligiblecouples.component.html',
  styleUrls: ['./per-injectable-mpa-users-among-eligiblecouples.component.scss']
})
export class PERInjectableMPAUsersAmongEligiblecouplesComponent {


  data:any;
  data1:any;
  chart:any;
  displayedColumns: string[] = ['index', 'district','pimpa'];
  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.calldata();
    // this.createChart();
    
  }
  calldata(){
    this.data=[{label:[],data:[]}]
    this.apiservice.callapi('pimpauaec').subscribe((result: any) => {  
      this.data1=new MatTableDataSource(result.pimpadata); 
      result.timpauphnwra.forEach((element:any) => {
        this.data[0].label.push(element.year)        
        this.data[0].data.push(element.data)        
      });
      this.createchart();
    })
    
  }

  createchart(){
    if(this.chart != undefined){
      this.chart.destroy();
    }
    this.chart=new Chart('chart',{
      type:'bar',
      data:{
        labels:this.data[0].label,
        datasets:[{
          label:'Total Injectable MPA users per 100 MWRA',
          data:this.data[0].data,
           backgroundColor:['#c44c06']
        }],
        // backgroundColor:[]
      },
      options:{
        responsive:false
      }
    })
  }

}
