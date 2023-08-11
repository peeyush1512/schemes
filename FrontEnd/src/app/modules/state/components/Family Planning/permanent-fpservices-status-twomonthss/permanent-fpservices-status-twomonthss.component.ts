import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-permanent-fpservices-status-twomonthss',
  templateUrl: './permanent-fpservices-status-twomonthss.component.html',
  styleUrls: ['./permanent-fpservices-status-twomonthss.component.scss']
})
export class PermanentFPServicesStatusTWOMONTHSSComponent {

  data: any;
  // data1: any;

  displayedColumns: string[] = ['percent', 'Malesterilization','Femalesterilization'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.data1 = [{ value: 48,value1: 63, id: 1, dist: 'A' }, { value: 43,value1: 29, id: 1, dist: 'B' },
    // { value: 77,value1: 34, id: 1, dist: 'D' }, { value: 45,value1: 78, id: 1, dist: 'E' }, { value: 45,value1: 48, id: 1, dist: 'G' },
    // { value: 90,value1: 56, id: 1, dist: 'S' }, { value: 89,value1: 62, id: 1, dist: 'W' },
    // { value: 67,value1: 49, id: 1, dist: 'Q' }, { value: 100,value1: 99, id: 1, dist: 'R' }]
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '25',data: [],data1:[],color:"green" }, { percent: '10', data: [],data1:[],color:"yellow" }, { percent: '1', data: [],data1:[],color:"brown" }, { percent: '0', data: [],data1:[],color:"red" }];

    this.apiservice.callapi('pfpss').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value >=25) {
          this.data[0].data.push(element)
        } else if (element.value <= 24 && element.value >= 10) {
          this.data[1].data.push(element)
        } else if (element.value <= 9 && element.value >= 1) {
          this.data[2].data.push(element)
        }else if (element.value==0) {
          this.data[3].data.push(element)
        }
        if (element.value1 >=25) {
          this.data[0].data1.push(element)
        } else if (element.value1 <= 24 && element.value1 >= 10) {
          this.data[1].data1.push(element)
        } else if (element.value1 <=9  && element.value1 >=1) {
          this.data[2].data1.push(element)
        } else if (element.value1 ==0) {
          this.data[3].data1.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    });

  // this.data1.forEach((element: any) => {
    // if (element.value >=25) {
    //   this.data[0].data.push(element)
    // } else if (element.value <= 24 && element.value >= 10) {
    //   this.data[1].data.push(element)
    // } else if (element.value <= 9 && element.value >= 1) {
    //   this.data[2].data.push(element)
    // }else if (element.value==0) {
    //   this.data[3].data.push(element)
    // }
    // if (element.value1 >=25) {
    //   this.data[0].data1.push(element)
    // } else if (element.value1 <= 24 && element.value1 >= 10) {
    //   this.data[1].data1.push(element)
    // } else if (element.value1 <=9  && element.value1 >=1) {
    //   this.data[2].data1.push(element)
    // } else if (element.value1 ==0) {
    //   this.data[3].data1.push(element)
    // }
  // });

  // this.data = new MatTableDataSource(this.data);
 }
}
