import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-new-case-fy',
  templateUrl: './new-case-fy.component.html',
  styleUrls: ['./new-case-fy.component.scss']
})
export class NewCaseFYComponent {

  data: any;
  data1: any;

  displayedColumns: string[] = ['index', 'district','newcase'];
  chart1: any;

  constructor(private apiservice:ApiService) {

  }

  ngOnInit() {


    this.calldata();


  }




  calldata() {
    this.data=[{label:[],data:[]}]
    this.apiservice.callapi('newcase').subscribe((result: any) => {
      this.data1 = new MatTableDataSource(result.data1);
      result.data2.forEach((element:any) => {
        this.data[0].label.push(element.district)
        this.data[0].data.push(element.data)
      });
      
    console.log(this.data);
    this.createchart1();
    })
    
  
  }

  createchart1(){
    if(this.chart1 != undefined){
      this.chart1.destroy();
    }
    this.chart1=new Chart('chart1',{
      type:'bar',
      data:{
        labels:this.data[0].label,
        datasets:[{
          label:'PR /10000 ( Till Now)',
          data:this.data[0].data,
          backgroundColor:['#c44c06']
        }
      ],
        // backgroundColor:[]
      },
      options:{
        responsive:false,
        indexAxis:'x'
      }
    })
  }

}
