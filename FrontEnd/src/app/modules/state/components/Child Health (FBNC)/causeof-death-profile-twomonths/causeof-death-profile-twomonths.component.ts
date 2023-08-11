import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'chart.js/auto';
import { ApiService } from '../../../services/api/api.service';
@Component({
  selector: 'app-causeof-death-profile-twomonths',
  templateUrl: './causeof-death-profile-twomonths.component.html',
  styleUrls: ['./causeof-death-profile-twomonths.component.scss']
})
export class CauseofDeathProfileTWOMONTHSComponent {


  data:any;
  chart:any;
  chart1:any;

  constructor(private apiservice:ApiService){

  }
  ngOnInit(){

    this.calldata();
    // this.createChart();
    
  }
  calldata(){
    // this.data=[['HIE / Moderate-Severe Birth Asphyxia','Meconium Aspiration Syndrome','Respiratory Distress Syndrome','Major Congenital Malformation','Prematurity ( <28 weeks of Gestation)','E.L.B.W. (Wt. less than 1000g)','Sepsis'],[42,4,22,1,4,12,15]] 
    this.data=[{label:[],data:[]}]
    this.apiservice.callapi('cdp').subscribe((result: any) => {   
      result.forEach((element:any) => {
        this.data[0].label.push(element.label)        
        this.data[0].data.push(element.data)        
      });
      this.createchart();
      // this.data = new MatTableDataSource(result);
    })
    
  }

  createchart(){
    if(this.chart != undefined){
      this.chart.destroy();
    }
    this.chart=new Chart('chart',{
      type:'pie',
      data:{
        labels:this.data[0].label,
        datasets:[{
          label:'',
          data:this.data[0].data
        }],
        // backgroundColor:[]
      },
      options:{
        responsive:false
      }
    })
  }


}




// createChart(){
  
//   this.chart1 = new Chart("chart1", {
//     type: 'pie', //this denotes tha type of chart

//     data: {// values on X-Axis
//       labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
//                '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
//        datasets: [
//         {
//           label: "Sales",
//           data: ['467','576', '572', '79', '92',
//                '574', '573', '576'],
//           backgroundColor: 'blue'
//         },
//         {
//           label: "Profit",
//           data: ['542', '542', '536', '327', '17',
//                  '0.00', '538', '541'],
//           backgroundColor: 'limegreen'
//         }  
//       ]
//     },
//     options: {
//       aspectRatio:2.5
//     }
    
//   });
// }