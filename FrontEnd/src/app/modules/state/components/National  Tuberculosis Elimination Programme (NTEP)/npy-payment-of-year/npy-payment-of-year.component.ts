import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-npy-payment-of-year',
  templateUrl: './npy-payment-of-year.component.html',
  styleUrls: ['./npy-payment-of-year.component.scss']
})
export class NPYPaymentOFYEARComponent {


  data1: any;
  data: any;

  displayedColumns: string[] = ['Indicator', 'district'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.data1 = [{ value:48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    // { value: 70, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 73, id: 1, dist: 'R' }]
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '100', data: [],color:"green" }, { percent: '75', data: [],color:"yellow" }, { percent: '49', data: [],color:"red" }];


    this.apiservice.callapi('npypt').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value > 75) {
          this.data[0].data.push(element)
        } else if (element.value <= 75 && element.value >= 50) {
          this.data[1].data.push(element)
        } else if (element.value < 50) {
          this.data[2].data.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    });
  // this.data1.forEach((element: any) => {

    // if (element.value > 75) {
    //   this.data[0].data.push(element)
    // } else if (element.value <= 75 && element.value >= 50) {
    //   this.data[1].data.push(element)
    // } else if (element.value < 50) {
    //   this.data[2].data.push(element)
    // }
  // });

  // this.data = new MatTableDataSource(this.data);
 
  
}


}
