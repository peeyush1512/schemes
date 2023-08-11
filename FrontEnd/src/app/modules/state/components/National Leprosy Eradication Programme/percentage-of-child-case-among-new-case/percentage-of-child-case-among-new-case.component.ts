import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-percentage-of-child-case-among-new-case',
  templateUrl: './percentage-of-child-case-among-new-case.component.html',
  styleUrls: ['./percentage-of-child-case-among-new-case.component.scss']
})
export class PercentageOfChildCaseAmongNewCaseComponent {

  data: any;
  data1: any;

  displayedColumns: string[] = ['percent', 'lastyear','thisyear'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.data1 = [{ value: 0.3,value1: 63, id: 1, dist: 'A' }, { value: 43,value1: 2, id: 1, dist: 'B' },
    // { value: 0.7,value1: 3, id: 1, dist: 'D' }, { value: 7,value1: 0.8, id: 1, dist: 'E' }, { value: 9,value1: 48, id: 1, dist: 'G' },
    // { value: 50,value1:0.6, id: 1, dist: 'S' }, { value: 5,value1: 2, id: 1, dist: 'W' },
    // { value: 3,value1: 0.9, id: 1, dist: 'Q' }, { value: 0,value1: 9, id: 1, dist: 'R' }]
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '6',data: [],data1:[],color:"green" }, { percent: '2', data: [],data1:[],color:"yellow" }, { percent: '1', data: [],data1:[],color:"red" }];
    this.apiservice.callapi('pccanc').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value > 6 ) {
          this.data[0].data.push(element)
        } else if (element.value <= 6 && element.value >= 2) {
          this.data[1].data.push(element)
        } else if (element.value < 2) {
          this.data[2].data.push(element)
        }
        if (element.value1 > 6) {
          this.data[0].data1.push(element)
        } else if (element.value1 <= 6 && element.value1 >= 2) {
          this.data[1].data1.push(element)
        } else if (element.value1 < 2 ) {
          this.data[2].data1.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    });

  // this.data1.forEach((element: any) => {
  //   if (element.value > 6 ) {
  //     this.data[0].data.push(element)
  //   } else if (element.value <= 6 && element.value >= 2) {
  //     this.data[1].data.push(element)
  //   } else if (element.value < 2) {
  //     this.data[2].data.push(element)
  //   }
  //   if (element.value1 > 6) {
  //     this.data[0].data1.push(element)
  //   } else if (element.value1 <= 6 && element.value1 >= 2) {
  //     this.data[1].data1.push(element)
  //   } else if (element.value1 < 2 ) {
  //     this.data[2].data1.push(element)
  //   }
  // });

  // this.data = new MatTableDataSource(this.data);
 }

 
}
