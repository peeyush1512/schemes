import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-key-fp-priorities',
  templateUrl: './key-fp-priorities.component.html',
  styleUrls: ['./key-fp-priorities.component.scss']
})
export class KeyFPPrioritiesComponent {


  data:any;
  data1:any;
  data2:any;
  chart1:any;
  chart2:any;
  chart3:any;
  displayedColumns: string[] = ['index', 'district','pimpa'];
  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.calldata();
    // this.createChart();
    
  }
  calldata(){
    this.data1=[{label:[],data:[]}]
    this.data2=[{label:[],data:[]}]
    this.data=[{label:[],data:{mcpr:[],un:[],tm:[]}}]
    this.apiservice.callapi('kfpp').subscribe((result: any) => {  
      result.nfhs5.forEach((element:any) => {
        this.data1[0].label.push(element.district)
        this.data1[0].data.push(element.data)
      });
      result.nfhs4.forEach((element:any) => {
        this.data2[0].label.push(element.district)
        this.data2[0].data.push(element.data)
      });
      result.mcpr.forEach((element:any) => {
        this.data[0].label.push(element.label)        
        this.data[0].data.mcpr.push(element.mcpr)        
        this.data[0].data.un.push(element.un)        
        this.data[0].data.tm.push(element.tm)        
      });      
      this.createchart1();
      this.createchart2();
      this.createchart3();
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
          label:'MCPR',
          data:this.data[0].data.mcpr,
           backgroundColor:['#c44c06']
        },
        {
          label:'UN',
          data:this.data[0].data.un,
           backgroundColor:['#1aac06']
        },{
          label:'Traditional Method',
          data:this.data[0].data.tm,
           backgroundColor:['#c1a206']
        }
      ],
        // backgroundColor:[]
      },
      options:{
        responsive:false,
        scales:{
          x:{
            stacked:true
          },
          y:{
            stacked:true
          }

        }
      }
    })
  }
  createchart2(){
    if(this.chart2 != undefined){
      this.chart2.destroy();
    }
    this.chart2=new Chart('chart2',{
      type:'bar',
      data:{
        labels:this.data1[0].label,
        datasets:[{
          label:'NFHS 4',
          data:this.data1[0].data,
           backgroundColor:['#c44c06']
        }],
        // backgroundColor:[]
      },
      options:{
        responsive:false,
        indexAxis: 'x'

        
      }
    })
  }
  createchart3(){
    if(this.chart3 != undefined){
      this.chart3.destroy();
    }
    this.chart3=new Chart('chart3',{
      type:'bar',
      data:{
        labels:this.data2[0].label,
        datasets:[{
          label:'NFHS 5',
          data:this.data2[0].data,
           backgroundColor:['#c44c06']
        }],
        // backgroundColor:[]
      },
      options:{
        responsive:false,
        indexAxis: 'x'
      }
    })
  }

}
