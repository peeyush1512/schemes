import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-ihip-reporting-status',
  templateUrl: './ihip-reporting-status.component.html',
  styleUrls: ['./ihip-reporting-status.component.scss']
})
export class IHIPReportingStatusComponent {

  data: any;
  chart1: any;
  chart2: any;
  chart3: any;
  constructor(private apiservice:ApiService) {

  }

  ngOnInit(){

    this.calldata();

  }




  calldata() {
    this.data=[{label:[],ss:[],ps:[],ls:[]}]
    this.apiservice.callapi('ihiprs').subscribe((result: any) => {
      result.forEach((element:any) => {
        this.data[0].label.push(element.district)
        this.data[0].ss.push(element.ss)
        this.data[0].ps.push(element.ps)
        this.data[0].ls.push(element.ls)
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
          label:'Syndromic Surveillance',
          data:this.data[0].ss,
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

  createchart2(){
    if(this.chart2 != undefined){
      this.chart2.destroy();
    }
    this.chart2=new Chart('chart2',{
      type:'bar',
      data:{
        labels:this.data[0].label,
        datasets:[{
          label:'Presumptive surveillance',
          data:this.data[0].ps,
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

  createchart3(){
    if(this.chart3 != undefined){
      this.chart3.destroy();
    }
    this.chart3=new Chart('chart3',{
      type:'bar',
      data:{
        labels:this.data[0].label,
        datasets:[{
          label:'Laboratory Surveillance',
          data:this.data[0].ls,
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
