import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-percentage-of-mb-case-among-new-case',
  templateUrl: './percentage-of-mb-case-among-new-case.component.html',
  styleUrls: ['./percentage-of-mb-case-among-new-case.component.scss']
})
export class PercentageOfMBCaseAmongNewCaseComponent {

  data: any;
  data1: any;

  displayedColumns: string[] = ['percent', 'lastyear','thisyear'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.data1 = [{ value: 63,value1: 63, id: 1, dist: 'A' }, { value: 43,value1: 2, id: 1, dist: 'B' },
    // { value: 77,value1: 83, id: 1, dist: 'D' }, { value: 45,value1: 48, id: 1, dist: 'E' }, { value: 69,value1: 48, id: 1, dist: 'G' },
    // { value: 50,value1:86, id: 1, dist: 'S' }, { value: 85,value1: 22, id: 1, dist: 'W' },
    // { value: 76,value1: 49, id: 1, dist: 'Q' }, { value: 60,value1: 79, id: 1, dist: 'R' }]
    this.calldata();


  }

  calldata() {
    this.data = [{ percent: '70',data: [],data1:[],color:"green" }, { percent: '50', data: [],data1:[],color:"yellow" }, { percent: '49', data: [],data1:[],color:"red" }];
    this.apiservice.callapi('pmbcanc').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value > 70 ) {
          this.data[0].data.push(element)
        } else if (element.value <= 70 && element.value >= 50) {
          this.data[1].data.push(element)
        } else if (element.value < 50) {
          this.data[2].data.push(element)
        }
        if (element.value1 > 70) {
          this.data[0].data1.push(element)
        } else if (element.value1 <= 70 && element.value1 >= 50) {
          this.data[1].data1.push(element)
        } else if (element.value1 < 50 ) {
          this.data[2].data1.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    });

  // this.data1.forEach((element: any) => {
  //   if (element.value > 70 ) {
  //     this.data[0].data.push(element)
  //   } else if (element.value <= 70 && element.value >= 50) {
  //     this.data[1].data.push(element)
  //   } else if (element.value < 50) {
  //     this.data[2].data.push(element)
  //   }
  //   if (element.value1 > 70) {
  //     this.data[0].data1.push(element)
  //   } else if (element.value1 <= 70 && element.value1 >= 50) {
  //     this.data[1].data1.push(element)
  //   } else if (element.value1 < 50 ) {
  //     this.data[2].data1.push(element)
  //   }
  // });

  // this.data = new MatTableDataSource(this.data);
 }

 
}
